import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState('all');
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');

  // Load tasks from localStorage on component mount
  useEffect(() => {
    const savedTasks = localStorage.getItem('todoTasks');
    if (savedTasks) {
      try {
        setTasks(JSON.parse(savedTasks));
      } catch (error) {
        console.error('Failed to load tasks from localStorage:', error);
      }
    }
  }, []);

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('todoTasks', JSON.stringify(tasks));
  }, [tasks]);

  // Add a new task
  const handleAddTask = (e) => {
    e.preventDefault();
    if (input.trim() === '') {
      alert('Please enter a task!');
      return;
    }

    const newTask = {
      id: Date.now(),
      text: input.trim(),
      completed: false,
      createdAt: new Date().toLocaleString(),
    };

    setTasks([newTask, ...tasks]);
    setInput('');
  };

  // Delete a task
  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle task completion
  const handleToggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Start editing a task
  const handleStartEdit = (id, text) => {
    setEditingId(id);
    setEditText(text);
  };

  // Cancel editing
  const handleCancelEdit = () => {
    setEditingId(null);
    setEditText('');
  };

  // Save edited task
  const handleSaveEdit = (id) => {
    if (editText.trim() === '') {
      alert('Task cannot be empty!');
      return;
    }

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, text: editText.trim() } : task
      )
    );
    setEditingId(null);
    setEditText('');
  };

  // Filter tasks based on selected filter
  const getFilteredTasks = () => {
    switch (filter) {
      case 'active':
        return tasks.filter((task) => !task.completed);
      case 'completed':
        return tasks.filter((task) => task.completed);
      default:
        return tasks;
    }
  };

  const filteredTasks = getFilteredTasks();
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const activeTasks = totalTasks - completedTasks;

  return (
    <div className="app-container">
      <div className="app-header">
        <h1>✓ My Task List</h1>
        <p>Stay organized and productive</p>
      </div>

      <div className="app-content">
        {/* Edit Section */}
        {editingId !== null && (
          <div className="edit-section">
            <h3>Edit Task</h3>
            <div className="edit-input-wrapper">
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                placeholder="Edit your task..."
                autoFocus
              />
              <div className="edit-buttons">
                <button
                  className="btn btn-small btn-save"
                  onClick={() => handleSaveEdit(editingId)}
                >
                  Save
                </button>
                <button
                  className="btn btn-small btn-cancel"
                  onClick={handleCancelEdit}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Add Task Section */}
        <form onSubmit={handleAddTask} className="input-section">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new task..."
          />
          <button type="submit" className="btn btn-primary">
            Add Task
          </button>
        </form>

        {/* Filter Buttons */}
        <div className="filter-buttons">
          <button
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Tasks
          </button>
          <button
            className={`filter-btn ${filter === 'active' ? 'active' : ''}`}
            onClick={() => setFilter('active')}
          >
            Active
          </button>
          <button
            className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
            onClick={() => setFilter('completed')}
          >
            Completed
          </button>
        </div>

        {/* Task List */}
        {filteredTasks.length === 0 ? (
          <div className="no-tasks">
            <div className="no-tasks-icon">📝</div>
            <p>
              {filter === 'completed' && totalTasks > 0
                ? 'No completed tasks yet'
                : filter === 'active' && totalTasks > 0
                ? 'No active tasks'
                : 'No tasks yet'}
            </p>
            <p className="no-tasks-hint">
              {totalTasks === 0 ? 'Add a task to get started!' : ''}
            </p>
          </div>
        ) : (
          <div className="task-list">
            {filteredTasks.map((task) => (
              <div
                key={task.id}
                className={`task-item ${task.completed ? 'completed' : ''}`}
              >
                <div className="checkbox-wrapper">
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={task.completed}
                    onChange={() => handleToggleComplete(task.id)}
                  />
                </div>
                {editingId === task.id ? (
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className="task-text"
                  />
                ) : (
                  <div className="task-text">{task.text}</div>
                )}
                <div className="task-actions">
                  <button
                    className="btn btn-small btn-edit"
                    onClick={() => handleStartEdit(task.id, task.text)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-small btn-delete"
                    onClick={() => handleDeleteTask(task.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Stats */}
      {totalTasks > 0 && (
        <div className="stats">
          <div className="stat-item">
            <div className="stat-label">Total</div>
            <div className="stat-value">{totalTasks}</div>
          </div>
          <div className="stat-item">
            <div className="stat-label">Active</div>
            <div className="stat-value">{activeTasks}</div>
          </div>
          <div className="stat-item">
            <div className="stat-label">Completed</div>
            <div className="stat-value">{completedTasks}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
