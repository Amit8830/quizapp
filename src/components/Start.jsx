import { useRef } from "react";

export default function Start({ setUsername }) {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.value && setUsername(inputRef.current.value);
  };

  return (
    <div className="start">
    <h2 className="h2" > Welcome To Amit Quiz</h2>
      <input
        className="startInput"
        placeholder="Enter your name "
        ref={inputRef}
      />
      
      <button className="startButton" onClick={handleClick}>
        Start Quiz 🔴
      </button>
    </div>
  );
}
