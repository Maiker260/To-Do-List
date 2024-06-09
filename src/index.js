// JS Modules
import newTask from './scripts/Features/createNewTask';
import newProject from './scripts/Features/createNewProject';
import replaceContent from './scripts/DOM/replaceContentDOM';
import webpageLoads from './scripts/DOM/DOMLoads';

// CSS Files
import './style.css';


// Lists Container
export const tasksList = [];
export const projectsList = [];

// Create a New Task
const newTaskElement = newTask;

// Create a New Project
const newProjectElement = newProject;

// Function to Show the Content Selected
const changeUIContent = replaceContent();

// Show All Tasks in the Array when the Webpage loads
const loadWebpage = webpageLoads();