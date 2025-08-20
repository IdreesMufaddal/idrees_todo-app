# To‑Do Application

This project is a simple to‑do application built with React, Context API, and Tailwind CSS. It allows a user to log in with a name, then create, update, delete, and search tasks. In this UI‑enhanced branch, tasks also support optional due dates, times, notes, priority levels and list categorization.

## Features

- **Login** – a basic login form that asks for your name before accessing the main application.
- **Add tasks** – create new daily tasks with a title, optional due date and time, notes, priority and list assignment.
- **Update tasks** – edit an existing task’s title; other details can be updated programmatically.
- **Delete tasks** – remove tasks you no longer need.
- **Search tasks** – filter tasks by typing into the search bar.
- **Categorize tasks** – assign tasks to built‑in lists (Home, Personal, Work, Diet, List of Book, Road trip list) or create your own lists on the fly.
- **Priority & notes** – set a priority level (0–5) and attach free‑form notes to each task.
- **State management** – uses React’s Context API to manage user information, task list, lists array and search term across the app.
- **Tailwind CSS** – styled with Tailwind for a clean, responsive interface.

## File Structure

```
idrees_todo-app/
├── README.md
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── src/
    ├── index.js
    ├── index.css
    ├── App.js
    ├── contexts/
    │   └── TaskContext.js
    └── components/
        ├── Login.js
        ├── TaskForm.js
        ├── TaskList.js
        ├── SearchBar.js
        └── TaskPage.js
```

- **package.json** defines the project dependencies and scripts.
- **tailwind.config.js** and **postcss.config.js** configure Tailwind CSS.
- **src/index.js** is the entry point that renders the app.
- **src/App.js** sets up context and determines whether to show the login or task pages.
- **src/contexts/TaskContext.js** provides global state and actions via React’s Context API.
- **src/components/** contains presentational and stateful components for the login form, task input, task list, search bar, and page layout.
- **src/index.css** imports Tailwind’s base, component, and utility styles.

## Getting Started

After cloning the repository, install the dependencies and start the development server:

```bash
npm install
npm start
```

The app will be available at `http://localhost:3000`.
