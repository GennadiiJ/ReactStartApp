import React from "react";
import TodoItem from "./components/TodoItem"
import todosData from "./my-data/todosData"

class StartApp extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map((item) => {
                if (item.id === id) {
                    item.completed = !item.completed;
                }
                return item;
            });
            return {
                todos: updatedTodos
            }
        });
    }
    
    render() {
        const todoItems = this.state.todos.map(item => <TodoItem handleChange={this.handleChange} key={item.id} item={item}/>);
        return (
            <div className="todo-list">
                {todoItems}
            </div>
        );    
    }
}

export default StartApp;