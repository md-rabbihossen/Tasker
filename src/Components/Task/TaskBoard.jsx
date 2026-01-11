import { useState } from "react";

import AddTaskModal from "./AddTaskModal";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";
import TaskSearch from "./TaskSearch";
export default function TaskBoard() {
  function handleAddTask(newTask) {
    setTasks([...tasks, newTask]);
    setShowAddModal(false);
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
  return (
    <section className="mb-20" id="tasks">
      {showAddModal && <AddTaskModal onSave={handleAddTask} />}
      <div className="container">
        {/* Search Box */}
        <div className="p-2 flex justify-end">
          <TaskSearch />
        </div>
        {/* Search Box Ends */}
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskAction onAddTask={() => setShowAddModal(true)} />
          <TaskList tasks={tasks} />
        </div>
      </div>
    </section>
  );
}
