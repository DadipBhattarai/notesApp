import React from "react";

const NotesItem = (props) => {
  return (
    <li>
      <div className="notes">
        <div className="tit-dot">
          <h1 className="note-title">{props.noteText}</h1>
          <h1>...</h1>
        </div>
        <p className="note-detail">{props.noteDetail}</p>
      </div>
    </li>
  );
};

export default NotesItem;
