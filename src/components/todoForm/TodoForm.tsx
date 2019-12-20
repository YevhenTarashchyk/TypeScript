import React, { useRef } from "react";
import "./TodoForm.css";

interface TodoFormProps {
  onAdd(title: string): void;
}

const TodoForm: React.FC<TodoFormProps> = props => {
  // const [title, setTitle] = useState<string>("");
  const ref = useRef<HTMLInputElement>(null);

  // const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setTitle(e.target.value);
  // };

  const keyPressHandler = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      props.onAdd(ref.current!.value);
      ref.current!.value = "";
      // console.log(title);
      // setTitle("");
    }
  };
  return (
    <div className="input-field">
      <input
        // value={title}
        // onChange={changeHandler}
        ref={ref}
        type="text"
        id="title"
        placeholder="Введи новый таск"
        onKeyPress={keyPressHandler}
      />
      <label htmlFor="title" className="active">
        Add new task
      </label>
    </div>
  );
};

export default TodoForm;
