/// <reference types="cypress"/>

describe("E2E - Akcje kliknięcia", () => {
    it("Kliknięcie na element", () => {
        cy.visit('http://automationpractice.pl/')
        cy.contains('[title="Contact us"]','Contact us').click();
        cy.get('[title="Return to Home"]').click();
    })
})