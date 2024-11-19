import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashArrowUp } from "@fortawesome/free-solid-svg-icons";

const ToDo = () => {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([
    { text: "Finish the client's design", completed: false },
    { text: "Get some rest", completed: false },
    { text: "Update the windows", completed: false },
    { text: "Practice LeetcCode", completed: false },
  ]);

  const handleChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTodo.trim() === "") {
      alert("Input is Empty");
      return;
    } 

    if(todos.some(todo => todo.text.toLowerCase().trim() === newTodo.toLowerCase().trim())) {
      alert("This task already exists.");
      return;
    }
    
    setTodos([...todos, { text: newTodo, completed: false }]);
    setNewTodo("");
  };

  const handleDelete = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const handleCompleted = (index) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const currentDate = new Date().toLocaleDateString();

  return (
    <div className="todo-card">
      <div className="todo-header">
        <h1 className="greeting">Hi Shamnad!</h1>
        <h2 className="title">Todays tasks</h2>
        <p className="date">{currentDate}</p>
      </div>

      <div className="todo-content">
        <div className="todo-stats">
          <p className="completed-count">
            <b>{todos.filter((todo) => todo.completed).length}</b> of{" "}
            {todos.length} Completed
          </p>
        </div>

        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            placeholder="Add a new todo"
            value={newTodo}
            onChange={handleChange}
          />
          <button type="submit">Add</button>
        </form>

        <div className="todo-list">
          {todos.map((todo, index) => (
            <div key={index} className="todo-item">
              <label className="checkbox-container">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleCompleted(index)}
                />

                <span className="checkmark"></span>
              </label>

              <p className={`todo-text ${todo.completed ? "completed" : ""}`}>
                {todo.text}
              </p>

              <button
                onClick={() => handleDelete(index)}
                className="delete-btn"
              >
                <FontAwesomeIcon icon={faTrashArrowUp} />
              </button>
            </div>
          ))}
        </div>
        {todos.length === 0 ? <p className="notify">You&#39;re done</p> : null}
      </div>
    </div>
  );
};

export default ToDo;
