import React from 'react';
import MonacoEditor from 'react-monaco-editor';
import { debounce } from 'lodash';
import { connect } from 'react-redux';
import {
  addTab,
  deleteTab,
  selectTab,
  updateCode,
  saveCode,
  updateValidity,
} from './action';
import safeEval from '../../utils/safeEval';
import {
  CodeEditorWrapper,
  TabPaneWrapper,
  TabListWrapper,
  TabWrapper,
  AddTabWrapper,
  SaveButtonWrapper,
  CodePaneWrapper,
  MonacoWrapper,
} from './style';
import { SaveButton } from '../../components/Buttons';

class CodeEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        {
          name: 'index.js',
          code: `/* This is index.js \n* Please don't modify/add any functions apart from respond function. \n*/ \nasync function respond(input) {
    const translatedText = await Campk12.translate(input, "spanish")
    return translatedText
}`,
          deletable: false,
          selected: true,
        },
        {
          name: 'test.js',
          code: '/* This is test.js \n* \n*/',
          deletable: true,
          selected: false,
        },
      ],
      isValidCode: false,
    };
    this.monacoOptions = {
      selectOnLineNumbers: true,
      parameterHints: true,
      autoIndent: true,
      automaticLayout: true,
      autoClosingBrackets: true,
      autoClosingQuotes: true,
      codeLens: true,
      find: true,
      minimap: { enabled: false },
      cursorBlinking: true,
      scrollbar: false,
      overviewRulerBorder: false,
      overviewRulerLanes: 0,
      fontSize: '14',
      scrollBeyondLastColumn: 2,
      scrollBeyondLastLine: false,
      quickSuggestions: true,
      quickSuggestionsDelay: 10,
    };
    this.onChangeHandler = debounce(this.onChangeHandler, 1500);
  }

  editorDidMount(editor, monaco) {
    editor.focus();
  }

  componentDidMount() {
    this.saveCode();
  }

  saveCode = () => {
    if (this.props.currentCode) this.props.saveCode();
    this.props.updateValidity(false);
  };

  validateCode = async code => {
    try {
      const response = await safeEval('hi', code);
      if (typeof response === 'string' && response)
        this.props.updateValidity(true);
      else this.props.updateValidity(false);
    } catch (error) {
      this.props.updateValidity(false);
      console.log(error);
    }
  };

  onChangeHandler = (newValue, e) => {
    this.props.updateCode(newValue);
    this.validateCode(newValue);
  };

  setCode = code => {
    this.props.updateCode(code);
  };

  setTab = (e, tabName) => {
    this.props.selectTab(tabName);
    this.validateCode(newValue);
  };

  addTab = e => {
    const name = prompt('Please enter file name.');
    if (name)
      this.props.addTab({
        name: `${name}.js`,
        code: `/* This is ${name}.js \n* \n*/`,
        deletable: true,
        selected: true,
      });
  };

  removeTab = (e, name) => {
    this.props.deleteTab(name);
  };

  render() {
    const { isValidCode, currentCode } = this.props;
    return (
      <CodeEditorWrapper>
        <TabPaneWrapper>
          <TabListWrapper>
            {this.props.tabs.map(tab => (
              <TabWrapper selected={tab.selected} deletable={tab.deletable}>
                <span onClick={e => this.setTab(e, tab.name)}>{tab.name}</span>
                {tab.deletable ? (
                  <span
                    onClick={e =>
                      this.removeTab(e, tab.name) && e.stopPropagation()
                    }
                  >
                    &nbsp;&nbsp;&times;
                  </span>
                ) : (
                  ''
                )}
              </TabWrapper>
            ))}
            <AddTabWrapper onClick={this.addTab}>
              <strong>+</strong>
            </AddTabWrapper>
          </TabListWrapper>
          <SaveButtonWrapper>
            <SaveButton onClick={this.saveCode} disabled={!isValidCode}>
              Apply Changes
            </SaveButton>
          </SaveButtonWrapper>
        </TabPaneWrapper>
        <CodePaneWrapper>
          <MonacoWrapper>
            <MonacoEditor
              // width="700"
              height="700"
              language="javascript"
              theme="vs-dark"
              value={currentCode}
              options={this.monacoOptions}
              onChange={this.onChangeHandler}
              editorDidMount={this.editorDidMount}
              ref={editor =>
                (this.editor = editor) && (window.onresize = this.editor.layout)
              }
            />
          </MonacoWrapper>
        </CodePaneWrapper>
      </CodeEditorWrapper>
    );
  }
}

const mapStateToProps = ({ code }) => {
  return code;
};

export default connect(
  mapStateToProps,
  { addTab, deleteTab, selectTab, updateCode, saveCode, updateValidity },
)(CodeEditor);
