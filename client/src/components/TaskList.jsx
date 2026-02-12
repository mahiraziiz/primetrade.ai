import React from 'react';
import TaskCard from './TaskCard';

const TaskList = ({ tasks, onEdit, onDelete }) => {
  const groupedTasks = {
    pending: tasks.filter(t => t.status === 'pending'),
    completed: tasks.filter(t => t.status === 'completed'),
  };

  return (
    <div className="space-y-6">
      {/* Pending Tasks */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
          Pending ({groupedTasks.pending.length})
        </h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {groupedTasks.pending.length > 0 ? (
            groupedTasks.pending.map(task => (
              <TaskCard
                key={task._id}
                task={task}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            ))
          ) : (
            <p className="text-gray-500 col-span-full">No pending tasks</p>
          )}
        </div>
      </div>

      {/* Completed Tasks */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
          Completed ({groupedTasks.completed.length})
        </h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {groupedTasks.completed.length > 0 ? (
            groupedTasks.completed.map(task => (
              <TaskCard
                key={task._id}
                task={task}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            ))
          ) : (
            <p className="text-gray-500 col-span-full">No completed tasks</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskList;
