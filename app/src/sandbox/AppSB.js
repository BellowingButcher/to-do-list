import { useState } from "react";
import TaskInputSB from "./TaskInputSB";
function AppSB () {
    const [taskArray, setTaskArray] = useState([]);
    const [page, setPage] = useState('all');

    return(
        <TaskInputSB setTaskArray={setTaskArray} taskArray={taskArray}  />
    )
}
export default AppSB