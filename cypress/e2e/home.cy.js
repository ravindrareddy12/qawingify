describe('Home Page', () => {
    beforeEach(() => {
      // Perform login before each test
      // For example:
      cy.visit('http://localhost:3000/login')
      cy.get('input[name="username"]').type('user1')
      cy.get('input[name="password"]').type('password1')
      cy.get('input[type="submit"]').click() // Use an alternative selector like text content ('Submit') or a class selector
      cy.url().should('include', '/home') // Replace with the URL of the home page after successful login
      // Assert successful login
      cy.get('h1').should('contain', 'user Login sucessfull')
    })
  
    it('should sort the transaction table by AMOUNT header', () => {
      // Click the AMOUNT header to sort the table
      cy.get('th[data-testid="amount-header"]').click()
  
      // Verify that the table values are sorted in descending order
      cy.get('td[data-testid="amount-cell"]').then(($cells) => {
        const amounts = $cells.toArray().map((cell) => parseFloat(cell.innerText.replace('$', '')))
        const sortedAmounts = [...amounts].sort((a, b) => b - a) // Sort in descending order
        expect(amounts).to.deep.equal(sortedAmounts)
      })
    })
  })
  