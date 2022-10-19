import React, { useState } from 'react';
function TaskInputSB (props) {
    const [inputValue, setInputValue] = useState('');
    // const [task, setTask] = useState([{text:"", active: Boolean, key: Number}]);
    const [key, setKey] = useState(0);

    function addTask(){
        let temp = {
            text: inputValue,
            active: true,
            // id: key,
        }
        // setTask(temp);
        // setKey(key+1);
        //add input value to an object boilerplate
        props.setTaskArray(
            [
                ...props.taskArray,
                temp
            ]
        );
        
        //{text:'', active:true, id:number} number changes with each new list item
        //commit task to local storage
        
    }
    
    console.log('taskArray at this point is', props.taskArray);
    // console.log('key at this point', key)
return(
    <>
    <input onChange={(e)=> setInputValue(e.target.value)} type="text" placeholder='What do you need done?' />
    <button type="submit" onClick={ addTask }>Set Task</button>
    </>
)
}
export default TaskInputSB