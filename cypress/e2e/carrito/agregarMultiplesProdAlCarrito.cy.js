describe('Pagina principal',()=>{

     beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('standard_user') // Ingreso el nombre de usuario
        cy.get('#password').type('secret_sauce') // Ingreso la contraseña
        cy.get('#login-button').click() // Hago clic en el botón de Login
        
  })


    it('Agregar Multiples productos al carrito', ()=>{
        cy.url().should('include', '/inventory.html')
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click() // agrego el 1er producto
        cy.get('[data-test="remove-sauce-labs-backpack"]').should('be.visible') // busco el boton remove    y veo que este visible
        cy.get('[data-test="shopping-cart-badge"]').should('have.text', '1')

        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click() // agrego el 2do producto
        cy.get('[data-test="remove-sauce-labs-bike-light"]').should('be.visible') // busco el boton remove    y veo que este visible
        cy.get('[data-test="shopping-cart-badge"]').should('have.text', '2')

        cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click() // agrego el 3er producto
        cy.get('[data-test="remove-sauce-labs-onesie"]').should('be.visible') // busco el boton remove    y veo que este visible
        cy.get('[data-test="shopping-cart-badge"]').should('have.text', '3')
    })

})