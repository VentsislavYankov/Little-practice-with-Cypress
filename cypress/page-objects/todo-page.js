export class TodoPage {
    open(){
        cy.visit('https://todomvc.com/examples/angularjs/#/')
    }

    addTodo(todoText) {
        cy.get('.new-todo').type(todoText + '{enter}')
    }

    addTodos(...todos) {
        todos.forEach(
            todo => this.addTodo(todo)
        )
    }

    todoItem(number) {
        return cy.get('.todo-list li').eq(number)
    }

    todos() { return cy.get('.todo-list li');
}

}