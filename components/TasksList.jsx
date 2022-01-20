import React from 'react'
import TaskItem from './TaskItem'

const TasksList = ({Tasks}) => {
    return (
        <div>
            {Tasks.map(Task =>(
                <TaskItem Task={Task}/>
            ))}
        </div>
    )
}

export default TasksList
