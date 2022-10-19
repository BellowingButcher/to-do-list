import { useState } from "react";
import TaskInputSB from "./TaskInputSB";
function AppSB () {
    const [keyArray, setKeyArray] = useState([]);
    const [taskArray, setTaskArray] = useState([]);
    const [page, setPage] = useState('all');

    return(
        <TaskInputSB setTaskArray={setTaskArray} taskArray={taskArray} keyArray={keyArray} setKeyArray={setKeyArray}  />
    )
}
export default AppSB