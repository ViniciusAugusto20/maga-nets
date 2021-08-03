/// <reference types="cypress" />

describe("Products", () => {

  beforeEach(() => {
   
  });

  // This test can be return a false negative value, because any time we return 
  // a random this value can be not exists or in execution time they generate a 
  // different both values. If this is ocorred, please run all tests again.
  const randomItemAddRemoveOnHome = Math.floor(Math.random() * 10)
  beforeEach(() => cy.visit(`${Cypress.config('baseUrl')}`));
  it("add randon item (1 at 10) on Wishlist", () => {
   cy.get(`#qa-add-item-${randomItemAddRemoveOnHome}`).click()
  });
   it("remove created randon item on Wishlist", () => {
   cy.get(`#qa-add-item-${randomItemAddRemoveOnHome}`).click()
  });

  // This test can be return a false negative value, because any time we return 
  // a random this value can be not exists or in execution time they generate a 
  // different both values. If this is ocorred, please run all tests again.
  const randomItemAddOnHomeAndRemoveOnWishlist= Math.floor(Math.random() * 10)
  it("add randon item on Home and remove on Wishlist", () => {
    cy.get(`#qa-add-item-${randomItemAddOnHomeAndRemoveOnWishlist}`).click()
    cy.visit(`${Cypress.config('baseUrl')}wishlist`)
    cy.get(`#qa-remove-item-${randomItemAddOnHomeAndRemoveOnWishlist}`).click()
   });

   it("visit Whislist and back to Home", () => {
    cy.get(`#qa-button-wishlist`).click({force: true})
    cy.visit(`${Cypress.config('baseUrl')}wishlist`)
    cy.get(`#qa-button-home`).click({force: true})
   });


   it("write `Camisa` and click on first result and back to home", () => {
    cy.get(`#qa-search`).click()
    cy.get(`#qa-search`).type("Camisa");
    cy.get(`#qa-find-search-0`).click()
    cy.get(`#qa-button-home`).click({force: true})
   });
});
