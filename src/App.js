import React, { Component } from "react";
// import NotesItem from "./NotesItem";

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
            <li>
              <div className="notes">
                <div className="tit-dot">
                  <h1 className="note-title">Designing a Notes App</h1>
                  <h1>...</h1>
                </div>
                <p className="note-detail">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </li>

            <li>
              <div className="notes">
                <div className="tit-dot">
                  <h1 className="note-title">Coding Journey</h1>
                  <h1 classNmae="dot">...</h1>
                </div>
                <p className="note-detail">
                  I’m writing the Box Model chapter of the new book and came to
                  the point where I had to treat negative margins. To my
                  surprise, I found that there is no systematic treatment of
                  negative margins anywhere. So I had to figure it out for
                  myself. Below is my initial draft of the negative margin
                  section.
                </p>
              </div>
            </li>
          </ul>
          {/* {this.state.notes.map((note, i) => {
            return (
              <NotesItem
                noteText={note.noteTitleText}
                noteDetail={note.noteDetailText}
              />
            );
          })} */}
        </div>
      </div>
    );
  }
}

export default App;
