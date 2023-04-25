/// <reference types="cypress"/>

describe("E2E - Akcja wpisywania", () => {
    it("Wpisywanie wartości w pole", () => {
        cy.visit('http://automationpractice.pl/')
        cy.searchPhrase("Nowy tekst", 1200);
        //cy.get("#search_query_top").type("Przykładowy produkt{backspace}", {delay: 500})
    })

    it("Czyszczenie wartości z pola input", () => {
        cy.ClearInput();
        //cy.get("#search_query_top").clear();
    })
})