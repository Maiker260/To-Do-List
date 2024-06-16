// JS Modules
import newTask from './scripts/Features/createNewTask';
import newProject from './scripts/Features/createNewProject';
import replaceTasksContent from './scripts/DOM/replaceTasksContent';
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

// Handle Project Buttons
// const projectBtns = handleProjectActions();

// Function to Show the Content Selected
const changeTasksDOMContent = replaceTasksContent();
// const changeProjectDOMContent = replaceProjectTasks();

// Show All Tasks in the Array when the Webpage loads
const loadWebpage = webpageLoads();