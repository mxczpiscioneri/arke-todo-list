# Arke To-Do List

**Arke To-Do List** web application for managing daily tasks.

## Technologies Used

This project is built using a modern stack of JavaScript/TypeScript technologies, ensuring an agile development experience and a performant application:

- **[Next.js](https://nextjs.org/)**: A React framework for production.
- **[React and React DOM](https://reactjs.org/)**: For building the user interface.
- **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework for rapid and responsive design.
- **[TypeScript](https://www.typescriptlang.org/)**: A JavaScript superset for static typing.
- **[Jest](https://jestjs.io/)**: A JavaScript testing framework used for unit testing.
- **[Cypress](https://www.cypress.io/)**: An end-to-end testing tool for web applications.
- **[ESLint](https://eslint.org/)**: A code analysis tool for identifying problematic patterns in JavaScript code.
- **[Testing Library](https://testing-library.com/)**: Utilities for testing React components more effectively.

## Focus on Testing

Software quality is ensured through a comprehensive suite of tests, including unit tests and end-to-end (E2E) tests:

### Unit Tests

- Using **Jest** and **Testing Library**, application components are rigorously tested to ensure they behave as expected under various conditions.
- To run the unit tests, use the command `npm run test` or `yarn test`.

### E2E Tests

- **Cypress** is used to simulate user interactions with the application in a real browser, ensuring the user flow works from end to end.
- To run the E2E tests, first start the application in development mode using `npm run dev` or `yarn dev`. Then, execute the E2E tests with `yarn test:e2e-open` to open the Cypress UI, or `yarn test:e2e-run` for headless execution.

## CI/CD Configuration with Vercel

The **Arke To-Do List** application leverages Continuous Integration (CI) and Continuous Deployment (CD) through Vercel, ensuring that every commit is automatically built, tested, and deployed to production. This workflow provides an efficient and automated way to maintain high-quality software.

### How It Works:

- **Continuous Integration**: Every pull request triggers an automated build and test process, running both unit and E2E tests. This ensures that all changes meet our quality standards before merging.

- **Continuous Deployment**: Upon merging a pull request into the main branch, Vercel automatically deploys the latest changes to production, making the updated application available to users without any manual intervention.

View the live application here: [Arke To-Do List on Vercel](https://arke-todo-list.vercel.app/).

## Getting Started

To run the project locally, follow the steps below:

1. Clone the repository and enter the project directory:
   ```bash
   git clone [arke-todo-list](https://github.com/mxczpiscioneri/arke-todo-list)
   cd arke-todo-list
   ```

````

2. Install the dependencies:
```bash
  npm install
  # or
  yarn install
````

3. Start the development server:

```bash
  npm run dev
  # or
  yarn dev
```

The application will be available at http://localhost:3000.

## Contributing

Contributions are always welcome! Feel free to open issues or submit pull requests to help improve the application.
