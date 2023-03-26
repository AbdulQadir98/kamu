describe('XHR Request Products', () => {

  it('Get Products and details', () => {
    cy.request('http://localhost:8082/api/product')
    .should((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.length(14)
      expect(response).to.have.property('headers')
      expect(response).to.have.property('duration')
    })
  })

  it('Get Product details by id', () => {
    cy.request('http://localhost:8082/api/product/1')
      .then((response) => {
        expect(response).property('status').to.equal(200)
        expect(response).property('body').to.contain({
          name: "Rice - Jasmine Sented",
          description: "rice with sesame in black bowl",
          category: "Cereals",
          price: 10,
        })
      })
  })

})