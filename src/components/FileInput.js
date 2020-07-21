import React, { useRef } from "react";

function FileInput(props) {
  const fileInputRef = useRef();
  function handleSubmit(event) {
    event.preventDefault();
    fileInputRef.current.files.length &&
      alert(`file name: ${fileInputRef.current.files[0].name}`);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Upload file:
        <input ref={fileInputRef} type="file" />
      </label>
      <input value="submit" type="submit" />
    </form>
  );
}

export default FileInput;
