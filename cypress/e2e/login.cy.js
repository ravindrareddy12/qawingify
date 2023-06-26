describe('Login Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/login') // Update with your application's base URL
  })

  it('should successfully log in with valid credentials', () => {
    cy.get('input[name="username"]').type('user1') // Replace with a valid username from your controller
    cy.get('input[name="password"]').type('password1') // Replace with a valid password from your controller
    cy.get('input[type="submit"]').click()

    // Assert successful login
    cy.url().should('include', '/home')
    cy.get('h1').should('contain', 'user Login sucessfull')
  })

  it('should display an error message for empty username and password', () => {
    cy.get('input[name="username"]').clear()
    cy.get('input[name="password"]').clear()
    cy.get('input[type="submit"]').click()

    // Assert error message
    cy.get('.error-message').should('be.visible')
    cy.url().should('include', '/login')
  })

  it('should display an error message for invalid username', () => {
    cy.get('input[name="username"]').type('invalid-user')
    cy.get('input[name="password"]').type('password1')
    cy.get('input[type="submit"]').click()

    // Assert error message 
    cy.get('.error-message').should('be.visible')
    cy.url().should('include', '/login')
  })

  it('should display an error message for invalid password', () => {
    cy.get('input[name="username"]').type('user1')
    cy.get('input[name="password"]').type('invalid-password')
    cy.get('input[type="submit"]').click()

    // Assert error message
    cy.get('.error-message').should('be.visible')
    cy.url().should('include', '/login')
  })

  // Add more test scenarios for different login scenarios as required
})
