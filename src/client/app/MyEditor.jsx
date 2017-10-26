import React from 'react';
import ReactDOM from 'react-dom';
import { Editor, EditorState, RichUtils, Modifier } from 'draft-js';
import ReactJson from 'react-json-view'

class MyEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editorState: EditorState.createEmpty() };
    this.onChange = (editorState) => this.setState({ editorState });
    this.handleKeyCommand = this.handleKeyCommand.bind(this)
  }

  handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command)
    if (newState) {
      this.onChange(newState)
      return "handled"
    }
    return "not-handled"
  }

  _onBoldClick() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'))
  }

  _onLinkKlick() {

  }

  render() {
    return (
      <div>
        <div className="editor">
          <button className="editorButton" onClick={this._onBoldClick.bind(this)}>B</button>
          <button className="editorButton" onClick={this._onLinkKlick.bind(this)}>K</button>
          <Editor editorState={this.state.editorState} onChange={this.onChange} handleKeyCommand={this.handleKeyCommand} />
        </div>
        <div>
          <pre>{JSON.stringify(this.state.editorState.getCurrentContent(), null, 2)}</pre>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <MyEditor />,
  document.getElementById('app')
);