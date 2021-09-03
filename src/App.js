import React, { Component } from "react";
import NotesItem from "./NotesItem";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      noteTitleInput: "",
      noteDetailInput: "",
      notes: [],
    };
  }

  handleNoteTitleInputChange = (event) => {
    const value = event.target.value;
    this.setState({
      noteTitleInput: value,
    });
  };

  handlenoteDetailInputChange = (event) => {
    const value = event.target.value;
    this.setState({
      noteDetailInput: value,
    });
  };

  handleCancleClick = () => {
    this.setState({
      noteTitleInput: null,
      noteDetailInput: null,
    });
  };

  handleSaveClick = () => {
    const noteTitleInput = this.state.noteTitleInput;
    const noteDetailInput = this.state.noteDetailInput;
    const note = {
      noteTitleText: noteTitleInput,
      noteDetailText: noteDetailInput,
    };

    const notesCloned = this.state.notes.slice();
    notesCloned.push(note);

    this.setState({
      notes: notesCloned,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="header">
          <h1>Mero Notes</h1>
        </div>
        <button
          className="add-notes"
          onClick={this.hideShow}
          style={{ color: "white" }}
        >
          +
        </button>
        <div className="clear" />

        <div className="form">
          <label>Title</label>
          <input
            type="text"
            className="title"
            placeholder="Write your note title"
            onChange={this.handleNoteTitleInputChange}
          />
          <label>Note</label>
          <textarea
            className="write-area"
            placeholder="Write your note here"
            onChange={this.handlenoteDetailInputChange}
          />

          <div className="button">
            <button className="cancel" onClick={this.handleCancleClick}>
              Cancle
            </button>
            <button className="save" onClick={this.handleSaveClick}>
              Save
            </button>
          </div>
          <div className="clear" />
          <hr />
        </div>

        <div>
          <ul>
            {this.state.notes.map((note, i) => {
              return (
                <NotesItem
                  noteText={note.noteTitleText}
                  noteDetail={note.noteDetailText}
                />
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
