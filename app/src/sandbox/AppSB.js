import { useState } from "react";
import TaskInputSB from "./TaskInputSB";
function AppSB () {
    // const [keyArray, setKeyArray] = useState([]);
    // const [taskArray, setTaskArray] = useState([]);
    const [page, setPage] = useState('all');
    // const [inputValue, setInputValue] = useState('');



    // function updateTaskArray() {
            
    //     let temp = {
    //         text: inputValue,
    //         active: true,
    //         id: count
    //     };
    //     return(temp);
        
    // }

    return(
        <TaskInputSB /*setTaskArray={setTaskArray} taskArray={taskArray}*/  />
    )
}
export default AppSB