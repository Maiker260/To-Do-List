// Function to create a DOM element with a class/attribute easier.
export default function createElementDOM() {

    function createElementWithClasses(tag, classes) {
        const element = document.createElement(tag)
        if (classes === undefined) {
            return element;
        } else {
            // If the "classes" property is an array, it will add all the classes. 
            element.classList.add(...classes);
            return element;
        }
    }
    
    function assignAttributes(element, attributes) {
        for (let value in attributes) {
            element.setAttribute(value, attributes[value]);
        }
    }

    return { createElementWithClasses, assignAttributes }
}