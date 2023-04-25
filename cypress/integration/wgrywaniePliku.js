/// <reference types="cypress"/>

describe("E2E - Wgrywanie pliku", () => {
    it("Wgrywanie pliku do inputa w contact us", () => {
        cy.visit('http://automationpractice.pl/')
        cy.contains('[title="Contact us"]','Contact us').click();
        cy.get('#fileUpload').attachFile("../fixtures/tak.jpg");
        cy.get("span.filename").should("contain", "tak.jpg")
    })
})