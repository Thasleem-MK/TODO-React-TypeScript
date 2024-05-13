import React, { ChangeEvent, FC, useState } from "react";
import "./App.css";
import { ITask } from "./Interfaces";
import TodoTasks from "./Components/TodoTasks";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadLine] = useState<number>(0);
  const [todo, setTodo] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else if (event.target.name === "deadline") {
      setDeadLine(Number(event.target.value));
    }
  };

  const addTask = () => {
    const newTask: ITask = { taskName: task, deadline: deadline };
    setTodo([...todo, newTask]);
    setTask("");
    setDeadLine(0);
  };

  const completeTask = (taskNameToDelete: string): void => {
    setTodo(todo.filter((task) => task.taskName !== taskNameToDelete));
  };
  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Tasks......"
            name="task"
            value={task}
            onChange={(e) => handleChange(e)}
          />
          <br />
          <input
            type="number"
            placeholder="Deadline..."
            name="deadline"
            value={deadline}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <button onClick={addTask}>Add task</button>
      </div>
      <div className="todoList">
        {todo.map((task: ITask, key: number): JSX.Element => {
          return (
            <TodoTasks key={key} task={task} completeTask={completeTask} />
          );
        })}
      </div>
    </div>
  );
};

export default App;
