describe('#TO DO APP', () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it('there are NO TODO', () => {
    cy.get('#todo-body').children().should('have length', 0)
    cy.get('#done-body').children().should('have length', 0)
  })

  it('create a TODO', () => {
    cy.get('input[cy-data="new-todo"]').type('Do the dishes')
    cy.get('button[id="create-todo]').click()

    cy.get('#todo-body').children().should('have length', 1)
    cy.get('#done-body').children().should('have length', 0)
  })

  it('create a TODO and mark it as DONE', () => {
    cy.createTodo('Do the dishes')
    cy.get('button[cy-data="todo-0"]').click()

    cy.get('#todo-body').children().should('have length', 1)
    cy.get('#done-body').children().should('have length', 0)
  })

  it('create 5 TODO and mark 2 as DONE', () => {
    cy.createTodo('Do the dishes')
    cy.createTodo('Buy fish')
    cy.createTodo('Mop the floor')
    cy.createTodo('Bake a cake')
    cy.createTodo('Pretend to read a book')

    cy.get('button[cy-data="todo-0"]').click()
    cy.get('button[cy-data="todo-3"]').click()

    cy.get('#todo-body').children().should('have length', 1)
    cy.get('#done-body').children().should('have length', 0)
  })
})