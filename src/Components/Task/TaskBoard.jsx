import { useState } from "react";

import AddTaskModal from "./AddTaskModal";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";
import TaskSearch from "./TaskSearch";
export default function TaskBoard() {
  function handleAddTask(newTask, isAdd) {
    if (isAdd) {
      setTasks([...tasks, newTask]);
    } else {
      setTasks(
        tasks.map((task) => {
          if (newTask.id === task.id) {
            return newTask;
          }
          return task;
        })
      );
    }
    setShowAddModal(false);
  }
  function handleEditTask(task) {
    setTaskToUpdate(task);
    setShowAddModal(true);
  }

  function handleCloseClick() {
    setShowAddModal(false);
    setTaskToUpdate(null);
  }

  function handleDelete(taskId) {
    const filteredTask = tasks.filter((task) => task.id !== taskId);
    setTasks(filteredTask);
  }
  function handleDeleteAll() {
    setTasks([]);
  }

  function handleFavourite(taskId) {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, isFavorite: !task.isFavorite };
        }
        return task;
      })
    );
  }

  const defaultTask = {
    id: crypto.randomUUID(),
    title: "Learn React",
    description:
      "React is a popular library of JavaScript. It is built by Facebook",
    tags: ["web", "js", "API"],
    priority: "High",
    isFavorite: false,
  };

  const [tasks, setTasks] = useState([defaultTask]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);
  return (
    <section className="mb-20" id="tasks">
      {showAddModal && (
        <AddTaskModal
          onSave={handleAddTask}
          onClose={handleCloseClick}
          taskToUpdate={taskToUpdate}
        />
      )}
      <div className="container">
        {/* Search Box */}
        <div className="p-2 flex justify-end">
          <TaskSearch />
        </div>
        {/* Search Box Ends */}
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskAction
            onAddTask={() => setShowAddModal(true)}
            onDeleteAll={handleDeleteAll}
          />
          <TaskList
            tasks={tasks}
            onEdit={handleEditTask}
            onDelete={handleDelete}
            onFav={handleFavourite}
          />
        </div>
      </div>
    </section>
  );
}
