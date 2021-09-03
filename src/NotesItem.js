import React from "react";

const NotesItem = (props) => {
  return (
    <li>
      <input>{props.noteTitleText}</input>
      <textarea>{props.noteDetailText}</textarea>
    </li>
  );
};

export default NotesItem;
