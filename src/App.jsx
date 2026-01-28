import './App.css'


import React from "react";

const daysOfWeek = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

const Section = ({ title, tasks }) => {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>

        <div className="flex space-x-4 text-xs font-medium text-gray-500">
          {daysOfWeek.map((day) => (
            <span key={day} className="w-4 text-center">
              {day}
            </span>
          ))}
        </div>
      </div>

      {tasks.map((task, taskIndex) => (
        <div
          key={taskIndex}
          className="flex justify-between items-center py-2 border-t border-gray-200"
        >
          <span className="text-gray-700">{task}</span>

          <div className="flex space-x-4">
            {daysOfWeek.map((day) => (
              <input
                key={`${taskIndex}-${day}`}
                type="checkbox"
                className="h-4 w-4 accent-blue-600 cursor-pointer"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const App = () => {
  const morningTasks = [
    "Wake up at 6:30 a.m",
    "30 minutes of movement",
    "Write out tasks for the day",
    "Eat protein-rich breakfast",
    "Clean out email inbox",
  ];

  const afternoonTasks = [
    "Complete today's priority tasks",
    "Eat a nutritious lunch + dinner",
    "Drink at least 64oz of water",
    "Do something that brings you joy",
    "Outdoor movement",
  ];

  const eveningTasks = [
    "Get everything ready for following day",
    "10 minutes stretching",
    "Clean up your space",
    "Do skincare routine",
    "Get in bed at reasonable time",
  ];

  return (
    <div className="p-8 max-w-4xl mx-auto bg-white shadow-lg rounded-lg font-sans">
      <div className="text-center mb-8">
        <p className="text-sm text-gray-500">2025</p>
        <h1 className="text-3xl font-light text-gray-800">
          Productive Daily Routine
        </h1>
      </div>

      <Section title="Morning" tasks={morningTasks} />
      <Section title="Afternoon" tasks={afternoonTasks} />
      <Section title="Evening" tasks={eveningTasks} />
    </div>
  );
};

export default App