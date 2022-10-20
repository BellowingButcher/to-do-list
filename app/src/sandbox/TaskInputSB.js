import React, { useState } from 'react';

//Component takes setTaskArray={setTaskArray} taskArray={taskArray} keyArray={keyArray} setKeyArray={setKeyArray} as current props
function TaskInputSB () {
    //sets taskNumber as current value of count in the local storage, or to 0.
    let taskNumber = JSON.parse(
        localStorage.getItem('count') ? localStorage.getItem('count'): 0
        );
        
        console.log('taskNumber after gathering from local', taskNumber);
        const [inputValue, setInputValue] = useState('');
        // sets count with use state and sets its initial value to the value of taskNumber
        const [count, setCount] = useState(taskNumber);

        let storedArray=JSON.parse(
            localStorage.getItem('tasks')) ? JSON.parse(localStorage.getItem('tasks')): [];


        const [taskArray, setTaskArray] = useState(storedArray);
        // const [temp, setTemp] = useState({
        //     text: inputValue,
        //     active: true,
        //     id: count,
        // })
        
        
        
        //Only needs to use the count number as a unique id
        function addToLocalStorage(count, taskArray){
            //In local storage i want to set what ever parameter key is passed in as the unique id of the object I am building with temp
            localStorage.setItem('tasks', JSON.stringify(taskArray));
            //same for key count with the number of count at the time that this function is called
            localStorage.setItem('count', count)
            
        }
        
            // function updateTaskTemplate() {
                
            //     return(
            //         {
            //             text: inputValue,
            //             active: true,
            //             id: count,
            //         }
            //         );
                    
                    
            //     }
                
            //     let temp = updateTaskTemplate();
    
    function addTask(){
        //boiler plate for the task object            
        // setTask(temp);
        //add input value to an object boilerplate
        let temp = {
            text: inputValue,
            active: true,
            id: count,
        };
        //using the passed in function I am adding the new task to the array I have declared as task Array.  I will use this array to render my tasks on the page i think
        let bill= 
        [
            ...taskArray,
            temp
        ]
        setTaskArray(bill);
            
            //Here I was trying to get the count to increment but i dont know why i was trying it here...
            // I see know, its because it will run after I have called the add task function.  So my thinking was that I would have count set to 0 at this point
            // localStorage.setItem('count', count);
            //this will run addToLocalStorage
            //at this point count should be 0, temp should be the updated task because of the onBlur effect of the input field, and taskNumber would be the current count in localStorage(if taskNumber was done right)
            console.log('Count before local storage', count);
            addToLocalStorage(count+1, bill);
            //then increment count by 1 so on the next go around count will be 1 
            setCount(taskNumber + 1);
            console.log('After increment', count);
            
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