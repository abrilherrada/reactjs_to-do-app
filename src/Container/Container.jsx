import React, {useState, createContext} from "react";
import NewTask from "../NewTask/NewTask.jsx";
import Tasks from "../Tasks/Tasks.jsx";
import styles from "./Container.module.css";

export const TasksContext = createContext();

function Container(){
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [completedTasks, setCompletedTasks] = useState([]);

    const contextData = {
        tasks,
        setTasks,
        newTask,
        setNewTask,
        completedTasks,
        setCompletedTasks
    };

    return(
        <div className={styles.container}>
            <h1>Tasks</h1>
            <TasksContext.Provider value={contextData}>
                <NewTask/>
                <Tasks/>
            </TasksContext.Provider>
        </div>
    )
}

export default Container