describe('Registeration', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3001/register')
  })

  it('Show register Validation Errors', () => {
    cy.get('#register-form').submit()
    cy.get('[data-cy="firstname-error"]').should('exist')
    cy.get('[data-cy="lastname-error"]').should('exist')
    cy.get('[data-cy="username-error"]').should('exist')
    cy.get('[data-cy="email-error"]').should('exist')
    cy.get('[data-cy="password-error"]').should('exist')
  })

  it('Register Customer', () => {
    cy.get('.mr-2')
      .type('abdul')
      .should('have.value', 'abdul')
    cy.get('.ml-2')
      .type('qadir')
      .should('have.value', 'qadir')
    cy.get('[name="username"]')
      .type('vili')
      .should('have.value', 'vili')
    cy.get('[type="email"]')
      .type('vili@gmail.com')
      .should('have.value', 'vili@gmail.com')
    cy.get('[type="password"]')
      .type('abdulqadir123')
      .should('have.value', 'abdulqadir123')
    // cy.get('#register-form').submit()
    // cy.url().should('include', '/')
  })
})