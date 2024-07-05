// Function to filter tasks by priority
function filterTasksByPriority(tasks, priority) {
    return tasks.filter(task => task.priority === priority);
  }
  
  // Example usage
  let tasks = [
    { id: 1, name: 'Task 1', priority: 'High' },
    { id: 2, name: 'Task 2', priority: 'Medium' },
    { id: 3, name: 'Task 3', priority: 'Low' },
    { id: 4, name: 'Task 4', priority: 'Medium' },
    { id: 5, name: 'Task 5', priority: 'High' }
  ];
  
  let highPriorityTasks = filterTasksByPriority(tasks, 'High');
  console.log('High Priority Tasks:', highPriorityTasks);
  