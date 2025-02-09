import "./Button.css";
import getButtonStyling from "./getButtonStyle";
function Button({ text, onClickHandler, styleType="secondary" ,type="button" }) {
  return (
    <button onClick={onClickHandler} 
     type={type}
    className={`px-4 py-2 ${getButtonStyling(styleType)} text-white`}
    >
      {/* JSX curlies */}
      {text}
     
    </button>
  );
}



export default Button;
