import createElementDOM from "./createElementDOM";

// Function to make the DOM Icons creation easier.
export default function createIcons(iconID, dataIcon, index, name) {

    const editSvg = createSvgIconTemplate(
        "interactive_icons main_content_section_task_icon pointer",
        "m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z",
        iconID,
        dataIcon,
        index,
        name
    )
    
    const deleteSvg = createSvgIconTemplate(
        "interactive_icons main_content_section_task_icon pointer",
        "M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z",
        iconID,
        dataIcon,
        index,
        name
    )

    const infoSvg = createSvgIconTemplate(
        "interactive_icons main_content_section_task_icon pointer",
        "M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
        iconID,
        dataIcon,
        index,
        name
    )

    return { editSvg, deleteSvg, infoSvg };
}

function createSvgIconTemplate(classes, pathData, iconID, dataIcon, index, name) {

    const newElement = createElementDOM();

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    newElement.assignAttributes(svg, {
        class: classes,
        "aria-hidden": "true",
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        fill: "none",
        viewBox: "0 0 24 24"
    });

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    newElement.assignAttributes(path, {
        stroke: "currentColor",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        "d": pathData,
        id: iconID,
        "data-icon": dataIcon,
        "data-index": index,
        "data-name": name
    });

    svg.appendChild(path);

    return svg;
}