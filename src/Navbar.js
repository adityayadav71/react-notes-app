import Star from "./Star.js";
import { BiMenu } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

export default function Navbar(props) {
  return (
    <nav className="navbar">
      <div className="navbar--left">
        <button className="sidebar--open" onClick={props.handleSidebar}>
          <BiMenu color={props.color} size="2em" />
        </button>
        <div className="document--name">{props.documentName}</div>
      </div>
      <div className="navbar--right">
        {props.darkMode ? (
          <button className="theme-switch-btn" onClick={props.handleClick}>
            <BsFillSunFill className="icon" color={props.color} size="1.5em" />
          </button>
        ) : (
          <button className="theme-switch-btn" onClick={props.handleClick}>
            <BsFillMoonFill className="icon" color={props.color} size="1.5em" />
          </button>
        )}
        <Star
          className="icon"
          isFilled={props.currentNote.isFavourite}
          handleFavourite={props.handleFavourite}
          color={props.color}
          size="2em"
        />
        <button
          className="sidebar--open"
          onClick={(event) => props.deleteNote(event, props.currentNote.id)}
        >
          <MdDelete className="icon" color={props.color} size="1.5em" />
        </button>
      </div>
    </nav>
  );
}
