"use client"

// React.js Component Showcase - Task Management App
import { useState } from "react"
import { Plus, Check, Trash2, Edit3, Calendar, User } from "lucide-react"

const TaskManager = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Build React Dashboard",
      completed: false,
      priority: "high",
      assignee: "John Doe",
      dueDate: "2024-01-20",
    },
    {
      id: 2,
      title: "API Integration",
      completed: true,
      priority: "medium",
      assignee: "Jane Smith",
      dueDate: "2024-01-18",
    },
    {
      id: 3,
      title: "UI/UX Design Review",
      completed: false,
      priority: "low",
      assignee: "Mike Johnson",
      dueDate: "2024-01-25",
    },
  ])

  const [newTask, setNewTask] = useState("")
  const [filter, setFilter] = useState("all")

  // Add new task
  const addTask = () => {
    if (newTask.trim()) {
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          title: newTask,
          completed: false,
          priority: "medium",
          assignee: "Unassigned",
          dueDate: new Date().toISOString().split("T")[0],
        },
      ])
      setNewTask("")
    }
  }

  // Toggle task completion
  const toggleTask = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)))
  }

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Filter tasks
  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed
    if (filter === "pending") return !task.completed
    return true
  })

  // Priority color mapping
  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "text-red-500 bg-red-500/10"
      case "medium":
        return "text-yellow-500 bg-yellow-500/10"
      case "low":
        return "text-green-500 bg-green-500/10"
      default:
        return "text-gray-500 bg-gray-500/10"
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-zinc-900 rounded-xl shadow-2xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Task Manager</h1>
        <p className="text-gray-400">Manage your daily tasks efficiently</p>
      </div>

      {/* Add Task Form */}
      <div className="mb-6 flex gap-3">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task..."
          className="flex-1 px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          onKeyPress={(e) => e.key === "Enter" && addTask()}
        />
        <button
          onClick={addTask}
          className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg flex items-center gap-2 transition-colors"
        >
          <Plus size={20} />
          Add Task
        </button>
      </div>

      {/* Filter Buttons */}
      <div className="mb-6 flex gap-2">
        {["all", "pending", "completed"].map((filterType) => (
          <button
            key={filterType}
            onClick={() => setFilter(filterType)}
            className={`px-4 py-2 rounded-lg capitalize transition-colors ${
              filter === filterType ? "bg-purple-600 text-white" : "bg-zinc-800 text-gray-400 hover:bg-zinc-700"
            }`}
          >
            {filterType}
          </button>
        ))}
      </div>

      {/* Task List */}
      <div className="space-y-3">
        {filteredTasks.map((task) => (
          <div
            key={task.id}
            className={`p-4 bg-zinc-800 rounded-lg border border-zinc-700 transition-all hover:border-zinc-600 ${
              task.completed ? "opacity-75" : ""
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 flex-1">
                <button
                  onClick={() => toggleTask(task.id)}
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                    task.completed
                      ? "bg-purple-600 border-purple-600 text-white"
                      : "border-zinc-600 hover:border-purple-500"
                  }`}
                >
                  {task.completed && <Check size={14} />}
                </button>

                <div className="flex-1">
                  <h3 className={`font-medium ${task.completed ? "text-gray-500 line-through" : "text-white"}`}>
                    {task.title}
                  </h3>

                  <div className="flex items-center gap-4 mt-2 text-sm text-gray-400">
                    <span className={`px-2 py-1 rounded-full text-xs ${getPriorityColor(task.priority)}`}>
                      {task.priority}
                    </span>

                    <div className="flex items-center gap-1">
                      <User size={14} />
                      {task.assignee}
                    </div>

                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      {task.dueDate}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button className="p-2 text-gray-400 hover:text-purple-400 transition-colors">
                  <Edit3 size={16} />
                </button>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="p-2 text-gray-400 hover:text-red-400 transition-colors"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="mt-8 grid grid-cols-3 gap-4">
        <div className="bg-zinc-800 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-white">{tasks.length}</div>
          <div className="text-gray-400 text-sm">Total Tasks</div>
        </div>
        <div className="bg-zinc-800 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-purple-400">{tasks.filter((t) => t.completed).length}</div>
          <div className="text-gray-400 text-sm">Completed</div>
        </div>
        <div className="bg-zinc-800 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-yellow-400">{tasks.filter((t) => !t.completed).length}</div>
          <div className="text-gray-400 text-sm">Pending</div>
        </div>
      </div>
    </div>
  )
}

export default TaskManager
