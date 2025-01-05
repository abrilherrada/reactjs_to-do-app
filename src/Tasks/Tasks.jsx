import React, {useContext} from "react";
import { TasksContext } from "../Container/Container.jsx";
import styles from "./Tasks.module.css";

function Tasks(){
    const {tasks, setTasks, completedTasks, setCompletedTasks} = useContext(TasksContext);

    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index){
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function deleteTask(index){
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function completeTask(index){
        const completedTask = tasks.filter((_, i) => i == index);
        setCompletedTasks(c => [...c, completedTask]);
        deleteTask(index);
    }

    return(
        <>
            <div className={styles.pendingTasksContainer}>
                <h2>Pending tasks</h2>
                {tasks.length > 0
                ? 
                    <ol>
                    {tasks.map((task, index) =>
                        <li key={index}
                            className={styles.pendingListItem}>
                            <span>{task}</span>
                            <div>
                                <button className={styles.moveButton}
                                        onClick={() => moveTaskUp(index)}>
                                    ▲
                                </button>
                                <button className={styles.moveButton}
                                        onClick={() => moveTaskDown(index)}>
                                    ▼
                                </button>
                                <button className={styles.deleteButton}
                                        onClick={() => deleteTask(index)}>
                                    ✘
                                </button>
                                <button className={styles.completeButton}
                                        onClick={() => completeTask(index)}>
                                    ✓
                                </button>
                            </div>
                        </li>)}
                    </ol>
                :
                    <p className={styles.noData}>There are no pending tasks.</p>
                }
            </div>
            <div className={styles.completedTasksContainer}>
                <h2>Completed tasks</h2>
                {completedTasks.length > 0
                ?
                    <ol>
                        {completedTasks.map((task, index) =>
                        <li key={index}
                            className={styles.completedListItem}>
                            <span>{task}</span>
                        </li>)}
                    </ol>
                :
                    <p className={styles.noData}>You have not completed any tasks yet.</p>
                }
            </div>
        </>
    )
    
}

export default Tasks