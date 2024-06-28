// JS Modules
import newTask from './scripts/Features/createNewTask';
import newProject from './scripts/Features/createNewProject';
import replaceTasksContent from './scripts/DOM/replaceTasksContent';
import webpageLoads from './scripts/DOM/DOMLoads';
import projectBtnsHandler from './scripts/DOM/projectBtnsHandler';
import taskBtnsHandler from './scripts/DOM/taskBtnsHandler';
import manageMobileViewSidebar from './scripts/Features/manageMobileViewSidebar';

// CSS Files
import './style.css';


// Lists Container
export const tasksList = [];
export const projectsList = [];

// Create a New Task
const newTaskElement = newTask;

// Edit/Delete/Info an Existing Task
const taskBtns = taskBtnsHandler();

// Create a New Project
const newProjectElement = newProject;

// Edit/Delete an Existing Project
const projectBtns = projectBtnsHandler();

// Function to Show the Content Selected
const changeTasksDOMContent = replaceTasksContent();

// Function to show or Hide the Sidebar for Mobile View
const showSidebar = manageMobileViewSidebar();

// Show All Stored Tasks in the Array when the Webpage loads
const loadWebpage = webpageLoads();