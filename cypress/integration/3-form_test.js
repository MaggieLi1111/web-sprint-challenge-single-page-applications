describe("App Test", ()=> {
    beforeEach( () => {
        cy.visit("http://localhost:3000/pizza");
    })

    it("sanity check to make sure tests work", ()=> {
        expect( {}).not.to.equal({});
    })

    it("can add text to the box", () => {
        cy.get("input[name='name']")
        .should("exist")
        .type("Anthony")
        .should("have.value", "Anthony")
    })
    it("can select multiple toppings", () => {
        cy.get("input[type='checkbox']")
        .check()
        .should("be.checked")
    })
    it("can submit a form", () => {
        cy.get("#pizza-form")
        .submit()

    })
   
})