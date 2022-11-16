import Navbar from "./Navbar.js";

export default function Note(props) {
  function handleKeyDown(e) {
    // Reset field height
    e.target.style.height = "inherit";

    // Get the computed styles for the element
    const computed = window.getComputedStyle(e.target);

    // Calculate the height
    const height =
      parseInt(computed.getPropertyValue("border-top-width"), 10) +
      parseInt(computed.getPropertyValue("padding-top"), 10) +
      e.target.scrollHeight +
      parseInt(computed.getPropertyValue("padding-bottom"), 10) +
      parseInt(computed.getPropertyValue("border-bottom-width"), 10);

    e.target.style.height = `${height}px`;
  }

  return (
    <div className="note">
      <Navbar
        currentNote={props.currentNote}
        deleteNote={props.deleteNote}
        darkMode={props.darkMode}
        color={props.darkMode ? "#fff" : "#000"}
        documentName={props.documentName}
        handleFavourite={props.handleFavourite}
        handleSidebar={props.openSidebar}
        handleClick={props.switchTheme}
      />
      <input
        className="note--title"
        type="text"
        name="title"
        value={props.currentNote.title}
        onChange={props.handleChange}
        placeholder="Untitled"
      />
      <textarea
        className="note--content"
        name="content"
        value={props.currentNote.content}
        onChange={props.handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Start writing here..."
        autosize="true"
        rows="15"
      >
        {props.noteContent}
      </textarea>
    </div>
  );
}
