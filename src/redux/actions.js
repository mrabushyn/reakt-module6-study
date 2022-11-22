import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

// export const addTask = text => {
//   return {
//     type: 'tasks/addTask',
//     payload: {
//       id: nanoid(),
//       completed: false,
//       text,
//     },
//   };
// };
// console.log(addTask('Learn Redux Toolkit'));




// export const deleteTask = taskId => {
//   return {
//     type: 'tasks/deleteTask',
//     payload: taskId,
//   };
// };
// export const toggleCompleted = taskId => {
//   return {
//     type: 'tasks/toggleCompleted',
//     payload: taskId,
//   };
// };

// export const setStatusFilter = value => {
//   return {
//     type: 'filters/setStatusFilter',
//     payload: value,
//   };
// };




//=============== After ========================




export const addTask = createAction('tasks/AddTask', text => {
    return {
      payload: {
        id: nanoid(),
        completed: false,
        text,
      },
    };
});

console.log(addTask.type);

export const deleteTask = createAction('tasks/deleteTask');

export const toggleCompleted = createAction('tasks/toggleCompleted');

export const setStatusFilter = createAction('filters/setStatusFilter');
