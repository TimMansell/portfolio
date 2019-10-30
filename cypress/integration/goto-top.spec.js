const url = '/';

describe('Goto Top', () => {
  beforeEach(() => {
    cy.visit(url);
  });

  it('goto top button should show', () => {
    cy.scrollTo('bottom');

    cy.get('[data-e2e="goto-top-btn"]')
      .should('be.visible');
  });

  it('clicking on goto top button should scroll to intro section', () => {
    cy.scrollTo('bottom');

    cy.get('[data-e2e="goto-top-btn"]')
      .click();

    cy.get('#intro')
      .should('be.visible');
  });
});
