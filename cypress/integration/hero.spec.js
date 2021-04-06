const url = '/';

describe('Hero', () => {
  beforeEach(() => {
    cy.visit(url);
  });

  it('Hero image should transition after x seconds (x is grabbed from data-timer)', () => {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(1000);

    cy.get('[data-e2e="hero-img"]').within(($hero) => {
      const timer = parseInt($hero.attr('data-timer'), 10);

      cy.get('[data-e2e="picture-img"]')
        .eq(0)
        .then(($picture) => {
          const firstHeroImage = $picture.attr('src');

          // eslint-disable-next-line cypress/no-unnecessary-waiting
          cy.wait(timer);

          cy.get('[data-e2e="picture-img"]')
            .eq(0)
            .then(($picture2) => {
              const secondHeroImage = $picture2.attr('src');

              expect(firstHeroImage).not.equal(secondHeroImage);
            });
        });
    });
  });
});
