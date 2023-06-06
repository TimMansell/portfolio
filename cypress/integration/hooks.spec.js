const url = '/';

describe('Reacts Hooks', () => {
  beforeEach(() => {
    cy.visit(url);
  });

  it('useScrollFade', () => {
    cy.get('[data-e2e="fading-content"]').should('have.css', 'opacity', '1');

    cy.scrollTo(0, 200);

    cy.get('[data-e2e="fading-content"]').should('have.css', 'opacity', '0.65');
  });

  it('useScrollBlur', () => {
    cy.get('[data-e2e="hero-overlay"]').should(
      'have.css',
      'backdrop-filter',
      'blur(0px)'
    );

    cy.scrollTo(0, 200);

    cy.get('[data-e2e="hero-overlay"]').should(
      'have.css',
      'backdrop-filter',
      'blur(3px)'
    );
  });

  it('useIntersectionObserver', () => {
    cy.get('[data-e2e="stats-starting-count"]').should('exist');

    cy.get('#stats').scrollIntoView();

    cy.get('[data-e2e="stats-starting-count"]').should('not.exist');
  });
});
