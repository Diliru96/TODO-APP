import React,{useState,FC} from "react";
import { useDispatch } from "react-redux";
import { todoModel } from '../models/todoModel';
import { deleteTodoRequest } from '../redux/actions/deleteTodoActions';
import { updateTodoRequest } from "../redux/actions/updateTodoActions";

interface Props {
    todo:todoModel
}

const Todo: FC<Props> = (props) =>{
    const dispatch = useDispatch();

    const [completedState, setCompletedState ] = useState(props.todo.completed);

    const removeTodo = ()=>{
         dispatch(deleteTodoRequest({_id:props.todo._id}));
    }

    const handleCompletedButtonClick = () => {
        setCompletedState(!completedState);
        dispatch(updateTodoRequest(
            {_id:props.todo._id, completed:!completedState, title:props.todo.title  }
        ));
    };


    return(
        <div className="row" >      
            <div className="column four wide">
                    <h3 className={"ui header" + (completedState ? " green" : "")} > {props.todo.title} </h3>
            </div>
            <div className="column one wide">
                <button 
                    className={"ui button circular icon" + (completedState ? " blue" : " green")}
                    onClick={handleCompletedButtonClick}
                >
                    <i className=" white check icon "/>
                </button>
            </div>
            <div className="column one wide">
                <button 
                    className="ui button circular icon red"
                    onClick={removeTodo} 
                >
                    <i className="white remove icon "/>
                </button>
            </div> 
        </div>
    )
    

};

export default Todo;