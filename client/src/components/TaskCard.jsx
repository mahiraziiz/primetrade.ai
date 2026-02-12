import React from 'react';

const TaskCard = ({ task, onEdit, onDelete }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-6">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-semibold text-gray-900 flex-1 line-clamp-2">
          {task.title}
        </h3>
        <span className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ml-2 ${getStatusColor(task.status)}`}>
          {task.status ? task.status.charAt(0).toUpperCase() + task.status.slice(1) : 'Pending'}
        </span>
      </div>

      {task.description && (
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {task.description}
        </p>
      )}

      <div className="flex items-center justify-between mb-4 text-xs text-gray-500">
        <span>Created: {formatDate(task.createdAt)}</span>
        {task.updatedAt !== task.createdAt && (
          <span>Updated: {formatDate(task.updatedAt)}</span>
        )}
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => onEdit(task)}
          className="flex-1 bg-indigo-50 hover:bg-indigo-100 text-indigo-600 font-medium py-2 px-3 rounded-lg transition text-sm"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(task._id)}
          className="flex-1 bg-red-50 hover:bg-red-100 text-red-600 font-medium py-2 px-3 rounded-lg transition text-sm"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
