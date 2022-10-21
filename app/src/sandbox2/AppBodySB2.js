import React from "react";
import NavbarSB2 from "./NavBarSB2";
import InputFieldSB2 from "./InputFieldSB2";
import TaskFieldSB2 from "./TaskFieldSB2";
function AppBodySB2 () {
    // const [keyArray, setKeyArray] = useState([]);
    // const [taskArray, setTaskArray] = useState([]);
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
        <>
        <NavbarSB2 />
        <TaskFieldSB2 />
        <InputFieldSB2 />
        </>
    )
}
export default AppBodySB2