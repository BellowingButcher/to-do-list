import React, { useState } from 'react';

//Component takes setTaskArray={setTaskArray} taskArray={taskArray} keyArray={keyArray} setKeyArray={setKeyArray} as current props
function TaskInputSB (props) {
    const [inputValue, setInputValue] = useState('');
    const [count, setCount] = useState(Number);



    //The three parameters are key temp and count
    function addToLocalStorage(key, temp, count){
        //In local storage i want to set what ever parameter key is passed in as the unique id of the object I am building with temp
        localStorage.setItem(key, JSON.stringify(temp));
        //same for key count with the number of count at the time that this function is called
        localStorage.setItem('count', count)
        
    }


    function addTask(){
        //boiler plate for the task object
        let temp = {
            text: inputValue,
            active: true,
            id: count,
        }



        //This is where I try to gather the unique id of the last task uploaded to local storage
        //this is wrong, but I am reading this for the first time this morning and can now see the errors
        //I changed it from localStorage.key.length to .count in hopes that I will get count working in the localStorage
        let taskNumber = localStorage.count

        // setTask(temp);
        //add input value to an object boilerplate

        //using the passed in function I am adding the new task to the array I have declared as task Array.  I will use this array to render my tasks on the page i think
        props.setTaskArray(
            [
                ...props.taskArray,
                temp
            ]
            );
            
            //Here I was trying to get the count to increment but i dont know why i was trying it here...
            // I see know, its because it will run after I have called the add task function.  So my thinking was that I would have count set to 0 at this point
            localStorage.setItem('count', count);
            //this will run addToLocalStorage
            //at this point count should be 0, temp should be the updated task because of the onBlur effect of the input field, and taskNumber would be the current count in localStorage(if taskNumber was done right)
            addToLocalStorage(count, temp, taskNumber);
            //then increment count by 1 so on the next go around count will be 1 
            setCount(+1);
            
            //Here i was experimenting with a keyArray but i couldnt get it working.  I was really frustrated and mentally fatigued at this point
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
    
    // console.log('taskArray at this point', props.taskArray);
    // console.log('key at this point', key)
return(
    <>
    {/* an input field that will update the inputValue after the user clicks anywhere outside of the input field */}
    <input onBlur={(e)=> setInputValue(e.target.value)} type="text" placeholder='What do you need done?' />
    {/* button that on click will run addtask */}
    <button type="submit" onClick={()=>{addTask()} }>Set Task</button>
    </>
)
}
export default TaskInputSB