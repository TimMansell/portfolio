const url = '/';

describe('App', () => {
  beforeEach(() => {
    cy.visit(url);
  });

  if (!Cypress.env('GUI')) {
    it('matches desktop snapshot', () => {
      cy.checkDesktopSnapshot();
    });

    it('matches mobile snapshot', () => {
      cy.checkMobileSnapshot();
    });
  }

  it('throws no accessibility errors', () => {
    cy.injectAxe();

    cy.checkA11y();
  });
});
