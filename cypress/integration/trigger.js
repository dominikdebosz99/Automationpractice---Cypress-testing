/// <reference types="cypress"/>

describe("E2E - Skrollowanie/Najecanie", () => {
    it("Najechanie na dany element", () => {
        cy.visit('http://automationpractice.pl/')
        cy.get('a[title="Dresses"]').eq(1).trigger("focus")
        cy.get('li.sfHover a[title="Dresses"]').click();
    })

    it("Scrollowanie do boxa specials", () => {
        cy.get('a[title="Specials"]').first().scrollIntoView();
      })
})