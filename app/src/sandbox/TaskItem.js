function TaskItem(props){
    function removeTask(){
        localStorage.removeItem(props.key);
    }
    
    return(

        <div>
            <p>This is the task I need done!</p>
            <div><i class="bi bi-check-circle-fill"></i></div>
            <div onClick={ removeTask() }>DeleteIcon</div>
        </div>
)
}