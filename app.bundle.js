"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([[524],{

/***/ 24:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `// extracted by mini-css-extract-plugin
export {};`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;QACQ,CAAA","sourcesContent":["// extracted by mini-css-extract-plugin\nexport {};"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 314:
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ 354:
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ 72:
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 659:
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ 540:
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ 56:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 825:
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ 113:
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ 926:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  D: () => (/* binding */ projectsList),
  p: () => (/* binding */ tasksList)
});

;// CONCATENATED MODULE: ./src/scripts/Features/clickingOutsideModals.js
   // Function to allow the user to close the Modal when clicking outside it.
function clickingOutsideModals() {
    function closeModal(e, dialog) {
        const dialogDimensions = dialog.getBoundingClientRect()
        if (
            e.clientX < dialogDimensions.left ||
            e.clientX > dialogDimensions.right ||
            e.clientY < dialogDimensions.top ||
            e.clientY > dialogDimensions.bottom
        ) {
            dialog.close()
        }
    }

    return { closeModal }
}
;// CONCATENATED MODULE: ./src/scripts/DOM/createElementDOM.js
// Function to create a DOM element with a class/attribute easier.
function createElementDOM() {

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
;// CONCATENATED MODULE: ./src/scripts/DOM/showProjectsAvailable.js



// Shows Projects available in the "Project" Dropdown menu in the New Task Section.
function showProjectsAvailable(modal) {

    // Clear All Options from the List.
    clearSelectOptions(modal);

    const newTaskProjectList = document.querySelector(modal);
    const newElement = createElementDOM();

    const defaultOption = newElement.createElementWithClasses("option");
    defaultOption.value = "default"
    newElement.assignAttributes(defaultOption, {
        selected: true,
        disabled: true
    });
    defaultOption.textContent = "Select a Project";
    newTaskProjectList.appendChild(defaultOption)

    // Create the Project Name Option in the Project List.
    projectsList.forEach(project => {
        const projectName = newElement.createElementWithClasses("option");
        projectName.value = project.name;
        projectName.textContent = project.name;
        newTaskProjectList.appendChild(projectName)
    });
}

function clearSelectOptions(modal) {
    const newTaskProjectList = document.querySelector(modal)
    newTaskProjectList.textContent = "";
}
;// CONCATENATED MODULE: ./src/scripts/Features/BtnEventsListeners.js



// Function to add the Event Listeners to the DOM easier.
function BtnEventsListeners(modalSelector, btnSelector, createEditBtnSelector, createEditFunction) {

    const modal = document.querySelector(modalSelector);
    const openBtn = document.querySelector(btnSelector);

    // Open Modal.
    openBtn.addEventListener("click", () => {
        modal.showModal();
        // Show Available Projects in New Task Modal.
        showProjectsAvailable("#new_task_project");
    });

    // Close the Modal when clicking outside it.
    const clickModals = clickingOutsideModals()

    modal.addEventListener("click", (e) => {
        clickModals.closeModal(e, modal);
    });

    // Create/Edit Element and add it to the List Container.
    document.querySelector(createEditBtnSelector).addEventListener("click", e => {
        e.preventDefault();
        createEditFunction();
        modal.close();
    });
    
}
;// CONCATENATED MODULE: ./src/scripts/Features/reAssignIndex.js
// Assign a new Index Value, in case that a Task/Project was deleted before.
function reAssignIndex(list) {
    for (const i in list) {
        list[i].index = i;
    }
}
;// CONCATENATED MODULE: ./src/scripts/DOM/createIcons.js


// Function to make the DOM Icons creation easier.
function createIcons(iconID, dataIcon, index, name) {

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
;// CONCATENATED MODULE: ./src/scripts/Features/TaskCompleteStatus.js
// Function to check the current Task Status.
function taskCompleteStatus() {

    function checkTaskStatus(task) {
        if (task) {
            return true;
        } else {
            return false;
        }
    }

    function changeTaskStatus(task) {
        if (checkTaskStatus(task.completed)) {
            task.completed = false;
        } else if (!checkTaskStatus(task.completed)) {
            task.completed = true;
        }
    }

    return { checkTaskStatus, changeTaskStatus }
}
;// CONCATENATED MODULE: ./src/scripts/DOM/createTaskDOM.js




// Function to create the Task into the DOM.
function createTaskDOM(index, taskName, dueDate, taskStatus) {

    const newElement = createElementDOM();
    const taskComplete = taskCompleteStatus();

    // Task Main Container
    const taskContainer = newElement.createElementWithClasses("article", [
        "main_content_section_individual_task",
        "flex",
        "current_option"
        ]
    )
    newElement.assignAttributes(taskContainer, {
        id: taskName + "-" + index,
        "data-index": index,
        "data-name": taskName + "-" + index,
        "data-title": taskName
        }
    );

    // New Task Left Section
    const taskDivContainerLeftSection = newElement.createElementWithClasses("div", [ 
        "main_content_section_task_description_left",
        "flex"
        ]
    );

        // Checkbox
    const taskCheckbox = newElement.createElementWithClasses("input", [
        "main_content_section_task_checkbox",
        "interactive_icons",
        "pointer"
        ]
    );
    newElement.assignAttributes(taskCheckbox, {
        type: "checkbox",
        name: `task_checkbox${index}`,
        id: `task${index}`,
        "data-icon": "checkbox",
        "data-index": index
        }
    );

        // Task Title
    const taskLabel = newElement.createElementWithClasses("label", [
        "main_content_section_task_description_text",
        "pointer"
        ]
    );
    newElement.assignAttributes(taskLabel, {
        for: `task${index}`,
        "data-name": taskName + "-" + index,
        "data-title": taskName,
        "data-type": "Task Container",
        "data-index": index
        }
    );
    
    const taskLabelText = newElement.createElementWithClasses("p", [
        "main_content_section_task_description_text_content"
    ]);
    taskLabelText.textContent = taskName;
    newElement.assignAttributes(taskLabelText, {
        "data-name": taskName + "-" + index,
        "data-title": taskName,
        "data-type": "Task Container",
        "data-index": index
        }
    );
    taskLabel.appendChild(taskLabelText);

        // Append Task Details to Task Left Container 
    taskDivContainerLeftSection.appendChild(taskCheckbox);
    taskDivContainerLeftSection.appendChild(taskLabel);


    // New Task Right Section
    const taskDivContainerRightSection = newElement.createElementWithClasses("div", [
        "main_content_section_task_description_right",
        "flex"
        ]
    );

        // Due Date
    const taskDueDate = newElement.createElementWithClasses("p", [
        "main_content_section_task_due_date"
        ]
    );
    taskDueDate.textContent = dueDate;

        // Add more styles if the Task is Completed
    if (taskComplete.checkTaskStatus(taskStatus)) {
        taskLabelText.classList.add("task_completed");
        taskDueDate.classList.add("task_completed");
        taskCheckbox.checked = true;
    }

        // Icons Container
    const taskRightIconsDivContainer = newElement.createElementWithClasses("div", [
        "main_content_section_task_description_right_icons",
        "flex"
        ]
    );
    newElement.assignAttributes(taskRightIconsDivContainer, {
        "data-name": taskName + "-" + index,
        "data-title": taskName
        }        
    );
    
        // Append Icons to Container
    const editTaskBtnID = "editTaskBtn" + "_" + taskName + "_" + index;
    const editTaskDataIcon = "edit";
    const deleteTaskBtnID = "deleteTaskBtn" + "_" + taskName + "_" + index;
    const delTaskDataIcon = "delete";
    const infoTaskBtnID = "infoTaskBtn" + "_" + taskName + "_" + index;
    const infoTaskDataIcon = "info";

    const editIcons = createIcons(editTaskBtnID, editTaskDataIcon, index, taskName);
    const delIcons = createIcons(deleteTaskBtnID, delTaskDataIcon, index, taskName);
    const infoIcons = createIcons(infoTaskBtnID, infoTaskDataIcon, index, taskName);

    newElement.assignAttributes(editIcons.editSvg, {
        id: editTaskBtnID,
        "data-icon": editTaskDataIcon,
        "data-index": index,
        "data-name": taskName
    });
    newElement.assignAttributes(delIcons.deleteSvg, {
        id: deleteTaskBtnID,
        "data-icon": delTaskDataIcon,
        "data-index": index,
        "data-name": taskName
    });
    newElement.assignAttributes(infoIcons.infoSvg, {
        id: infoTaskBtnID,
        "data-icon": infoTaskDataIcon,
        "data-index": index,
        "data-name": taskName
    });
    taskRightIconsDivContainer.appendChild(editIcons.editSvg);
    taskRightIconsDivContainer.appendChild(delIcons.deleteSvg);
    taskRightIconsDivContainer.appendChild(infoIcons.infoSvg);

        // Append Task Details to Task Right Container
    taskDivContainerRightSection.appendChild(taskDueDate);
    taskDivContainerRightSection.appendChild(taskRightIconsDivContainer);

    //Append Sections to Task Main Container

    taskContainer.appendChild(taskDivContainerLeftSection);
    taskContainer.appendChild(taskDivContainerRightSection);

    // Append Task to the DOM
    const listContainer = document.querySelector("#main_content_section_task_list_container");
    listContainer.appendChild(taskContainer);
}
;// CONCATENATED MODULE: ./node_modules/date-fns/constructFrom.mjs
/**
 * @name constructFrom
 * @category Generic Helpers
 * @summary Constructs a date using the reference date and the value
 *
 * @description
 * The function constructs a new date using the constructor from the reference
 * date and the given value. It helps to build generic functions that accept
 * date extensions.
 *
 * It defaults to `Date` if the passed reference date is a number or a string.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The reference date to take constructor from
 * @param value - The value to create the date
 *
 * @returns Date initialized using the given date and value
 *
 * @example
 * import { constructFrom } from 'date-fns'
 *
 * // A function that clones a date preserving the original type
 * function cloneDate<DateType extends Date(date: DateType): DateType {
 *   return constructFrom(
 *     date, // Use contrustor from the given date
 *     date.getTime() // Use the date value to create a new date
 *   )
 * }
 */
function constructFrom(date, value) {
  if (date instanceof Date) {
    return new date.constructor(value);
  } else {
    return new Date(value);
  }
}

// Fallback for modularized imports:
/* harmony default export */ const date_fns_constructFrom = ((/* unused pure expression or super */ null && (constructFrom)));

;// CONCATENATED MODULE: ./node_modules/date-fns/constructNow.mjs


/**
 * @name constructNow
 * @category Generic Helpers
 * @summary Constructs a new current date using the passed value constructor.
 * @pure false
 *
 * @description
 * The function constructs a new current date using the constructor from
 * the reference date. It helps to build generic functions that accept date
 * extensions and use the current date.
 *
 * It defaults to `Date` if the passed reference date is a number or a string.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The reference date to take constructor from
 *
 * @returns Current date initialized using the given date constructor
 *
 * @example
 * import { constructNow, isSameDay } from 'date-fns'
 *
 * function isToday<DateType extends Date>(
 *   date: DateType | number | string,
 * ): boolean {
 *   // If we were to use `new Date()` directly, the function would  behave
 *   // differently in different timezones and return false for the same date.
 *   return isSameDay(date, constructNow(date));
 * }
 */
function constructNow(date) {
  return constructFrom(date, Date.now());
}

// Fallback for modularized imports:
/* harmony default export */ const date_fns_constructNow = ((/* unused pure expression or super */ null && (constructNow)));

;// CONCATENATED MODULE: ./node_modules/date-fns/toDate.mjs
/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param argument - The value to convert
 *
 * @returns The parsed date in the local time zone
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  const argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (
    argument instanceof Date ||
    (typeof argument === "object" && argStr === "[object Date]")
  ) {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new argument.constructor(+argument);
  } else if (
    typeof argument === "number" ||
    argStr === "[object Number]" ||
    typeof argument === "string" ||
    argStr === "[object String]"
  ) {
    // TODO: Can we get rid of as?
    return new Date(argument);
  } else {
    // TODO: Can we get rid of as?
    return new Date(NaN);
  }
}

// Fallback for modularized imports:
/* harmony default export */ const date_fns_toDate = ((/* unused pure expression or super */ null && (toDate)));

;// CONCATENATED MODULE: ./node_modules/date-fns/startOfDay.mjs


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of a day
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay(date) {
  const _date = toDate(date);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const date_fns_startOfDay = ((/* unused pure expression or super */ null && (startOfDay)));

;// CONCATENATED MODULE: ./node_modules/date-fns/isSameDay.mjs


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The first date to check
 * @param dateRight - The second date to check

 * @returns The dates are in the same day (and year and month)
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */
function isSameDay(dateLeft, dateRight) {
  const dateLeftStartOfDay = startOfDay(dateLeft);
  const dateRightStartOfDay = startOfDay(dateRight);

  return +dateLeftStartOfDay === +dateRightStartOfDay;
}

// Fallback for modularized imports:
/* harmony default export */ const date_fns_isSameDay = ((/* unused pure expression or super */ null && (isSameDay)));

;// CONCATENATED MODULE: ./node_modules/date-fns/isToday.mjs



/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is today
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * const result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */
function isToday(date) {
  return isSameDay(date, constructNow(date));
}

// Fallback for modularized imports:
/* harmony default export */ const date_fns_isToday = ((/* unused pure expression or super */ null && (isToday)));

;// CONCATENATED MODULE: ./node_modules/date-fns/_lib/defaultOptions.mjs
let defaultOptions = {};

function getDefaultOptions() {
  return defaultOptions;
}

function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}

;// CONCATENATED MODULE: ./node_modules/date-fns/startOfWeek.mjs



/**
 * The {@link startOfWeek} function options.
 */

/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a week
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfWeek(date, options) {
  const defaultOptions = getDefaultOptions();
  const weekStartsOn =
    options?.weekStartsOn ??
    options?.locale?.options?.weekStartsOn ??
    defaultOptions.weekStartsOn ??
    defaultOptions.locale?.options?.weekStartsOn ??
    0;

  const _date = toDate(date);
  const day = _date.getDay();
  const diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;

  _date.setDate(_date.getDate() - diff);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const date_fns_startOfWeek = ((/* unused pure expression or super */ null && (startOfWeek)));

;// CONCATENATED MODULE: ./node_modules/date-fns/isSameWeek.mjs


/**
 * The {@link isSameWeek} function options.
 */

/**
 * @name isSameWeek
 * @category Week Helpers
 * @summary Are the given dates in the same week (and month and year)?
 *
 * @description
 * Are the given dates in the same week (and month and year)?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The first date to check
 * @param dateRight - The second date to check
 * @param options - An object with options
 *
 * @returns The dates are in the same week (and month and year)
 *
 * @example
 * // Are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4))
 * //=> true
 *
 * @example
 * // If week starts with Monday,
 * // are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4), {
 *   weekStartsOn: 1
 * })
 * //=> false
 *
 * @example
 * // Are 1 January 2014 and 1 January 2015 in the same week?
 * const result = isSameWeek(new Date(2014, 0, 1), new Date(2015, 0, 1))
 * //=> false
 */
function isSameWeek(dateLeft, dateRight, options) {
  const dateLeftStartOfWeek = startOfWeek(dateLeft, options);
  const dateRightStartOfWeek = startOfWeek(dateRight, options);

  return +dateLeftStartOfWeek === +dateRightStartOfWeek;
}

// Fallback for modularized imports:
/* harmony default export */ const date_fns_isSameWeek = ((/* unused pure expression or super */ null && (isSameWeek)));

;// CONCATENATED MODULE: ./node_modules/date-fns/isThisWeek.mjs



/**
 * The {@link isThisWeek} function options.
 */

/**
 * @name isThisWeek
 * @category Week Helpers
 * @summary Is the given date in the same week as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same week as the current date?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 * @param options - The object with options
 *
 * @returns The date is in this week
 *
 * @example
 * // If today is 25 September 2014, is 21 September 2014 in this week?
 * const result = isThisWeek(new Date(2014, 8, 21))
 * //=> true
 *
 * @example
 * // If today is 25 September 2014 and week starts with Monday
 * // is 21 September 2014 in this week?
 * const result = isThisWeek(new Date(2014, 8, 21), { weekStartsOn: 1 })
 * //=> false
 */
function isThisWeek(date, options) {
  return isSameWeek(date, constructNow(date), options);
}

// Fallback for modularized imports:
/* harmony default export */ const date_fns_isThisWeek = ((/* unused pure expression or super */ null && (isThisWeek)));

;// CONCATENATED MODULE: ./src/scripts/Features/filterTasks.js





function filterTasks() {
    function allTasks() {
        filterAndCreateTasks(task => !task.completed)
    }

    function todayTask() {
        filterAndCreateTasks(task => isTodayTaskFilter(task.dueDate) && !task.completed);
    }

    function thisWeekTask() {
        filterAndCreateTasks(task => isThisWeekTaskFilter(task.dueDate) && !task.completed);
    }

    function urgentTasks() {
        filterAndCreateTasks(task => task.priority === "Urgent" && !task.completed);
    }

    function completedTasks() {
        filterAndCreateTasks(task => task.completed);
    }

    return { allTasks, todayTask, thisWeekTask, urgentTasks, completedTasks }
}


function filterAndCreateTasks(filter) {
    reAssignIndex(tasksList);
    filterList(tasksList, filter).forEach(task => {
        createTaskDOM(task.index, task.name, task.dueDate, task.completed);
    });
}

function filterList(array, criteria) {
    return array.filter(criteria);
}

function convertDate(date) {
    // Date will show 1 day before the one requested if "Hyphens" are used, if a "/" is used it works.
    return new Date(date.replace(/-/g, '\/'));
}

function isTodayTaskFilter(date) {
    return isToday(convertDate(date))
}

function isThisWeekTaskFilter(date) {
    // Week starts on Monday
    return isThisWeek(convertDate(date), { weekStartsOn: 1 })
}
;// CONCATENATED MODULE: ./src/scripts/DOM/taskSectionSelected.js


// Check where the User is currently located in the Website.
function taskSectionSelected(section) {

    switch (section) {
        case "All Tasks":
            filterTasks().allTasks();
            break
        case "Today":
            filterTasks().todayTask();
            break
        case "This Week":
            filterTasks().thisWeekTask();
            break
        case "Urgent":
            filterTasks().urgentTasks();
            break
        case "Completed":
            filterTasks().completedTasks();
            break
    }

}
;// CONCATENATED MODULE: ./src/scripts/Features/filterProjects.js




// Function to filter the Projects depending on the Criteria.
function filterProjects(project) {
    filterAndCreateProject(task => task.project == project);
}

function filterAndCreateProject(filter) {
    reAssignIndex(tasksList);
    filterProjects_filterList(tasksList, filter).forEach(task => {
        createTaskDOM(task.index, task.name, task.dueDate, task.completed);
    });
}

function filterProjects_filterList(array, criteria) {
    return array.filter(criteria);
}
;// CONCATENATED MODULE: ./src/scripts/DOM/checkCurrentTaskSectionTitle.js



// Check where the User is located in the Tasks Section to display the Tasks Available.
function checkCurrentTaskSectionTitle() {

    const contentTitle = document.querySelector("#main_content_section_main_title");
    taskSectionSelected(contentTitle.dataset.title);
    filterProjects(contentTitle.dataset.title);
}
;// CONCATENATED MODULE: ./src/scripts/DOM/clearMainSectionContent.js
// Function to clear all Tasks in the Main Section before showing the new Tasks.
function clearMainSectionContent() {
    const currentContent = document.querySelector("#main_content_section_task_list_container");
    currentContent.textContent = "";
}
;// CONCATENATED MODULE: ./src/scripts/Features/DataInLocalStorage.js


// Function to storage the items in the Local Storage with the Web Storage API.
function storeDataInLocalStorage() {

    function storeTask(task) {
        let transformTaskObjectToString = JSON.stringify(task)
        localStorage.setItem(`Task ${task.index}`, transformTaskObjectToString);
    }

    function storeProject(project) {
        let transformProjectObjectToString = JSON.stringify(project);
        localStorage.setItem(`Project ${project.index}`, transformProjectObjectToString);
    }

    return { storeTask, storeProject }
};

// Function to modify/recreate the items in the Local Storage with the Web Storage API.
function modifyDataInLocalStorage() {

    function recreateAllKeys() {
        localStorage.clear();
        tasksList.forEach(task => storeDataInLocalStorage().storeTask(task));
        projectsList.forEach(project => storeDataInLocalStorage().storeProject(project));
    }

    return { recreateAllKeys }
}

// Function to retrieve the items in the Local Storage with the Web Storage API.
function retrieveAllDataInLocalStorage() {

    if (localStorage.length) {
        for (let i = 0; i < localStorage.length; i++) {
            if (localStorage.key(i).startsWith("Task")) {
                const transformStringToTaskObject = JSON.parse(localStorage.getItem(localStorage.key(i)));
                tasksList.push(transformStringToTaskObject);
            } else if (localStorage.key(i).startsWith("Project")) {
                const transformStringToProjectObject = JSON.parse(localStorage.getItem(localStorage.key(i)));
                projectsList.push(transformStringToProjectObject);
            }
        }   
    }
        
}
;// CONCATENATED MODULE: ./src/scripts/Features/createNewTask.js







// Function to create the Task Object.
function createNewTask() {    

    class Task {
        constructor(name, description, project, dueDate, priority) {
            this.name = name;
            this.description = description;
            this.project = project;
            this.dueDate = dueDate;
            this.priority = priority
            this.completed = false;
            this.index = "";
        }
    }

    const taskFormElements = {
        name: document.querySelector("#new_task_name"),
        description: document.querySelector("#new_task_description"),
        project: document.querySelector("#new_task_project"),
        dueDate: document.querySelector("#new_task_due_date"),
        priority: document.querySelector("#new_task_priority")
    };

    function rejectBlankValues() {
        for (let key in taskFormElements) {
            if (taskFormElements[key].value.trim() === "" || 
                taskFormElements[key].value.trim() === "default") {
                alert(`The ${key} field cannot be blank.`);
                return false;
            }
        }
        return true;
    }

    // Create New Task
    function addNewTaskToList() {

        // Validate before adding a new task
        if (!rejectBlankValues()) {
            return;
        }

        const newTask = new Task(
            taskFormElements.name.value,
            taskFormElements.description.value,
            taskFormElements.project.value,
            taskFormElements.dueDate.value,
            taskFormElements.priority.value,
        );

        // Add New Task to the List
        tasksList.push(newTask);

        // Assign a new Index value, in case that a Task was deleted before.
        reAssignIndex(tasksList);

        // Add New Task to the Local Storage
        storeDataInLocalStorage().storeTask(newTask);

        // Clear DOM Current Content
        clearMainSectionContent();

        // Add Task to the DOM
        checkCurrentTaskSectionTitle();

        // Clear Current Information
        clearCurrentForm();
    }

    // Clear Current Information from Form
    function clearCurrentForm() {
        taskFormElements.name.value = "";
        taskFormElements.description.value = "";
        taskFormElements.project.value = "default";
        taskFormElements.dueDate.value = "";
        taskFormElements.priority.value = "default";
    }

    return {
        addNewTaskToList
    };
}

const createNewTask_newTask = createNewTask();

BtnEventsListeners(
    "#add_new_todo_task_dialog", 
    "#add_new_todo_task_btn", 
    "#new_task_create_btn",
    createNewTask_newTask.addNewTaskToList
);

/* harmony default export */ const Features_createNewTask = ((/* unused pure expression or super */ null && (createNewTask_newTask)));

;// CONCATENATED MODULE: ./src/scripts/DOM/createProjectDOM.js



// Function to create the Project into the DOM.
function createProjectDOM(index, name) {

    const projectList = document.querySelector("#left_side_navbar_second_project_list");

    const newElement = createElementDOM();

    // Project Main Container
    const projectContainer = newElement.createElementWithClasses("li", [
        "left_side_navbar_list_all_titles",
        "left_side_navbar_list_titles",
        "icon_text_center",
        "left_side_navbar_second_list_titles",
        "left_side_navbar_second_list_project",
        "current_option",
        "flex"
        ]
    );
    newElement.assignAttributes(projectContainer, {
        id: name + "-" + index,
        "data-index": index,
        "data-name": name + "-" + index,
        "data-title": name
        }
    );

        // Project Title
    const projectTitle = newElement.createElementWithClasses("p", [
        "left_side_navbar_task_title",
        "pointer"
        ]
    );
    projectTitle.textContent = name;
    newElement.assignAttributes(projectTitle, {
        "data-name": name + "-" + index,
        "data-title": name,
        "data-type": "Project Container"
        }
    );

        // Icons Container
    const iconsContainer = newElement.createElementWithClasses("div", [
        "left_side_navbar_second_list_icons_container",
        "flex"
        ]
    );
    newElement.assignAttributes(iconsContainer, {
        "data-name": name + "-" + index,
        "data-title": name
        }        
    );

            // Append Icons to Container
    const editBtnID = "editBtn" + "_" + name + "_" + index;
    const editDataIcon = "edit";
    const deleteBtnID = "deleteBtn" + "_" + name + "_" + index;
    const delDataIcon = "delete";

    const editIcons = createIcons(editBtnID, editDataIcon, index, name);
    const delIcons = createIcons(deleteBtnID, delDataIcon, index, name);

    newElement.assignAttributes(editIcons.editSvg, {
        id: editBtnID,
        "data-icon": editDataIcon,
        "data-index": index,
        "data-name": name
    });
    newElement.assignAttributes(delIcons.deleteSvg, {
        id: deleteBtnID,
        "data-icon": delDataIcon,
        "data-index": index,
        "data-name": name
    });
    iconsContainer.appendChild(editIcons.editSvg);
    iconsContainer.appendChild(delIcons.deleteSvg);

            // Append Project Content to Project Container
    projectContainer.appendChild(projectTitle);
    projectContainer.appendChild(iconsContainer);

            // Append Project to Project List
    projectList.appendChild(projectContainer);
}

;// CONCATENATED MODULE: ./src/scripts/Features/createNewProject.js








// Function to create the Project Object.
function createNewProject() {

    const addNewProjectField = document.querySelector("#add_new_project_title")

    class Project {
        constructor (name) {
            this.name = name;
            this.index = "";
        }
    }
    
    // Create New Project
    function addNewProjectToList() {

        // Validate before adding a new task
        if (!rejectBlankValue(addNewProjectField)) {
            return;
        }

        const newProject = new Project(
            `${addNewProjectField.value}`
        )

        // Add New Project to the List
        projectsList.push(newProject);

        // Assign a new Index value, in case that a Project was deleted before.
        reAssignIndex(projectsList);

        // Add New Project to the Local Storage
        storeDataInLocalStorage().storeProject(newProject);

        // Clear DOM Current Content
        clearMainSectionContent();

        // Add Task to the DOM
        checkCurrentTaskSectionTitle();

        // Clear Current Information
        clearCurrentForm(addNewProjectField);

        // Add Project to the Project DOM List
        createProjectDOM(newProject.index, newProject.name);
    }

    return { addNewProjectToList }
}

function rejectBlankValue(field) {
    if (field.value.trim() == "") {
        alert("The Project Name field cannot be blank.");
        clearCurrentForm(field);
        return false
    } else if (!rejectDuplicateProjectNames(field.value)) {
        alert("The Project Name already exists, try again.");
        clearCurrentForm(field);
        return false
    }
    return true
}

function rejectDuplicateProjectNames(name) {
    for (let key in projectsList) {
        if (projectsList[key].name === name) {
            return false
        }
    }
    return true
}

// Clear Current Information
function clearCurrentForm(field) {
    field.value = "";
}

const createNewProject_newProject = createNewProject();

BtnEventsListeners(
    "#add_new_project_dialog",
    "#add_new_todo_project_btn",
    "#new_project_create_btn",
    createNewProject_newProject.addNewProjectToList
);

/* harmony default export */ const Features_createNewProject = ((/* unused pure expression or super */ null && (createNewProject_newProject)));
;// CONCATENATED MODULE: ./src/scripts/DOM/changeCurrentTitle.js
// Function to replace the Main Section title when a Navigation button was clicked.
function changeCurrentTitle(name) {
    const contentTitle = document.querySelector("#main_content_section_main_title");
    contentTitle.textContent = name;
    contentTitle.dataset.title = name;
}
;// CONCATENATED MODULE: ./src/scripts/DOM/replaceTasksContent.js




// Function to modify the DOM content depending on the Task Feature pressed.
function replaceTasksContent() {
    const leftSideNavbarBtns = [
        "#left_side_navbar_all_tasks_btn",
        "#left_side_navbar_today_btn",
        "#left_side_navbar_this_week_btn",
        "#left_side_navbar_urgent_btn",
        "#left_side_navbar_completed_btn"
    ]

    leftSideNavbarBtns.forEach(btn => {
        const button = document.querySelector(btn);
        if (button) {
            button.addEventListener("click", (e) => {
                const currentBtn = e.target.dataset.name;
                changeCurrentTitle(currentBtn);
                clearMainSectionContent();
                taskSectionSelected(currentBtn);
            })
        }
    })
}
;// CONCATENATED MODULE: ./src/scripts/DOM/DOMLoads.js





// Show All Available Tasks in the Project/Tasks Array when the Webpage loads.
function webpageLoads() {

    document.addEventListener("DOMContentLoaded", () => {
        retrieveAllDataInLocalStorage();
        showAllTasksInArray();
    })
}
// Function to show all Available Tasks in the DOM.
function showAllTasksInArray() {
    for (const i in tasksList) {
        createTaskDOM(i, tasksList[i].name, tasksList[i].dueDate, tasksList[i].completed);
    }
    for (const i in projectsList) {
        createProjectDOM(i, projectsList[i].name);
    }
}
;// CONCATENATED MODULE: ./src/scripts/DOM/handleProjectModals.js
// Modify the Edit/Delete Project Modal DOM
function handleProjectModals() {
    function editModalInfo(projectName, index) {
        const projectModalMainTitle = document.querySelector("#edit_project_dialog_main_title");
        const EditProjectName = document.querySelector("#edit_project_name");
        const inputPlaceHolder = document.querySelector("#edit_project_title");
        const confirmEditButton = document.querySelector("#edit_project_create_btn");

        projectModalMainTitle.textContent = "Edit Project " + `"` + projectName + `"`;
        projectModalMainTitle.dataset.name = "edit";
        EditProjectName.textContent = "Edit the Project Name: ";
        inputPlaceHolder.placeholder = projectName;
        inputPlaceHolder.dataset.projectId = index;
        inputPlaceHolder.dataset.projectName = projectName;
        confirmEditButton.textContent = "Edit Project";
    }

    function deleteModalInfo(projectName, index) {
        const projectModalMainTitle = document.querySelector("#edit_project_dialog_main_title");
        const confirmName = document.querySelector("#edit_project_name");
        const inputPlaceHolder = document.querySelector("#edit_project_title");
        const confirmDeleteButton = document.querySelector("#edit_project_create_btn");

        projectModalMainTitle.textContent = "Do you want to delete " + `"` + projectName + `"` + "?";
        projectModalMainTitle.dataset.name = "delete";
        confirmName.textContent = "Confirm the Project Name: ";
        inputPlaceHolder.dataset.projectId = index;
        inputPlaceHolder.dataset.projectName = projectName;
        confirmDeleteButton.textContent = "Delete Project";
    }

    function clearModalValues() {
        const inputValue = document.querySelector("#edit_project_title");
        inputValue.value = "";
    }

    return { editModalInfo, deleteModalInfo, clearModalValues }
}
;// CONCATENATED MODULE: ./src/scripts/DOM/clearProjectSection.js
// Function to remove all the projects in the DOM before showing the new ones.
function clearProjectSection() {    
    const projectListSection = document.querySelector("#left_side_navbar_second_project_list");
    projectListSection.textContent = "";
}
;// CONCATENATED MODULE: ./src/scripts/Features/manageProjecBtns.js









// Function to apply the Project Changes depending on which button was pressed.
function manageProjectBtns() {

    function checkButtonPressed(e) {

        const projectSelected = e.target;
        const btnAction = projectSelected.dataset.icon;
        const projectIndex = projectSelected.dataset.index;
        const projectName = projectSelected.dataset.name;
        
        const modal = document.querySelector("#edit_project_dialog");
        const projectModalHandler = handleProjectModals();
        
        if (btnAction === "edit") {
            projectModalHandler.editModalInfo(projectName, projectIndex);
            modal.showModal();
        } else if (btnAction === "delete") {
            projectModalHandler.deleteModalInfo(projectName, projectIndex);
            modal.showModal(); 
        }
    }

    // Function to check what is the Current Project Modal Open
    function checkProjectModalInUsed() {
        const projectModalMainTitle = document.querySelector("#edit_project_dialog_main_title").dataset.name;
        const projectIndex = document.querySelector("#edit_project_title").dataset.projectId;
        const projectName = document.querySelector("#edit_project_title").dataset.projectName;
        if (projectModalMainTitle == "edit") {
            editBtn(projectIndex, projectName)
        } else if (projectModalMainTitle == "delete") {
            delBtn(projectIndex, projectName);
        }
    }
    return { checkButtonPressed, checkProjectModalInUsed }
}


function editBtn(index, oldProjectName) {
    const newProjectName = document.querySelector("#edit_project_title").value;
    editProject(findProject(index), newProjectName);
    modifyTaskProject(findTask(oldProjectName), newProjectName);
}

function editProject(projectIndex, newProjectName) {
    projectsList[projectIndex].name = newProjectName;
    resetProjectList();
    returnToMainPage();
}

function modifyTaskProject(filter, newProjectName) {
    filter.forEach(task => task.project = newProjectName)
}

function delBtn(index, name) {
    const projectNameConfirm = document.querySelector("#edit_project_title").value
    if (projectNameConfirm == "DELETE") {
        deleteProject(findProject(index));
        unassignTaskProject(findTask(name));
    } else {
        alert("Type DELETE to confirm.");
    }
}

function deleteProject(projectIndex) {
    projectsList.splice(projectIndex, 1);
    // Reset Projects
    resetProjectList();
    returnToMainPage();
}

function unassignTaskProject(filter)  {
    return filter.forEach(task => task.project = "No Project Folder Assigned")
}

function findProject(pIndex) {
    return projectsList.findIndex(project => project.index === pIndex);
}

function findTask(pName) {
    return tasksList.filter((task => task.project == pName))    
}

function resetProjectList() {
    reAssignIndex(projectsList);
    // Clear existing projects
    clearProjectSection();
    projectsList.forEach(project => {
        createProjectDOM(project.index, project.name);
    });
}

function returnToMainPage() {
    changeCurrentTitle("All Tasks");
    clearMainSectionContent();
    checkCurrentTaskSectionTitle();
}
;// CONCATENATED MODULE: ./src/scripts/DOM/showTasksinProject.js




// Function to show in the DOM the Tasks that are linked to a Project Folder.
function showTasksInProject(e) {
    if (e.target.dataset.type == "Project Container") {
        const currentProject = e.target.dataset.title;
        changeCurrentTitle(currentProject);
        clearMainSectionContent();
        filterProjects(currentProject);
    }
}
;// CONCATENATED MODULE: ./src/scripts/DOM/projectBtnsHandler.js






// Function to apply the Project changes requested depending on the button pressed.
function projectBtnsHandler() {

    const projectBtns = manageProjectBtns();
    const modal = document.querySelector("#edit_project_dialog");
    const projectModalHandler = handleProjectModals();
    const newProjectInput = document.querySelector("#edit_project_title");

    document.addEventListener("DOMContentLoaded", function() {
        const projectListSection = document.querySelector("#left_side_navbar_second_project_list");

        projectListSection.addEventListener("click", e => {
            // Open the Modal depending on the button pressed.
            projectBtns.checkButtonPressed(e);
            showTasksInProject(e);
        });
    });

    // Apply the action and close the modal when the Edit/Delete Button is pressed.
    document.querySelector("#edit_project_create_btn").addEventListener("click", () => {
        if (newProjectInput.value.trim() !== "" ) {
            // Depending on the Modal used, the action will be applied.
            projectBtns.checkProjectModalInUsed();
            modal.close();
            projectModalHandler.clearModalValues();
            // Recreate all Keys in the Local Storage
            modifyDataInLocalStorage().recreateAllKeys();
        } else {
            alert("Please enter a valid Value");
        }
    });
    // Allow the user to close the Modal when clicking outside it.
    document.querySelector("#edit_project_dialog").addEventListener("click", (e) => {
        clickingOutsideModals().closeModal(e, modal);
    })
}
;// CONCATENATED MODULE: ./src/scripts/DOM/handleTaskModals.js


// Function to edit the Tasks Modal Information depending on the button pressed.
function handleTaskModals() {

    function editTaskModalInfo(taskName, taskindex) {
        const editTaskModalMainTitle = document.querySelector("#edit_task_dialog_main_title");
        const editTaskModalBtn = document.querySelector("#edit_task_btn");
        const taskInArray =  tasksList[findTaskIndex(taskindex)];

        const currenTaskValues = {
            name: taskInArray.name,
            description: taskInArray.description,
            project: taskInArray.project,
            dueDate: taskInArray.dueDate,
            priority: taskInArray.priority
        }
        const editModalValues = {
            name: document.querySelector("#edit_task_name"),
            description: document.querySelector("#edit_task_description"),
            project: document.querySelector("#edit_task_project"),
            dueDate: document.querySelector("#edit_task_due_date"),
            priority: document.querySelector("#edit_task_priority")
        };

        editTaskModalMainTitle.textContent = "Edit Task " + `"` + taskName + `"`;
        editTaskModalBtn.dataset.index = taskindex;

        // Show the current Task Value to make the edit process easier.
        editModalValues.name.value = currenTaskValues.name;
        editModalValues.description.value = currenTaskValues.description;
        editModalValues.project.value = currenTaskValues.project;
        editModalValues.dueDate.value = currenTaskValues.dueDate;
        editModalValues.priority.value = currenTaskValues.priority;
    }
    
    function deleteTaskModalInfo(taskName, taskindex) {
        const deleteTaskModalMainTitle = document.querySelector("#delete_task_dialog_main_title");
        const confirmName = document.querySelector("#delete_task_name");
        const confirmDeleteButton = document.querySelector("#delete_task_btn");

        deleteTaskModalMainTitle.textContent = "Do you want to delete " + `"` + taskName + `"` + "?";
        confirmName.textContent = "Confirm the delete: ";
        confirmDeleteButton.textContent = "Delete Task";
        confirmDeleteButton.dataset.index = taskindex;
    }

    function infoTaskModalInfo(task) {
        const infoTaskModal = document.querySelector("#info_task_dialog_main_title");

        const infoTaskValues = {
            name: document.querySelector("#task_info_dialog_task_name"),
            description: document.querySelector("#task_info_dialog_task_description"),
            project: document.querySelector("#task_info_dialog_task_project"),
            dueDate: document.querySelector("#task_info_dialog_task_due_date"),
            priority: document.querySelector("#task_info_dialog_task_priority"),
            status: document.querySelector("#task_info_dialog_task_status")
        };

        infoTaskModal.textContent = task.name;
        
        infoTaskValues.name.textContent = task.name;
        infoTaskValues.description.textContent = task.description;
        infoTaskValues.project.textContent = task.project;
        // Change the Date Format in the Modal Information 
        infoTaskValues.dueDate.textContent = changeDateFormat(task.dueDate);
        infoTaskValues.priority.textContent = task.priority;
        // Change the Task Status Name in the Modal Information 
        infoTaskValues.status.textContent = checkTaskStatus(task.completed);
    }

    function clearEditModalInfo() {
        
        const editTaskModalValues = {
            name: document.querySelector("#edit_task_name"),
            description: document.querySelector("#edit_task_description"),
            project: document.querySelector("#edit_task_project"),
            dueDate: document.querySelector("#edit_task_due_date"),
            priority: document.querySelector("#edit_task_priority"),
        }

        editTaskModalValues.name.value = "";
        editTaskModalValues.description.value = "";
        editTaskModalValues.project.value = "";
        editTaskModalValues.dueDate.value = "";
        editTaskModalValues.priority.value= "default";
    }

    function clearDeleteModalInfo() {
        const confirmDeleteInput = document.querySelector("#delete_task_input");
        confirmDeleteInput.value = "";
    }

    return { deleteTaskModalInfo, editTaskModalInfo, clearEditModalInfo, clearDeleteModalInfo, infoTaskModalInfo }
}

function checkTaskStatus(status) {
    if (status) {
        return "Completed"
    } else {
        return "Pending"
    }
}

// Change the Date format to show a more user-friendly Date.
function changeDateFormat(date) {
    return new Date(date).toDateString();
}

function findTaskIndex(tIndex) {
    return tasksList.findIndex(task => task.index === tIndex);
}
;// CONCATENATED MODULE: ./src/scripts/Features/manageTaskBtns.js








// Function to apply the Task Change depending on the button pressed.
function manageTaskBtns() {

    const taskModals = handleTaskModals();
    const taskStatus = taskCompleteStatus();

    function checkTaskButtonPressed(e) {

        const taskSelected = e.target;
        const btnAction = taskSelected.dataset.icon;
        const taskName = taskSelected.dataset.name;
        const taskIndex = taskSelected.dataset.index;
        
        const editModal = document.querySelector("#edit_task_dialog");
        const deleteModal = document.querySelector("#delete_task_dialog");
        const infoTaskModal = document.querySelector("#task_info_dialog");
        
        if (btnAction === "edit") {
            // Show Available Projects in Edit Task Modal
            showProjectsAvailable("#edit_task_project");
            taskModals.editTaskModalInfo(taskName, taskIndex);
            editModal.showModal();
        } else if (btnAction === "delete") {
            taskModals.deleteTaskModalInfo(taskName, taskIndex);
            deleteModal.showModal();
        } else if (btnAction === "info") {
            const task = findTaskInfo(taskIndex);
            taskModals.infoTaskModalInfo(task);
            infoTaskModal.showModal();
        } else if (btnAction === "checkbox") {
            const task = findTaskInfo(taskIndex);
            taskStatus.changeTaskStatus(task);
            // Recreate all Keys in the Local Storage
            modifyDataInLocalStorage().recreateAllKeys();
            clearMainSectionContent();
            checkCurrentTaskSectionTitle();
        }
    }

    function editTaskBtn(e) {

        const taskSelected = e.target;
        const taskIndex = taskSelected.dataset.index;
    
        const taskInArray =  tasksList[manageTaskBtns_findTaskIndex(taskIndex)];
    
        const newTaskValues = {
            name: document.querySelector("#edit_task_name"),
            description: document.querySelector("#edit_task_description"),
            project: document.querySelector("#edit_task_project"),
            dueDate: document.querySelector("#edit_task_due_date"),
            priority: document.querySelector("#edit_task_priority")
        };

        function rejectBlankValues() {
            for (let key in newTaskValues) {
                if (newTaskValues[key].value.trim() === "" || 
                    newTaskValues[key].value.trim() === "default") {
                    alert(`The ${key} field cannot be blank.`);
                    return false;
                }
            }
            return true;
        }

        if (!rejectBlankValues()) {
            return
        }
    
        taskInArray.name = newTaskValues.name.value;
        taskInArray.description = newTaskValues.description.value;
        taskInArray.project = newTaskValues.project.value;
        taskInArray.dueDate = newTaskValues.dueDate.value;
        taskInArray.priority = newTaskValues.priority.value;
    }

    function deleteTaskBtn(e) {
        const taskSelected = e.target;
        const taskIndex = taskSelected.dataset.index;

        const confirmDeleteInput = document.querySelector("#delete_task_input");

        if (confirmDeleteInput.value == "DELETE") {
            tasksList.splice(manageTaskBtns_findTaskIndex(taskIndex), 1);
            // Recreate all Keys in the Local Storage
            modifyDataInLocalStorage().recreateAllKeys();
        } else {
            alert("Type DELETE to confirm.");
        }
    }

    return { checkTaskButtonPressed, editTaskBtn, deleteTaskBtn }
}

function manageTaskBtns_findTaskIndex(tIndex) {
    return tasksList.findIndex(task => task.index === tIndex);
}

function findTaskInfo(taskIndex) {
    return tasksList.find(task => task.index === taskIndex);
}

;// CONCATENATED MODULE: ./src/scripts/DOM/taskBtnsHandler.js









// Function to apply the changes to the Task depending on the Task Button pressed.
function taskBtnsHandler() {

    const taskBtns = manageTaskBtns();

    const editTaskModal = document.querySelector("#edit_task_dialog");
    const deleteTaskModal = document.querySelector("#delete_task_dialog");
    const infoTaskModal = document.querySelector("#task_info_dialog");

    document.addEventListener("DOMContentLoaded", function() {
        const taskListSection = document.querySelector("#main_content_section_task_list_container");
        taskListSection.addEventListener("click", e => {
            // Open the Modal depending on which button was pressed
            taskBtns.checkTaskButtonPressed(e);
        });
    });

    // Apply the action and close the modal when the Edit Button is pressed
    document.querySelector("#edit_task_btn").addEventListener("click", (e) => {
        e.preventDefault();
        taskBtns.editTaskBtn(e);
        reAssignIndex(tasksList);
        // Recreate all Keys in the Local Storage
        modifyDataInLocalStorage().recreateAllKeys();
        // Close and clear the Modal
        editTaskModal.close();
        handleTaskModals().clearEditModalInfo();
        // Recreate Tasks
        clearMainSectionContent();
        checkCurrentTaskSectionTitle();
    });

    // Apply the action and close the modal when the Delete Button is pressed
    document.querySelector("#delete_task_btn").addEventListener("click", (e) => {
        e.preventDefault();
        taskBtns.deleteTaskBtn(e);
        reAssignIndex(tasksList);
        // Recreate all Keys in the Local Storage
        modifyDataInLocalStorage().recreateAllKeys();
        // Close and clear the Modal
        deleteTaskModal.close();
        handleTaskModals().clearDeleteModalInfo();
        // Recreate Tasks
        clearMainSectionContent();
        checkCurrentTaskSectionTitle();
    });

    // Apply the action and close the modal when the Info Button is pressed
    document.querySelector("#info_task_btn").addEventListener("click", (e) => {
        infoTaskModal.close();
    });


    // Allow the user to close the Modal when clicking outside it.
    editTaskModal.addEventListener("click", (e) => {
        clickingOutsideModals().closeModal(e, editTaskModal);
    })
    deleteTaskModal.addEventListener("click", (e) => {
        clickingOutsideModals().closeModal(e, deleteTaskModal);
    })
    infoTaskModal.addEventListener("click", (e) => {
        clickingOutsideModals().closeModal(e, infoTaskModal);
    })
}
;// CONCATENATED MODULE: ./src/scripts/Features/manageMobileViewSidebar.js

// Function to Show or Close the Sidebar for Mobile View.
function manageMobileViewSidebar() {

    const sidebarCheckbox = document.querySelector("#show_navbar_checkbox");

    sidebarCheckbox.addEventListener("click", () => {
        checkCheckboxStatus(sidebarCheckbox);
    });
}

function checkCheckboxStatus(checkbox) {
    const navBarSection = document.querySelector("#left_side_navbar_section");

    if (checkbox.checked) {
        navBarSection.classList.remove("sidebar_clicked_closed")
        navBarSection.classList.add("sidebar_clicked_open")
    } else {
        navBarSection.classList.remove("sidebar_clicked_open")
        navBarSection.classList.add("sidebar_clicked_closed")
    }
}
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(72);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(825);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(659);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(56);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(540);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(113);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/style.css
var style = __webpack_require__(24);
;// CONCATENATED MODULE: ./src/style.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(style/* default */.A, options);




       /* harmony default export */ const src_style = (style/* default */.A && style/* default */.A.locals ? style/* default */.A.locals : undefined);

;// CONCATENATED MODULE: ./src/index.js
// JS Modules








// CSS Files



// Lists Container
const tasksList = [];
const projectsList = [];

// Create a New Task
const newTaskElement = (/* unused pure expression or super */ null && (newTask));

// Edit/Delete/Info an Existing Task
const taskBtns = taskBtnsHandler();

// Create a New Project
const newProjectElement = (/* unused pure expression or super */ null && (newProject));

// Edit/Delete an Existing Project
const projectBtns = projectBtnsHandler();

// Function to Show the Content Selected
const changeTasksDOMContent = replaceTasksContent();

// Function to show or Hide the Sidebar for Mobile View
const showSidebar = manageMobileViewSidebar();

// Show All Stored Tasks in the Array when the Webpage loads
const loadWebpage = webpageLoads();

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(926));
/******/ }
]);
//# sourceMappingURL=app.bundle.js.map