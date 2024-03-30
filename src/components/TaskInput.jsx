import React, { useState } from "react";
import { Input, Button, Select, Checkbox } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, updateSearchTerm, filterTodos, markAllCompleted } from '../redux/actions';
import { CheckOutlined } from '@ant-design/icons';

const TaskInput = () => {

    const dispatch = useDispatch();
    const currentFilter = useSelector((state) => state.Todo.filter);

    const [newTodoText, setNewTodoText] = useState('');
    const [searchTerm, setSearchTerm] = useState(useSelector((state) => state.Todo.searchTerm));
    const [allChecked, setAllChecked] = useState(false);

    const handleFilter = (filter) => {
        dispatch(filterTodos(filter));
    };

    const handleAddTodo = (text) => {
        dispatch(addTodo(text));
    };

    const handleAddTodoClick = () => {
        if (newTodoText.trim() !== '') {
            handleAddTodo(newTodoText.trim());
            setNewTodoText('');
        }
    };

    const handleSearchChange = (search) => {
        dispatch(updateSearchTerm(search));
        setSearchTerm(search);
    }

    const handleMarkAllCompleted = () => {
        dispatch(markAllCompleted());
        setAllChecked(!allChecked);
    };

    return (
        <div className="w-full h-full p-2 flex flex-col justify-around items-center">
            <div className="w-full flex">
                {/* Input field for adding a new todo */}
                <Input size="large" placeholder="Add Todo" value={newTodoText} onChange={(e) => setNewTodoText(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleAddTodoClick()} className="grow" />
                {/* Button to add a new todo */}
                <Button icon={<PlusOutlined />} size="large" onClick={handleAddTodoClick} className="ml-2 bg-purple-100" />
            </div>
            <div className="w-full flex justify-between">
                <div className="flex gap-2">
                    {/* Input field for searching todos */}
                    <Input placeholder="search todos" value={searchTerm} onChange={(e) => handleSearchChange(e.target.value)} allowClear style={{ width: 200 }} />
                    {/* Select dropdown for filtering todos */}
                    <Select
                        defaultValue="ALL"
                        style={{
                            width: 150,
                        }}
                        value={currentFilter}
                        onChange={handleFilter}
                        options={[
                            {
                                value: 'ALL',
                                label: 'ALL',
                            },
                            {
                                value: 'INCOMPLETE',
                                label: 'INCOMPLETE',
                            },
                            {
                                value: 'COMPLETE',
                                label: 'COMPLETE',
                            },
                        ]}
                    />
                </div>
                <div className="flex gap-4 items-center">
                    {/* Checkbox to mark all todos as completed */}
                    {/* <Checkbox checked={allChecked} onChange={handleMarkAllCompleted} /> */}
                    <Button onClick={handleMarkAllCompleted} className="flex items-center">
                        <CheckOutlined />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default TaskInput;
