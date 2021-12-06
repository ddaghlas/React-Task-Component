# React Tasks

## Description

As a part of a live-coding interview, I was given beginning code for a React Component, where a function to map over an unordered list of tasks was required to be finished. 

Here is the starting code:
```
function App() {
    // state == input => 'string' tasks => []
}

return (
    <div>
      <h1>Tasks</h1>
      <ul>
        {tasks.map((task, i) => (
          <li key={i}>{task}</li>
        ))}
      </ul>
      <div>
        <input onChange={handleChange} value={} />
        <button onClick={addTask}>Add Task</button>
      </div>
    </div>
);
```


## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Animations](#animations)
  * [License](#license)

# Installation

Use `create-react-app` to build the application:

* Modify the App.js file to create the components needed to render a Task header, text input field that allows the user to input a task name, hit the ENTER key, and save to their local device. 


# Usage

- A code fragment of JSX, meant to map over the tasks array, utilizing `useState`, then displaying the unordered list of tasks for the user. The code also includes an `onclick` button, meant to give the user the ability to add another task to the array. Although the button was created, the code allows for the addition of a single task input using the ENTER key.
- The user is able (in the VirtualDOM) to input text or string values, and click ENTER to add the new task to the array. 


# Animations
![Recorded React Task Coding Video](images/taskBrowser.gif)


# License
Copyright 2021 Diana L. Daghlas