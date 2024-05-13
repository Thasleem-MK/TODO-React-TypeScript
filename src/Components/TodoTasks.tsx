import React from "react";
import { ITask } from "../Interfaces";

interface IProp {
  task: ITask;
  completeTask(taskNameToDelete:string): void;
}

const TodoTasks = ({ task,completeTask }: IProp) => {
  return (
    <div className="task">
      <div className="content">
        <span>{task.taskName}</span>
        <span>{task.deadline}</span>
      </div>
      <button onClick={()=>{completeTask(task.taskName)}}>X</button>
    </div>
  );
};

export default TodoTasks;
