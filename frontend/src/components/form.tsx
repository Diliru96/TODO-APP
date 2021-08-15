import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { addTodoRequest } from "../redux/actions/todoActions";

const Form =()=>{

    const dispatch = useDispatch();

    const [inputValue , setInputValue] = useState("");

    const handleInputChange =(e: { target: { value: React.SetStateAction<string>; }; })=>{
        setInputValue(e.target.value);
    };

    const handleFormSubmit = (e: { preventDefault: () => void; })=>{
        e.preventDefault();
        if(inputValue.trim() === "") return;
        dispatch(addTodoRequest({title:inputValue, completed:false}));
        setInputValue("");
    }

    return (
        <form className="ui form" onSubmit={handleFormSubmit}>
            <div className="ui grid center aligned">
                <div className="row">
                    <div className="column five wide">
                        <input 
                            type="text" 
                            placeholder="Enter a To Do"
                            value={inputValue}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="column one wide">
                        <button type="submit" className="ui button circular icon green"><i className="plus icon white"/></button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Form;