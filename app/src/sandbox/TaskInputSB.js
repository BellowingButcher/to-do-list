import React from 'react';
function TaskInputSB () {
    function submitTask(){
        console.log('lasers');
    }
return(
    <>
    <input id="userInput" type="text" placeholder='What do you need done?'></input>
    <button type="submit" onClick={ submitTask }>Set Task</button>
    </>
)
}
export default TaskInputSB