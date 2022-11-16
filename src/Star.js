import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export default function Star(props) {
  return props.isFilled ? (
    <button className="favourite" onClick={props.handleFavourite}>
      <AiFillStar className="star-icon" color="#FDCC0D" size={props.size} />
    </button>
  ) : (
    <button className="favourite" onClick={props.handleFavourite}>
      <AiOutlineStar
        className="star-icon"
        color={props.color}
        size={props.size}
      />
    </button>
  );
}
