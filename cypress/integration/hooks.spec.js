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

  it('useInViewport', () => {
    cy.get('[data-e2e="portfolio-items"]').within(() => {
      cy.get('[data-e2e="picture"]').should('have.length', 0);
    });

    cy.get('[data-e2e="navigation-portfolio"]').click();

    cy.get('[data-e2e="portfolio-items"]').within(() => {
      cy.get('[data-e2e="picture"]').eq(0).should('be.visible');
    });
  });

  it('useScrollBlur', () => {
    cy.get('[data-e2e="hero-img"]').should('have.css', 'filter', 'blur(0px)');

    cy.scrollTo(0, 200);

    cy.get('[data-e2e="hero-img"]').should('have.css', 'filter', 'blur(3px)');
  });
});
