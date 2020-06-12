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
      const response = await this.props.testResponse('hi', code);
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
      <div style={{ display: 'inline-block', width: '40%' }}>
        <div
          style={{
            // borderRight: 'solid 2px #2b2b2b',
            borderTop: 'solid 2px #2b2b2b',
            display: 'inline-block',
            width: '100%',
            height: '5%',
            padding: '1% 1% 0% 1%',
          }}
        >
          <div
            style={{
              display: 'inline-block',
              width: '75%',
              height: '100%',
            }}
          >
            {this.props.tabs.map(tab => (
              <div
                style={{
                  fontFamily: 'Quicksand',
                  fontSize: '12px',
                  fontWeight: '500',
                  fontStretch: 'normal',
                  fontStyle: 'normal',
                  lineHeight: 'normal',
                  letterSpacing: 'normal',
                  color: '#c6c6c6',
                  marginLeft: !tab.deletable ? '3%' : undefined,
                  borderLeft: !tab.deletable ? 'solid 2px #2b2b2b' : undefined,
                  borderTop: 'solid 2px #2b2b2b',
                  borderRight: 'solid 2px #2b2b2b',
                  minWidth: '13%',
                  padding: '1.5% 1% 1% 1%',
                  borderTopLeftRadius: '4px',
                  borderTopRightRadius: '4px',
                  height: '100%',
                  backgroundColor: tab.selected ? '#1f1f1f' : '#171717',
                  display: 'inline-block',
                }}
                // onClick={e => this.setTab(e, tab.name)}
              >
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
              </div>
            ))}
            <div
              style={{
                width: '2%',
                display: 'inline-block',
                marginLeft: '2%',
              }}
              onClick={this.addTab}
            >
              <strong>+</strong>
            </div>
          </div>
          <div style={{ display: 'inline-block', width: '25%' }}>
            <button
              style={{
                backgroundColor: isValidCode ? '#66d68d' : 'lightGrey',
                borderRadius: '4px',
                fontSize: '12px',
                color: isValidCode ? 'darkslategrey' : 'black',
              }}
              onClick={this.saveCode}
              disabled={!isValidCode}
            >
              Apply Changes
            </button>
          </div>
        </div>
        <div
          style={{
            // border: 'solid 2px #2b2b2b',
            display: 'inline-block',
            width: '100%',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              // padding: '10%',
              fontFamily: 'Quicksand',
              fontSize: '14px',
              fontWeight: 'normal',
              fontStretch: 'normal',
              fontStyle: 'normal',
              lineHeight: 'normal',
              letterSpacing: 'normal',
              color: '#d3d3d3',
            }}
          >
            <MonacoEditor
              // width="700"
              height="700"
              language="javascript"
              theme="vs-dark"
              value={currentCode}
              options={{
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
              }}
              onChange={this.onChangeHandler}
              editorDidMount={this.editorDidMount}
              ref={editor =>
                (this.editor = editor) && (window.onresize = this.editor.layout)
              }
            />
          </div>
        </div>
      </div>
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
