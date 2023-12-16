import React, { useState } from "react";
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
}


export const TodoList = ({data, title, removeTasks,removeAll}: TodoListType) => {



        type FilterValuesType = "all" | "active" | "completed" | "firstThreeTasks";

        let [filter,setFilter] = useState<FilterValuesType>("all")

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
        
        data = getTasksToFilter(data, filter)

    return(
    <div>
         <h2>{title}</h2>
         <div>
            <input/>
            <Button clicked={() => alert("Добавить!")}title="+"/>
         </div>
        <ul>
            {data.map((d)=> {
                return (
                    <li key={(d.id)}>
                        <span>{d.title}</span>
                         <input type="checkbox" checked={d.isDone}/>
                         <Button clicked={() => {removeTasks(d.id)}}title="x"/>
                    </li>
                )
            })}
        </ul>
        <div>
            <Button clicked={() => {removeAll()}} title="Delete All"/>
        </div>
        <Button clicked={() => {changeFilter("all")}} title='All'/>
        <Button clicked={() => {changeFilter("active")}} title='active'/>
        <Button clicked={() => {changeFilter("completed")}} title='complited'/>
        <Button clicked={() => {changeFilter("firstThreeTasks")}} title="firstThreeTasks"/>
    </div>
    )
}