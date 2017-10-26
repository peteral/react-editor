import React from 'react';
import ReactDOM from 'react-dom';
import {Editor, EditorState} from 'draft-js';

class MyEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
    this.onChange = (editorState) => {
      this.setState({editorState})
      
      console.log(editorState)
    };
  }
  render() {
    return (
        <div className="editor">
            <Editor editorState={this.state.editorState} onChange={this.onChange} />
        </div>
    );
  }
}

ReactDOM.render(
  <MyEditor />,
  document.getElementById('app')
);