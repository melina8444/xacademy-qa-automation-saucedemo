describe('Pagina principal',()=>{

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('standard_user') // Ingreso el nombre de usuario
        cy.get('#password').type('secret_sauce') // Ingreso la contraseña
        cy.get('#login-button').click() // Hago clic en el botón de Login
        
  })

  it('Agregar 2 productos al carrito y elimino 1', ()=>{

    cy.url().should('include', '/inventory.html') // valido que el login fue exitoso y que estoy en la pag: inventory.html

    //=================================
    //       Agrego primer prod
    //=================================

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click() //Hago click en el boton "add to cart"
    cy.get('[data-test="remove-sauce-labs-backpack"]').should('be.visible') //valido que el boton cambió a "remove"
    cy.get('[data-test="shopping-cart-badge"]').should('have.text', '1')//valido que el carrito tenga 1 prod

    //=================================
    //       Agrego segundo prod
    //=================================

    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click() // agrego el prod "bike light"
    cy.get('[data-test="remove-sauce-labs-bike-light"]').should('be.visible') // valido que el boton cambió a remove
    cy.get('[data-test="shopping-cart-badge"]').should('have.text', '2')//valido que el carrito tenga 2 prod

    //=================================
    //      Entro al carrito
    //=================================

    cy.get('[data-test="shopping-cart-link"]').click() //hago click en el icono del carrito

    cy.url().should('include', '/cart.html') //valido que estoy en la pagina del carrito

    //=================================
    //      Validaciones dentro del carrito
    //=================================

    cy.get('[data-test="remove-sauce-labs-backpack"]').should('be.visible')//verifico que el boton "remove" del backpack exista

    cy.get('[data-test="remove-sauce-labs-bike-light"]').should('be.visible') //verifico que el boton "remove" del bike light exista

    cy.get('[data-test="shopping-cart-badge"]').should('have.text', '2') //valido que está el 2do producto

    //=================================
    //      Elimino producto
    //=================================

    cy.get('[data-test="remove-sauce-labs-bike-light"]').click() //elimino el producto bike light
    cy.get('[data-test="shopping-cart-badge"]').should('have.text', '1')
    cy.get('[data-test="remove-sauce-labs-bike-light"]').should('not.exist')
  })



})