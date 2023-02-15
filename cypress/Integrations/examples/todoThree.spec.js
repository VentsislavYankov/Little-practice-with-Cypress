///<reference types ="Cypress" />

import { should } from "chai"
import { TodoPage } from "../../page-objects/todo-page"



describe('When adding new items to the app', ()=>{

    const todoPage = new TodoPage()

    beforeEach(()=>{
          todoPage.open()    
    })

    it('Should tell the user what to do', ()=>{

       cy.get('.new-todo')
       .should('have.attr', 'placeholder', 'What needs to be done?')
       .and('be.enabled')         
    })
  
    it('Should not show the delete buttons by default', ()=>{
        todoPage.addTodo('Feet the cat')

        cy.get('.todo-list li').should('have.length',1)

        cy.get('.destroy').then(
            $element => expect($element).to.not.be.visible
            )

            cy.get('.todo-list li').then(
                $el =>{
                   expect($el).to.be.visible
                   .to.have.text('Feed the cat')  
                }
            )
        cy.contains('Completed').click()
        cy.get('.todo-list li').should('have.length',0)    

    })

    it('New todo items should appear in the todo list', () =>{
        todoPage.addTodo('Walk the dog')

        todoPage.todos().should('have.length',1)
        todoPage.todoItem(0).should('have.text', 'Walk the dog')
    })


    it('Should add a new item to the list', () =>{
        cy.visit('https://todomvc.com/examples/angularjs/#/')


        cy.get('.new-todo').type('Feed the cats{enter}')

        todoPage.todos().should('have.length',1)

        cy.get('.filters').find('[href$="completed"]').click()

        cy.get('.todo-list li').should('have.length,0')
    })
    it('Multiple new todo items should appear in order of apperance', ()=>{

        todoPage.addTodo('Feed the cat')
        todoPage.addTodo('Walk the dog')

        cy.get('.todo-list li').should('have.length',2)
        cy.get('.todo-list li').eq(0),should('have.text', 'Feed the cat')
        cy.get('.todo-list li').eq(1),should('have.text', 'Walk the dog')

    })

    it('Should show completed todos as completed', ()=>{
        todoPage.addTodo('Feed the cat')
        todoPage.addTodo('Walk the dog')

        cy.contains('.todo-list li', 'Walk the dog').within(
            $listItem =>{ cy.get('.toggle').click()}
        )
})
})
   


