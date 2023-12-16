import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import { Button } from "./Button";
export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type TodoListType = {
    title: string
    data: Array<TaskType>
    removeTasks: (idTasks: string) => void
    removeAll: () => void
    addTasks: (newTextInput: string) => void
}


export const TodoList = ({data, title, removeTasks, removeAll, addTasks}: TodoListType) => {

        type FilterValuesType = "all" | "active" | "completed" | "firstThreeTasks";

        let [filter,setFilter] = useState<FilterValuesType>("all");

        function getTasksToFilter(tasks: Array<TaskType>, valueFilter: FilterValuesType): Array<TaskType> {
            let tasksCopy1 = valueFilter === "completed" ?
            tasks.filter(t => t.isDone === true):
            valueFilter === "active" ?
            tasks.filter(t => t.isDone === false):
            valueFilter === "firstThreeTasks" ?
            tasks.filter((t,index) => index < 3):
            tasks;
            return tasksCopy1;
        }

        function changeFilter(valueFilter:FilterValuesType ) {
            setFilter(valueFilter)
        }
        
      data = getTasksToFilter(data, filter);

      const [newTextInput,setNewTextInput] = useState('');

      function onChangeHandler(event:ChangeEvent<HTMLInputElement>) {
        const valueTarget = event.currentTarget.value;
        setNewTextInput(valueTarget);
      }

      function onKeyDownHandler(event: KeyboardEvent<HTMLInputElement>) {
            if(event.key ==='Enter') {
             addTasks(newTextInput);
             setNewTextInput("");
            } 
      }

      function addTaskClicked () {
        addTasks(newTextInput);
        setNewTextInput("");
      }

    const changeFilterAll = () => {
        changeFilter("all")
    }

    const changeFilterActive = () => {
        changeFilter("active")
        
    }
    const changeFilterCompleted = () => {
        changeFilter("completed");
    }
    const changeFilterfirstThreeTasks = () => {
        changeFilter("firstThreeTasks")
        
    }

    return(
    <div>
         <h2>{title}</h2>
         <div>
            <input value={newTextInput} onKeyDown={onKeyDownHandler} onChange={onChangeHandler}/>
            <Button clicked={addTaskClicked} title="+"/>
         </div>
        <ul>
            {data.map((d) => {

                const removeTasksHandler = () => {
                    removeTasks(d.id)
                }

                return (
                    <li key={(d.id)}>
                        <span>{d.title}</span>
                         <input type="checkbox" checked={d.isDone}/>
                         <Button clicked={removeTasksHandler} title="x"/>
                    </li>
                )
            })}
        </ul>
        <div>
            <Button clicked={() => {removeAll()}} title="Delete All"/>
        </div>
        <Button clicked={changeFilterAll} title='All'/>
        <Button clicked={changeFilterActive} title='active'/>
        <Button clicked={changeFilterCompleted} title='complited'/>
        <Button clicked={changeFilterfirstThreeTasks} title="firstThreeTasks"/>
    </div>
    )
}