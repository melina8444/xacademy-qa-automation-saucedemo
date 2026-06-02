describe('Pagina principal',()=>{

    beforeEach(() => {
        // cy.visit('https://www.saucedemo.com/')
        // cy.get('#user-name').type('standard_user') // Ingreso el nombre de usuario
        // cy.get('#password').type('secret_sauce') // Ingreso la contraseña
        // cy.get('#login-button').click() // Hago clic en el botón de Login
        cy.login('standard_user', 'secret_sauce')
  })

  it('Agregar productos al carrito', ()=>{
    cy.url().should('include', '/inventory.html')

    // cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click() // agrego el producto
    cy.agregarAlCarrito() //utilizo el commands "agregarAlCarrito"
    
    cy.get('[data-test="remove-sauce-labs-backpack"]').should('be.visible') // busco el boton remove    y veo que este visible
    cy.get('[data-test="shopping-cart-badge"]').should('have.text', '1')
  })

})