import React, { useRef, useState, useEffect } from "react";
import "./shell.css";

const LINE_HEIGHT = 22;
const LineNumbers = ({ height }) => {
  const numNumbers = Math.floor(height / LINE_HEIGHT);
  console.log(numNumbers)
  return (
    <ul className="numbers" style={{ height }}>
      {[...Array(numNumbers)].map((_, num) => (
        <li class="number" key={num}>{num + 1}</li>
      ))}
    </ul>
  );
}

const EditableTextArea = ({ text, setText, textAreaRef, setHeight, height, onSubmit }) => {
	useEffect(() => {
		setHeight(textAreaRef.current.scrollHeight);
	}, [text]);

	const onChangeHandler = (event) => {
		setText(event.target.value);
	};

  const onKeyUp = (event) => {
    if (event.code === "Enter") onSubmit();
  }

  return (
    <textarea
      style={{ height }}
      ref={textAreaRef}
      className="textarea"
      value={text}
      onChange={onChangeHandler}
      onKeyUp={onKeyUp}
    />
  );
}

const ReadOnlyTextArea = ({ text, textAreaRef, height, setHeight }) => {

	useEffect(() => {
		setHeight(textAreaRef.current.scrollHeight);
	}, [text]);

  return (
    <textarea
      readOnly
      style={{ height }}
      ref={textAreaRef}
      className="textarea readonly"
      value={text}
    />
  );
}

export default () => {
  const shellContainerRef = useRef(null);
	const [shellContainerHeight, setShellContainerHeight] = useState(200);

  const editableTextareaRef = useRef(null);
  const readOnlyTextareaRef = useRef(null);

  const [readOnlyText, setReadOnlyText]  = useState("---enter query here----")
	const [editableText, setEditableText] = useState("");

	const [readOnlyTextAreaHeight, setReadOnlyTextAreaHeight] = useState(24);
	const [editableTextAreaHeight, setEditableTextAreaHeight] = useState(24);

	useEffect(() => {
		setShellContainerHeight(editableTextAreaHeight + readOnlyTextAreaHeight);
	}, [editableTextAreaHeight, readOnlyTextAreaHeight]);

  const onSubmit = () => {
    const newReadOnlyText = readOnlyText + "\n" + editableText;
    setReadOnlyText(newReadOnlyText);
    setEditableText("");
  };

  return (
    <div className="shell-container" ref={shellContainerRef}>
      <LineNumbers height={shellContainerHeight}/>
      <div className="textarea-container">
        <ReadOnlyTextArea
          textAreaRef={readOnlyTextareaRef}
          text={readOnlyText}
          height={readOnlyTextAreaHeight}
          setHeight={setReadOnlyTextAreaHeight}
        />
        <EditableTextArea
          textAreaRef={editableTextareaRef}
          text={editableText}
          setText={setEditableText}
          height={editableTextAreaHeight}
          setHeight={setEditableTextAreaHeight}
          onSubmit={onSubmit}
        />
      </div>
    </div>
  )
}