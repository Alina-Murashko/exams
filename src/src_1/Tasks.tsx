import React, { FC } from "react";

type TasksType = {
    taskId: number
    title: string
    isDone: boolean
}


export type TasksPropsType = {
    title: string
    tasks: Array<TasksType>
    students: Array<string>
}


type DataType = {
    data: TasksPropsType;
}

export const Tasks: FC<DataType> = (props: DataType) => {
    return (<div>
        <h1> {props.data.title}</h1>
        <ul>
            {props.data.tasks.map((t)=> {
                return (
            <li key={t.taskId}>
                <label >{t.title}
                    <input type="checkbox" checked={t.isDone}/>
                </label>
            </li>
                )
            })}
            <ul>
                {props.data.students.map((s) => {
                    return <li>{s}</li>
                })}
            </ul>
        </ul>
            </div>)
}