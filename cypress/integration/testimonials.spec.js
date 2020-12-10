const url = '/';

describe('Testimonials', () => {
  beforeEach(() => {
    cy.visit(url);
  });

  it('should automatically scroll to second slide', () => {
    cy.get('[data-e2e="navigation-testimonials"]').click();
    cy.get('[data-e2e="testimonials"]').should('be.visible');

    // Wait 8 seconds for second slide to appear.
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(8000);

    cy.get('[data-e2e="testimonial-slide-1"]').should('be.visible');
  });
});
