import { FaRegCheckCircle } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import "./TodoIcon.css";

const iconTypes = {
  check: (color) => <FaRegCheckCircle className="icon-react" fill={color} />,
  delete: (color) => <FaTimes className="icon-react" fill={color} />,
};

function TodoIcon({ type, color, onClick }) {
  return (
    <span className={`Icon-container Icon-container-${type}`} onClick={onClick}>
      {iconTypes[type](color)}
    </span>
  );
}

export { TodoIcon };
