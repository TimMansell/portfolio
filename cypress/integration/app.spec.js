const url = '/';

describe('App', () => {
  beforeEach(() => {
    cy.visit(url);
  });

  it.skip('throws no accessibility errors', () => {
    cy.injectAxe();

    cy.checkA11y();
  });
});
