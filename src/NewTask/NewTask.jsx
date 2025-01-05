import React, {useContext} from "react";
import {TasksContext} from "../Container/Container.jsx";
import styles from "./NewTask.module.css"; 


function NewTask(){
    const {setTasks, newTask, setNewTask} = useContext(TasksContext);

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){
        if(newTask.trim() !== ''){
            setTasks(t => [...t, newTask]);
            setNewTask('');
        }
    }

    return(
        <div className={styles.container}>
            <input  type="text"
                    placeholder="Enter a task"
                    value={newTask}
                    onChange={handleInputChange}/>
            <button className={styles.addButton}
                    onClick={addTask}>
                ✚
            </button>
        </div>
    )
}

export default NewTask