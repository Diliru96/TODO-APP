import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoModel } from "../models/todoModel";
import { fetchTodoRequest } from "../redux/actions/todoActions";
import { RootState } from "../redux/reducers/rootReduser";
import Todo from "./todo";

const List = () =>{
    
    const dispatch = useDispatch();
    const { pending, todos, error } = useSelector( (state: RootState) => state.todos );
    const { todo } = useSelector( (state: RootState) => state.addTodo );
    const { deleted } = useSelector( (state: RootState) => state.deleteTodo );

    useEffect(() => {
        dispatch(fetchTodoRequest());
    },[todo,dispatch, deleted]);

    const renderedList = todos?.map(
        (todo:todoModel)=> (
            <Todo todo={todo} key={todo._id}/>
        )
    );

    return(
        <div className="ui grid center aligned">
            {pending ? (
                <div>Loading...</div>
            ) : error ? (
                <div>Error</div>
            ) : (
            renderedList
            )}  
        </div>
    )

};

export default List; 