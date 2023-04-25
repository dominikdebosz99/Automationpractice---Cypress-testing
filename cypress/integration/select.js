/// <reference types="cypress"/>

import SelectPage from "../support/page-object/selectPage";

describe("E2E - Akcja wybrania opcji select", () => {
    it("Wybieranie opcji", () => {
        cy.visit('http://automationpractice.pl/')
        cy.contains('[title="Women"]', 'Women').click();

        //Po nazwie
        cy.get('#selectProductSort').select("In stock")

        //Po value
        cy.get('#selectProductSort').select("price:asc")

        //Po indeksach
        cy.get('#selectProductSort').select(7)
    })

    it("Wybieranie wszystkich opcji", () => {
        cy.visit('http://automationpractice.pl/')
        cy.contains('[title="Women"]', 'Women').click();
        SelectPage.selectAllOption();
    
        // cy.get("#selectProductSort").then(select => {
        //     cy.wrap(select).find("option").each(opcja => {
        //         cy.wait(500) // dodanie opóźnienia 500ms
        //         cy.get("#selectProductSort").select(opcja.text()) // ponowne wyszukanie elementu select
        //     })
        // })
    })
})