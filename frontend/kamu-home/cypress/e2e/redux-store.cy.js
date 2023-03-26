describe('empty spec', () => {

  it('Login to Customer Dashboard', () => {
    cy.visit('http://localhost:3001')
    cy.contains('Login').click()
    cy.url().should('include', '/')
    // Get input from its class
    cy.get('#username')
    // type value in input with 0.1 sec keypress delay
      .type('abdul')
    // Verify that the value has been updated
      .should('have.value', 'abdul')
    cy.get('#password')
    // type value in input with 0.1 sec keypress delay
      .type('abdulqadir123')
    // Verify that the value has been updated
      .should('have.value', 'abdulqadir123')
    // submit and check if user token created  
    cy.get('#login-form').submit()
    // verify login successful
    cy.url().should('include', '/dashboard')

  // })

  // it('has expected state on load', () => {
    cy.visit('http://localhost:3001/dashboard')
    // access store and verify initial state
    cy.window().its('store').invoke('getState').should('deep.equal', {
      cart: {
        items: [],
        count: 0,
        name: 'CurrentCart'
      }
    })
    // add an item to cart
    cy.get(':nth-child(1) > .pb-2 > .MuiButtonBase-root').click()
    cy.window().its('store').invoke('getState').should('deep.equal', {
      cart: {
        items: [
          {
            id: 13,
            name: 'Pasta - Bauletti, Chicken White',
            description: 'pasta in tomato sauce',
            category: 'Appetizer',
            unit: 1,
            price: 10,
            url: 'https://images.unsplash.com/photo-1516100882582-96c3a05fe590?ixid=MnwzNjIzNTd8MHwxfHNlYXJjaHwxfHxwYXN0YSUyMGNoaWNrZW58ZW58MHx8fHwxNjcyMTYwNTg0&ixlib=rb-4.0.3',
            availability: true,
            createdAt: '2022-12-10T15:20:05.455Z',
            updatedAt: '2022-12-10T15:20:05.455Z'
          }
        ],
        count: 1,
        name: 'CurrentCart'
      }
    })
    // click chart icon
    cy.get('[data-cy="cart-icon"]').click()
    cy.url().should('include', '/cart/CurrentCart')
    // clear cart
    cy.get('[data-cy="cart-clear"]').click()
    cy.window().its('store').invoke('getState').should('deep.equal', {
      cart: {
        items: [],
        count: 0,
        name: 'CurrentCart'
      }
    })
  })
})