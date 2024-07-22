<h1>
    Advanced Application of JavaScript
</h1>
<img src="assets/img.jpg" alt="JavaScript">
<p>
    Welcome to the “Advanced Application of JavaScript” project! In this project, you will build a dynamic To-Do List application that allows users to add, display, and remove tasks. This project focuses on utilizing advanced DOM manipulation techniques to interact dynamically with the webpage.

You will learn how to:
    <ul>
        <li>
            Select and manipulate DOM elements using JavaScript
        </li>
        <li>
            Attach event listeners to handle user interactions
        </li>
        <li>
            Persist data using localStorage, ensuring that tasks are saved even after the browser is closed
        </li>
    </ul>

By the end of this project, you will have a fully functional To-Do List application that demonstrates your understanding of advanced JavaScript concepts and your ability to create dynamic web applications
</p>
<h1>
    Learning Objectives
</h1>
<p>
    By the end of this project, students should be able to:
</p>
<ol>
    <li>
        <h3>
            Utilize Advanced DOM Manipulation Techniques:
        </h3>
        <ul>
            <li>
                Understand and implement DOM selection and manipulation using JavaScript
            </li>
            <li>
                Dynamically create and manipulate HTML elements based on user interactions
            </li>
        </ul>
    </li>
    <li>
        <h3>
            Implement Event Handling:
        </h3>
        <ul>
            <li>
                Attach event listeners to DOM elements to handle user interactions
            </li>
            <li>
                Manage user inputs and respond to events such as clicks and keypresses
            </li>
        </ul>
    </li>
    <li>
        <h3>
            Understand Local Storage:
        </h3>
        <ul>
            <li>
                Use localStorage to persist data across browser sessions
            </li>
            <li>
                Implement functions to save and retrieve data from localStorage
            </li>
        </ul>
    </li>
    <li>
        <h3>
            Create a Dynamic Web Application:
        </h3>
        <ul>
            <li>
                Develop a fully functional To-Do List application with the ability to add, display, and remove tasks
            </li>
            <li>
                Enhance the application to save tasks in local storage, ensuring data persistence across sessions
            </li>
        </ul>
    </li>
</ol>

<h1>
    TASKS
</h1>
<h2>
    0. Build a Dynamic To-Do List Application
</h2>
<p>
    Create a To-Do List application where users can add, display, and remove tasks.

This task focuses on utilizing advanced DOM manipulation techniques to interact dynamically with the webpage

Here is what your final output should look like

<img align="right" alt="final output" width="250" src="/assets/c1579197f656a69c8e000abeed7e6ae39f136174.gif">
</p>
<h1>
    HTML Code
</h1>
<img src="assets/Screenshot 2024-07-22 112353.png" alt="html code">

<h1>
    CSS Code
</h1>
<img src="assets/Screenshot 2024-07-22 112943.png" alt="css code">

<h1>
    Overview
</h1>
<p>
    You are tasked with developing a To-Do List application that allows users to add tasks, display them, and remove tasks. This application will utilize advanced DOM manipulation techniques.
    <h2>
        Step-by-Step Guide
    </h2>
    <ol>
        <li>
            <h3>Setup Event Listener for Page Load:</h3>
            <ul>
                At the beginning of your script, use <strong>document.addEventListener</strong> to listen for the <strong>'DOMContentLoaded'</strong> event. This ensures your JavaScript code runs after the HTML document has fully loaded. Place all your subsequent code inside the callback function of this event listener
            </ul>
        </li>
        <li>
            <h3>Select DOM Elements:</h3>
            <ul>
                <li>
                    Use <strong>document.getElementById</strong> to select the “Add Task” button and store it in a constant named <strong>addButton</strong>
                </li>
                <li>
                    Similarly, select the input field where users enter tasks (<strong>id="task-input"</strong>) and the unordered list ( <strong>id="task-list"</strong> ) that will display the tasks. Store these references in constants named <strong>taskInput</strong> and <strong>taskList</strong>, respectively.
                </li>
            </ul>
        </li>
        <li>
            <h3>
                Create the <strong>addTask</strong> Function:
            </h3>
            <ul>
                <li>
                    Define a function named <strong>addTask</strong>. This function will be responsible for adding new tasks to the list.
                </li>
                <li>
                    Inside <strong>addTask</strong>, retrieve and trim the value from the task input field. Store this value in a variable named <strong>taskText</strong>.
                </li>
                <li>
                    Check if <strong>taskText</strong> is not empty (""). If it is empty, use <strong>alert</strong> to prompt the user to enter a task.
                </li>
            </ul>
        </li>
        <li>
            <h3>
                Task Creation and Removal:
            </h3>
            <ul>
                <li>
                    Within the addTask function, if taskText is not empty:
                    <ul>
                        <li>
                            Create a new <strong>li</strong> element. Set its <strong>textContent</strong> to <strong>taskText</strong>.
                        </li>
                        <li>
                            Create a new button element for removing the task. Set its <strong>textContent</strong> to <strong>"Remove"</strong>, and give it a class name of <strong>'remove-btn'</strong>.
                        </li>
                        <li>
                            Assign an <strong>onclick</strong> event to the remove button that, when triggered, removes the <strong>li</strong> element from <strong>taskList</strong>.
                        </li>
                        <li>
                            Append the remove button to the <strong>li</strong> element, then append the <strong>li/<strong> to <strong>taskList</strong>.
                        </li>
                        <li>
                            Clear the task input field by setting <strong>taskInput.value</li>strong> to an empty
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
        <li>
            <h3>
                Attach Event Listeners:
            </h3>
            <ul>
                <li>
                    Add an event listener to <strong>addButton</strong> that calls <strong>addTask</strong> when the button is clicked.
                </li>
                <li>
                    Add an event listener to <strong>taskInput</strong> for the <strong>'keypress'</strong> event to allow tasks to be added by pressing the “Enter” key. Inside this event listener, check if <strong>event.key</strong> is equal to <strong>'Enter'</strong> before calling <strong>addTask</strong>.
                </li>
                <li>
                    <strong>Invoke the addTask function on DOMContentLoaded</strong>. - Outside <strong>addTask</strong>, add an event listener to document for the DOMContentLoaded event. Set the callback function to invoke <strong>addTask</strong>. This ensures your data fetching logic runs once the HTML document has fully loaded.
                </li>
            </ul>
        </li>
    </ol>
    <h2>
        Additional Instructions
    </h2>
    <ul>
        <li>
            <strong>Code Structure:</strong> Follow the provided code structure and naming conventions exactly as specified to ensure your solution aligns with the expected output.
        </li>
        <li>
            <strong>Comments:</strong> Include comments in your code to describe the purpose of each major step or function, as shown in the example.
        </li>
        <li>
            <strong>Testing:</strong> After completing your script, test the functionality of your To-Do List application by adding and removing tasks to ensure everything works as intended.
        </li>
    </ul>
</p>



<h2>
    1. Implement Local Storage for the To-Do List
</h2>
