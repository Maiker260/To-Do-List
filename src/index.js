// JS Modules
import newTask from './scripts/Features/createNewTask';
import newProject from './scripts/Features/createNewProject';
import replaceContent from './scripts/DOM/replaceContentUI';


// CSS Files
import './style.css';


// Function to Create a New Task
const newTaskElement = newTask;

// Function to Create a New Project
const newProjectElement = newProject;

// Function to Show the Content Selected
const changeUIContent = replaceContent();

// Lists Container
export const tasksList = [];
export const projectsList = [];