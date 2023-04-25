class SelectPage {
    get select() {
        return cy.get("#selectProductSort");
    }
    selectAllOption() {
        this.select.then(select => {
            cy.wrap(select).find("option").each(opcja => {
                cy.wait(500) // dodanie opóźnienia 500ms
                cy.get("#selectProductSort").select(opcja.text()) // ponowne wyszukanie elementu select
            })
        })
    }
}

export default new SelectPage();