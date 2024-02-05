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

## Atomic Design Methodology

The Arke To-Do List application adopts the Atomic Design methodology to organize its UI components. This approach allows us to manage the complexity of the UI in a scalable and maintainable way, ensuring consistency across the application.

### Key Decisions

- **Atoms:** The smallest building blocks of our UI, such as buttons, input fields, and checkboxes, are designed to be reusable and serve as the foundation for more complex components. For example, our Button and Input components are used extensively throughout the application.
- **Molecules:** Combinations of atoms that perform a specific function. The TaskItem component, which includes a checkbox (atom) and a label (atom), is an example of a molecule that represents a single to-do item.
- **Organisms:** More complex UI components that group molecules and atoms into functional sections. The TaskList component, which displays a list of TaskItem molecules, is an example of an organism.
- **Templates and Pages:** Templates define the layout of pages by arranging organisms and molecules, while pages are instances of templates with real content. Our application uses a MainLayout template to provide a consistent structure for different pages.

### Additional Considerations

Reusability and Composition: By adhering to the Atomic Design principles, we've ensured that UI components are highly reusable and easily composed into more complex structures. This reduces duplication and improves the overall development velocity.

### Testing

The Atomic Design approach also facilitates more effective testing. We can test atoms and molecules in isolation, ensuring their functionality before integrating them into more complex organisms and templates. This aligns with our focus on maintaining high software quality through comprehensive testing strategies.

### Styling Consistency

Tailwind CSS is used in conjunction with Atomic Design to ensure visual consistency and rapid styling across components. The utility-first approach of Tailwind complements the composability of Atomic Design, allowing us to apply consistent styling at the atom and molecule levels and propagate it through the application.

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
