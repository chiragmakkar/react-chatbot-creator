import React from 'react';
import MonacoEditor from 'react-monaco-editor';

class CodeEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: '// type your code...',
    };
  }

  editorDidMount(editor, monaco) {
    // console.log('editorDidMount', editor);
    editor.focus();
  }

  onChange = (newValue, e) => {
    // console.log('onChange', newValue, e);
    this.props.setCode(newValue);
    this.setState({ code: newValue }, () => console.log(this.state.code));
  };

  render() {
    const { code } = this.state;
    const options = {
      selectOnLineNumbers: true,
    };
    return (
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
          height="800"
          language="javascript"
          theme="vs-dark"
          value={this.props.code}
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
          }}
          onChange={this.onChange}
          editorDidMount={this.editorDidMount}
          ref={editor =>
            (this.editor = editor) && (window.onresize = this.editor.layout)
          }
        />
      </div>
    );
  }
}

export default CodeEditor;
