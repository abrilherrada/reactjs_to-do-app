# React To-Do App

This project is a simple to-do application built with React and Vite, providing users with the ability to manage their daily tasks efficiently.

## Features

- **Add tasks:** Users can add new tasks to their to-do list.
- **Delete tasks:** Users can remove tasks from their list when they are no longer needed.
- **Mark tasks as done:** Users can mark tasks as done. Done tasks are moved to the bottom section of the app, allowing users to focus on pending tasks while keeping track of completed ones.
- **Reorder tasks:** Users can change the order of their tasks to prioritize them as needed.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

```[bash]
git clone https://github.com/abrilherrada/reactjs_to-do-app.git
```

2. Navigate to the project directory:

```[bash]
cd reactjs_to-do-app
```

3. Install dependencies:

```[bash]
npm install
```

## Usage

After completing the installation steps, you can run the project locally:

1.Start the development server:

```[bash]
npm run dev
```

2. Access the application: Open your browser and navigate to the `localhost` address provided in the terminal to view the app in action.

## Project Structure

The project comprises the following key components:

- **Container.jsx:** The main component that serves as the entry point for the app. It manages the overall state for tasks, including pending and completed tasks, and provides this state to child components via context.
- **NewTask.jsx:** A component that provides a text input and button for adding new tasks to the to-do list.
- **Tasks.jsx:** A component that displays pending and completed tasks. It allows users to reorder tasks, delete tasks, and mark tasks as completed.

## Dependencies

The project relies on the following major dependencies:

- **React:** A JavaScript library for building user interfaces.
- **Vite:** A fast build tool and development server.

For a complete list of dependencies, refer to the `package.json` file.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

This project is licensed under the MIT License.
