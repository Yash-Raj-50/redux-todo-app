import { useDispatch } from 'react-redux';
import {
  toggleTodo, // Action to toggle the completion status of a todo
  removeTodo, // Action to remove a todo
  markCompleted, // Action to mark a todo as completed
  markIncomplete, // Action to mark a todo as incomplete
} from '../redux/actions';
import { Checkbox } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

const TodoItem = ({ todo, index }) => {
  const dispatch = useDispatch();

  return (
    <li className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 py-2 gap-4">
      <div className="flex items-center">
        <span className="mr-4 text-gray-500">
          {index + 1}. {/* Display the index of the todo */}
        </span>
        <span className={`mr-4 ${todo.completed ? 'line-through text-gray-500' : ''}`}>
          {todo.text} {/* Display the text of the todo */}
        </span>
      </div>
      <div className='space-x-3 ml-8'>
        <button
          className="mr-2 text-sm border text-red-400 sm:px-2 px-1 py-1 rounded"
          onClick={() => dispatch(removeTodo(index))} // Call the removeTodo action when the button is clicked
        >
          <DeleteOutlined /> {/* Display a delete icon */}
        </button>
        <Checkbox onChange={() => dispatch(toggleTodo(index))} checked={todo.completed} /> {/* Checkbox to toggle the completion status of the todo */}
      </div>
    </li>
  );
};

export default TodoItem;