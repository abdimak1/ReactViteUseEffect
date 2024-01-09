import React, { useState, useEffect} from "react";

export const Text = () => {
  const [text, setText] = useState("");


  useEffect(() => {
    console.log("COMPONENT MOUNTED");

    return() => {
        console.log("COMPONENT UNMOUNTED");
    };
  }, []);

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleInputChange}
      />

      <h1>{text}</h1>
    </div>
  );
};
