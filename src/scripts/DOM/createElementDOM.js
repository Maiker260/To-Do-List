export default function createElementDOM() {

    function createElementWithClasses(tag, classes) {
        const element = document.createElement(tag)
        if (classes === undefined) {
            return element;
        } else {
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