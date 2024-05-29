describe('Swiper Gallery Test', function () {
  it('Checks if second slide contains "United Kingdom"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if third slide contains "Paris"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });

  it('Allows user to navigate via buttons', () => {
    cy.visit('http://localhost:3000');

    cy.get('.swiper-slide-active').should('contain', 'Rome');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('not.contain', 'Rome');
    cy.get('.swiper-button-prev').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Rome');
  })

  it('Correctly displays titles and subtitles', () => {
    cy.visit('http://localhost:3000');

    [
      ['Rome', 'Italy'],
      ['London', 'United Kingdom'],
      ['Paris', 'France'],
    ].forEach(([capital, country]) => {
      cy.get('.swiper-slide-active').should('contain', capital);
      cy.get('.swiper-slide-active').should('contain', country);
      cy.get('.swiper-button-next').click();
      cy.wait(2000);
    })
  })

  it('Works on a tablet', () => {
    cy.visit('http://localhost:3000');
    cy.viewport('ipad-2');

    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'London');
    cy.get('.swiper-wrapper').should('have.css', 'width', '384px');
  })

  it('Works on a phone', () => {
    cy.visit('http://localhost:3000');
    cy.viewport('iphone-x');

    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'London');
    cy.get('.swiper-wrapper').should('have.css', 'width', '280px');
  })

  it('Correctly displays all of the elements', () => {
    cy.visit('http://localhost:3000');

    cy.get('.swiper-wrapper').should('be.visible');
    cy.get('.swiper-button-next').should('be.visible');
    cy.get('.swiper-button-prev').should('be.visible');

    [
      ['Rome', 'Italy'],
      ['London', 'United Kingdom'],
      ['Paris', 'France'],
    ].forEach(([capital, country]) => {
      cy.get('.swiper-slide-active').should('contain', capital);
      cy.get('.swiper-slide-active').should('contain', country);
      cy.get('.swiper-button-next').click();
      cy.wait(2000);
    })
  })
});
