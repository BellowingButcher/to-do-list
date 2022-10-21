import CreateButton from "./CreateButton"
let removeAll = 'Delete All Tasks';
let removeOne = 'Delete This Task';
let setTask = 'Set Task';

    function handleClick(){
        console.log('you"ve clicked me');
    }

function InputFieldSB2 (props) {
    

    return(
        <div className="row">
            <div className="col">
                <input placeholder="What do you need done?" type="text"></input>
                <CreateButton handleClick={handleClick} text={setTask} />
            </div>
            <div className="col">
                <CreateButton handleClick={handleClick} text={removeAll} />
                <CreateButton handleClick={handleClick} text={removeOne} />
            </div>
        </div>
    )
}
export default InputFieldSB2