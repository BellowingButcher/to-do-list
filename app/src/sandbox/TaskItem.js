function TaskItem(props){
// let element=document.getElementById(props.task.id);
    
    return(

        <div id={props.task.id}>
            <p>{props.task.text}</p>
            <button>Activate/Deactivate</button>
            <button>DeleteTask</button>
        </div>
)
}
export default TaskItem