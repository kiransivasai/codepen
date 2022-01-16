import React from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import resize from "../assets/icons/resize.png";
import { Controlled as ControlledEditor } from "react-codemirror2";

function Editor(props) {
  const { language, displayName, value, onChange } = props;

  const handleChange = (editor, data, value) => {
    onChange(value);
  };

  return (
    <div className="editor-container">
      <div className="editor-title">
        <h2>{displayName}</h2>
        <button>
          <img className="resize" src={resize} width="10" alt="Resize" />
        </button>
      </div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="code-area"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          theme: "material",
          lineNumbers: true,
        }}
      />
    </div>
  );
}

export default Editor;
