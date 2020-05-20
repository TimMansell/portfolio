const url = '/';

describe('App', () => {
  beforeEach(() => {
    cy.visit(url);
  });

  it('matches desktop snapshot', () => {
    cy.checkDesktopSnapshot();
  });

  it('matches mobile snapshot', () => {
    cy.checkMobileSnapshot();
  });
});
