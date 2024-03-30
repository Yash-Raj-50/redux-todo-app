import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

// Component to display the list of todos
const TaskList = () => {
  // Get the todos from the Redux store
  const filteredTodos = useSelector((state) => {
    const todos = state.Todo.todos; // Get the todos array
    const filter = state.Todo.filter.toUpperCase(); // Get the filter value and convert it to uppercase
    const searchTerm = state.Todo.searchTerm ? state.Todo.searchTerm.toLowerCase() : ''; // Convert search term to lowercase for case-insensitive search

    // Filter the todos based on the filter and search term
    return todos.filter((todo) => {
      const matchesFilter = (filter === 'COMPLETE' && todo.completed) ||
        (filter === 'INCOMPLETE' && !todo.completed) ||
        filter === 'ALL';

      const matchesSearch = todo.text ? todo.text.toLowerCase().includes(searchTerm) : false;

      return matchesFilter && matchesSearch;
    });
  });

  return (
    <ul>
      <li className="my-2 text-sm">All Your Todos Here...</li>
      {/* Render each filtered todo as a TodoItem component */}
      {filteredTodos.map((todo, index) => (
        <TodoItem key={index} todo={todo} index={index} />
      ))}
    </ul>
  );
};

export default TaskList;
