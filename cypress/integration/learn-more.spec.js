const url = '/';

describe('Learn More', () => {
  beforeEach(() => {
    cy.visit(url);
  });

  it('clicking on button should scroll page to profile section', () => {
    cy.get('[data-e2e="learn-more-btn"]')
      .click();

    cy.get('#profile')
      .should('be.visible');
  });
});