import {

  // actions.js
  ADD_TODO, // Action type for adding a new todo
  TOGGLE_TODO, // Action type for toggling the completion status of a todo
  REMOVE_TODO, // Action type for removing a todo
  MARK_COMPLETED, // Action type for marking a todo as completed
  MARK_INCOMPLETE, // Action type for marking a todo as incomplete
  FILTER_TODOS, // Action type for filtering todos based on a specific criteria
  MARK_ALL_COMPLETED, // Action type for marking all todos as completed
  UPDATE_SEARCH_TERM, // Action type for updating the search term
} from './actionTypes';

// Action creator for adding a new todo
export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: { text },
});

// Action creator for toggling the completion status of a todo
export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: { id },
});

// Action creator for removing a todo
export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: { id },
});

// Action creator for marking a todo as completed
export const markCompleted = (id) => ({
  type: MARK_COMPLETED,
  payload: { id },
});

// Action creator for marking a todo as incomplete
export const markIncomplete = (id) => ({
  type: MARK_INCOMPLETE,
  payload: { id },
});

// Action creator for filtering todos based on a specific criteria
export const filterTodos = (filter) => ({
  type: FILTER_TODOS,
  payload: { filter },
});

// Action creator for marking all todos as completed
export const markAllCompleted = () => ({
  type: MARK_ALL_COMPLETED,
});

// Action creator for updating the search term
export const updateSearchTerm = (searchTerm) => ({
  type: UPDATE_SEARCH_TERM,
  payload: { searchTerm },
});