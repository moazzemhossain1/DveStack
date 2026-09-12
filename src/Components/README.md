# 🚀 Dev Stack

Dev Stack is a modern web application that helps developers explore different technologies and build their ideal development stack. Users can browse technologies, compare options, and create a personalized stack for their projects.

## 📖 Description

Choosing the right technologies for a project can be challenging. Dev Stack simplifies this process by providing an organized collection of frontend, backend, database, and tooling technologies. Users can add technologies to their custom stack and manage them easily through an interactive interface.

## 🛠️ Technologies Used

* React
* TypeScript
* Tailwind CSS
* DaisyUI
* React Toastify
* React Icons
* Vite

## ✨ Features

### 1. Technology Explorer

Browse a collection of technologies with detailed information, ratings, categories, and difficulty levels.

### 2. Custom Stack Builder

Add technologies to your personal development stack and manage them with a clean and interactive UI.

### 3. Smart Selection Management

Prevent duplicate selections, display selected technologies instantly, and remove individual or all technologies with toast notifications.

## 🎨 UI Highlights

* Responsive design for mobile, tablet, and desktop
* Modern gradient-based interface
* Sticky navigation and stack panel
* Interactive cards with hover effects
* Beautiful toast notifications

## 🚀 Future Improvements

* User authentication
* Save stacks to database
* Search and filter technologies
* Dark mode support
* Share stack with others

## 📄 License

This project is created for learning and portfolio purposes.







## React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX stands for JavaScript XML. It allows us to write HTML-like code inside JavaScript. JSX makes React components easier to read and write because the UI structure looks similar to HTML.

### 2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component. Props are read-only and cannot be changed by the child.

State is used to store data inside a component. State can change over time, and when it changes, React re-renders the component.

### 3. What does the `useState` hook do, and where did you use it in this project?

The `useState` hook is used to create and manage state in a React component.

In this project, I used `useState` to:

* Store the selected technologies.
* Count the number of selected technologies.
* Update the UI when technologies are added or removed from the stack.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

The `useEffect` hook is used to perform side effects such as fetching data, updating the DOM, or running code after a component renders.

It can be used to load JSON data when the component is mounted so that the technology information is available for display. In this project, the technology data is loaded from a JSON file and then displayed on the page.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React identify which items have changed, been added, or removed.

Without a unique key, React may update the UI incorrectly or less efficiently.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition.

Example from this project:

When no technology is selected, the application shows:

**"No Technology Selected"**

When technologies are selected, the selected technology cards are displayed instead.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

Data is passed from a parent component to a child component through props.

A child component can send data back to the parent by calling a function that is passed down as a prop from the parent.

In this project, `setnumber` and `setiselected` were passed as props so child components could update the parent's state.

