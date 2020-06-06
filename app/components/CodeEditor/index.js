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
      <div>
        Code Editor
        <MonacoEditor
          width="700"
          height="600"
          language="javascript"
          theme="vs-dark"
          value={code}
          options={options}
          onChange={this.onChange}
          editorDidMount={this.editorDidMount}
        />
      </div>
    );
  }
}

export default CodeEditor;
