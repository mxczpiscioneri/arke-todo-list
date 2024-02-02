describe("To-Do List App E2E Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.clearLocalStorage();
  });

  it("list add check and delete tasks", () => {
    // list
    cy.get('[data-testid="task-item"]').should("not.exist");

    // add
    const tasks = ["Task 1", "Task 2", "Task 3"];
    tasks.forEach((task) => {
      cy.get('[data-testid="input"]').type(`${task}{enter}`);
      cy.wait(500);
    });
    cy.get('[data-testid="task-item"]').should("have.length", 3);

    // check
    cy.get('[data-testid="task-item"]')
      .first()
      .find('input[type="checkbox"]')
      .click();
    cy.wait(500);
    cy.get('[data-testid="task-item"]')
      .first()
      .find('input[type="checkbox"]')
      .should("be.checked");

    // delete tasks
    cy.get('[data-testid="task-item"]').each(($el, index, $list) => {
      cy.get('[data-testid="delete-task"]').first().click();
      cy.wait(500);
    });
    cy.get('[data-testid="task-item"]').should("not.exist");
  });
});
