describe('XHR Request Orders', () => {

  it('Get user Order details', () => {
    // http://localhost:8083/api/order?user_id=5
    cy.request({
      url: 'http://localhost:8083/api/order',
      qs: {
        user_id: 5,
      },
    })
    .its('body')
    .should('be.an', 'array')
    .and('have.length', 2)
    .its('0') // yields first element of the array
    .should('contain', {
      user_id: 5,
      name: "CakeFest",
      count: 12,
      price: 1250,
    })
    .then((user) => {
      expect(user).property('id').to.be.a('number')
    })
    .then((user) => {
        expect(user).property('id').to.be.a('number')
        // make a new post on behalf of the user
        cy.request('POST', 'http://localhost:8083/api/order', {
          user_id: user.user_id,
          name: "TestOrder",
          count: 12,
          price: 1250,
          items: [ 
            {
                id: 1,
                unit: 2,
            },
            {
                id: 2,
                unit: 3,
            }
        ]
        })
    })
    // after the post return get
    .then((response) => {
      expect(response).property('status').to.equal(200)
      expect(response).property('body').to.contain({
        message: "Order Created Succesfully"
      })
    })
  })
})