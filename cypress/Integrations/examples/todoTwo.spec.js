///<reference types ="Cypress" />

describe('keepping track stuff to do', ()=>{

    describe('adding a todo item to the todo list', ()=>{

    
    it('should filter to show only completed items', ()=>{

        cy.visit("https://todomvc.com/examples/angularjs/#/")

        cy.get('.new-todo').type('Feed the cats{enter}')
         
    })
})
    describe('filtering the todo list',()=>{
        it('should filter to show only completed items', ()=>{

        cy.visit("https://todomvc.com/examples/angularjs/#/")

        cy.get('.new-todo').type('Feed the cats{enter}').type('Walk the dog{enter}')

        cy.get('.todo-list label').should('have.length',2)

        //cy.contains('li','Walk the dog').find('.togle').click()
        cy.get(':nth-child(2) > .view > .toggle').click()

        cy.contains('.filters','Completed').click()
        cy.get('.todo-list label').should('have.length',1)


    })    



})
})