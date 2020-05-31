const url = '/';

describe('Navigation', () => {
  // eslint-disable-next-line no-undef
  context('desktop resolution', () => {
    beforeEach(() => {
      cy.visit(url);
    });

    it('should be fixed to bottom of viewport ', () => {
      cy.scrollTo('bottom');

      cy.get('[data-e2e="navigation"').should('be.visible');
    });

    it('clicking on profile item should scroll page to profile section', () => {
      cy.get('[data-e2e="navigation-profile"]').click();

      cy.get('#profile').should('be.visible');
    });

    it('clicking on skills item should scroll page to skills section', () => {
      cy.get('[data-e2e="navigation-skills"]').click();

      cy.get('#skills').should('be.visible');
    });

    it('clicking on retired skills item should scroll page to retired skills section', () => {
      cy.get('[data-e2e="navigation-retired-skills"]').click();

      cy.get('#retired-skills').should('be.visible');
    });

    it('clicking on stack item should scroll page to stack section', () => {
      cy.get('[data-e2e="navigation-stack"]').click();

      cy.get('#stack').should('be.visible');
    });

    it('clicking on portfolio item should scroll page to portfolio section', () => {
      cy.get('[data-e2e="navigation-portfolio"]').click();

      cy.get('#portfolio').should('be.visible');
    });

    it('clicking on presentations item should scroll page to presentations section', () => {
      cy.get('[data-e2e="navigation-presentations"]').click();

      cy.get('#presentations').should('be.visible');
    });

    it('clicking on testimonials item should scroll page to testimonials section', () => {
      cy.get('[data-e2e="navigation-testimonials"]').click();

      cy.get('#testimonials').should('be.visible');
    });

    it('clicking on contact item should scroll page to contact section', () => {
      cy.get('[data-e2e="navigation-contact"]').click();

      cy.get('#contact').should('be.visible');
    });
  });

  // eslint-disable-next-line no-undef
  context('mobile resolution', () => {
    beforeEach(() => {
      cy.viewport('iphone-5');

      cy.visit(url);
    });

    it('hamburger menu should be visible', () => {
      cy.get('[data-e2e="hambuger"]').should('be.visible');
    });

    it('hamburger menu should open when button is clicked', () => {
      cy.get('[data-e2e="hambuger"]').click();

      cy.get('[data-e2e="navigation"]').should('be.visible');
    });

    it('clicking on skills item in hamburger menu should scroll page to skills section and close menu', () => {
      cy.get('[data-e2e="hambuger"]').click();

      cy.get('[data-e2e="navigation-skills"]').click();

      cy.get('#skills').should('be.visible');

      cy.get('[data-e2e="navigation"]').should(
        'not.have.class',
        'navigation--active'
      );
    });
  });
});
