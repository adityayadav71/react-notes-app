import { IoIosAddCircle } from "react-icons/io";
import { IoCaretBackOutline } from "react-icons/io5";
import { GrTextAlignLeft } from "react-icons/gr";
import { AiTwotoneDelete } from "react-icons/ai";

export default function Sidebar(props) {
  const favourites = props.favouriteNotes.map((note) => (
    <div
      key={note.id}
      className={`sidebar-note-title ${
        note.id === props.currentNoteId ? "selected-note" : ""
      }`}
      data-id={note.id}
      onClick={() => props.setCurrentNoteId(note.id)}
    >
      <GrTextAlignLeft className="icon" />
      {note.title || "Untitled"}
      <button
        className="delete-btn"
        onClick={(event) => props.deleteNote(event)}
      >
        <AiTwotoneDelete
          className="icon"
          color={props.darkMode ? "#fff" : "#000"}
          size="1.5em"
        />
      </button>
    </div>
  ));

  const privateFilter = props.note.filter((note) => !note.isFavourite);

  const privates = privateFilter.map((note) => (
    <div
      key={note.id}
      className={`sidebar-note-title ${
        note.id === props.currentNoteId ? "selected-note" : ""
      }`}
      data-id={note.id}
      onClick={() => props.setCurrentNoteId(note.id)}
    >
      <GrTextAlignLeft className="icon" />
      {note.title || "Untitled"}
      <button
        className=" delete-btn"
        onClick={(event) => props.deleteNote(event)}
      >
        <AiTwotoneDelete
          className="icon"
          color={props.darkMode ? "#fff" : "#000"}
          size="1.5em"
        />
      </button>
    </div>
  ));
  return (
    <div className="sidebar">
      <div className="sidebar--buttons">
        <button className="create-btn" onClick={props.createNewNote}>
          <IoIosAddCircle
            className="icon"
            color={props.darkMode ? "#fff" : "#000"}
            size="2em"
          />
        </button>
        <button className="closeBtn" onClick={props.closeSidebar}>
          <IoCaretBackOutline
            className="icon"
            color={props.darkMode ? "#fff" : "#000"}
            size="2em"
          />
        </button>
      </div>

      <div className="sidebar--content">
        <div className="sidebar--title">Favourites</div>
        <div className="sidebar--favourites">
          {favourites.length === 0 ? (
            <p className="empty-section">No Favourites marked yet!</p>
          ) : (
            favourites
          )}
        </div>
        <div className="sidebar--title">Private</div>
        <div className="sidebar--private">
          {privates.length === 0 ? (
            <p className="empty-section">No private notes created yet!</p>
          ) : (
            privates
          )}
        </div>
      </div>
    </div>
  );
}
