///<reference types ="Cypress" />

describe('Add item to the todo list', ()=>{
    it('should add a new item to the list', ()=>{
        cy.visit("https://todomvc.com/examples/angularjs/#/")

        cy.get('.new-todo').type('Feed the cats{enter}')
        cy.get('.toggle').click()
        cy.wrap({ foo: 'Feed the cats' }).its('foo').should('eq', 'Feed the cats')
        //cy.contains('.view > .ng-binding', 'feet the cats').should('be.visible')
        //cy.get('.view > .ng-binding').invoke('text').should('include.text', 'Feed the cats')
    })
})