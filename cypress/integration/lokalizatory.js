/// <reference types="cypress"/>

describe("E2E - Lokalizatory", () => {
    it("Lokalizatory", () => {
        cy.visit('http://automationpractice.pl/')

        //Po znaczniku
        cy.get("a");

        //Identyfikator
        cy.get("#search_query_top")

        //Po klasie
        cy.get(".form-control")

        //Po atrybutach
        cy.get('[name="search_query"]')
        cy.get('[placeholder="Search"]')

        //Dokladniejszy atrybut wraz ze znacznikiem 
        cy.get('input[placeholder="Search"]')

        //Pobieranie elementów po kilku atrybutach
        cy.get('[src="http://automationpractice.pl/modules/themeconfigurator/img/banner-img6.jpg"][width="381"]')

        //Zalecana praktyka pobierania elementów
        //cy.get('[data-cy="wyszukiwarka"]')
    })

    it.only("Lokalizatory2", () => {
        cy.visit('http://automationpractice.pl/')

        cy.contains("Shop now !")
        cy.contains('[title="Contact us"]', 'Contact us')

        cy.get("li").parents("#home-page-tabs").find("li").eq(0)
        cy.get("li").parents("#home-page-tabs").find("li").contains("Best Sellers")
    })
})