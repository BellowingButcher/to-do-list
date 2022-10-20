import React, { useState } from 'react';
function TaskInputSB (props) {
    const [inputValue, setInputValue] = useState('');
    const [count, setCount] = useState(Number);


    function addToLocalStorage(key, temp, count){
        
        localStorage.setItem(key, JSON.stringify(temp),count);
        
    }


    function addTask(){
        let temp = {
            text: inputValue,
            active: true,
            id: count,
        }
        let taskNumber = localStorage.key.length;
        // setTask(temp);
        //add input value to an object boilerplate
        props.setTaskArray(
            [
                ...props.taskArray,
                temp
            ]
            );
            localStorage.setItem('count', count);
            addToLocalStorage(count, temp, taskNumber);
            setCount(+1);
        // props.setKeyArray(
        //     [
        //         ...props.keyArray,
        //         key
        //     ]
        // )
            
            // setKey(key+1);
        //{text:'', active:true, id:number} number changes with each new list item
        //commit task to local storage
        
    }
    
    console.log('taskArray at this point', props.taskArray);
    // console.log('key at this point', key)
return(
    <>
    <input onBlur={(e)=> setInputValue(e.target.value)} type="text" placeholder='What do you need done?' />
    <button type="submit" onClick={()=>{addTask()} }>Set Task</button>
    </>
)
}
export default TaskInputSB