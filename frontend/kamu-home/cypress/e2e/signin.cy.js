describe('Authentication', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3001/')
  })
  it('Failed to Login Customer Dashboard', () => {
    cy.contains('Login').click()
    cy.url().should('include', '/')
    cy.get('#username')
      .type('abdul', {delay: 100})
      .should('have.value', 'abdul')
    cy.get('#password')
      .type('password', {delay: 100})
      .should('have.value', 'password')
    cy.get('#login-form').submit()
      .should('contain', 'Invalid username')
    cy.url().should('include', '/')
  })

  it('Login to Customer Dashboard', () => {
    cy.contains('Login').click()
    cy.url().should('include', '/')
    // Get input from its class
    cy.get('#username')
    // type value in input with 0.1 sec keypress delay
      .type('abdul', {delay: 100})
    // Verify that the value has been updated
      .should('have.value', 'abdul')
    cy.get('#password')
    // type value in input with 0.1 sec keypress delay
      .type('abdulqadir123', {delay: 100})
    // Verify that the value has been updated
      .should('have.value', 'abdulqadir123')
    // submit and check if user token created  
    cy.get('#login-form').submit().should(() => {
      expect(localStorage.getItem('user'))
    })
    // verify login successful
    cy.url().should('include', '/dashboard')

  })
})