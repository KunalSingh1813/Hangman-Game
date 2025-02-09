import { useState } from "react";
import TextInputForm from "./TextInputForm";
function TextInputFormContainer() {

  const [inputType,setInputType] = useState("password")
  function handleFormSubmit(event) {
    event.preventDefault();
    console.log("Form Submitted");
  }

  function handleTextInputChange(event) {
    console.log("text input changed");
    console.log(event.target.value);
  }

  function handleShowHideClick() {
    console.log("Handle Show Hide click");
    if(inputType == "password"){
        setInputType("text");
    }else{
        setInputType("password");
    }
  }
  return (
    <TextInputForm
      inputType={inputType}
      handleFormSubmit={handleFormSubmit}
      handleTextInputChange={handleTextInputChange}
      handleShowHideClick={handleShowHideClick}
    />
  );
}

export default TextInputFormContainer;
