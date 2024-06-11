// JS Modules
import newTask from './scripts/Features/createNewTask';
import newProject from './scripts/Features/createNewProject';
import replaceTasksContent from './scripts/DOM/replaceTasksContent';
import replaceProjectContent from './scripts/DOM/replaceProjectContent';
import webpageLoads from './scripts/DOM/DOMLoads';
import showProjectsAvailable from './scripts/DOM/showProjectsAvailable';

// CSS Files
import './style.css';


// Lists Container
export const tasksList = [];
export const projectsList = [];

// Create a New Task
const newTaskElement = newTask;
// Show Projects Available in the Project List
const newTaskProjectBtn = showProjectsAvailable();

// Create a New Project
const newProjectElement = newProject;

// Function to Show the Content Selected
const changeTasksDOMContent = replaceTasksContent();

// Function to Show the Content Selected
const changeProjectDOMContent = replaceProjectContent();

// Show All Tasks in the Array when the Webpage loads
const loadWebpage = webpageLoads();