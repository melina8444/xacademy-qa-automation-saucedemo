describe('pagina principal',()=>{
         // Prueba de login exitoso con ID de los elementos
    it('Mostrar error al dejar vacío el campo Postal Code', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('problem_user') // Ingreso el nombre de usuario
        cy.get('#password').type('secret_sauce') // Ingreso la contraseña
        cy.get('#login-button').click() // Hago clic en el botón de Login
        cy.url().should('include', '/inventory.html')

    //=================================
    //       Agrego primer prod
    //=================================
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click() // agrego el producto
    cy.get('[data-test="remove-sauce-labs-backpack"]').should('be.visible') // Verifico que el boton remove se muestre correctamente
    cy.get('[data-test="shopping-cart-badge"]').should('have.text', '1')


    //=================================
    //      Entro al carrito
    //=================================

    cy.get('[data-test="shopping-cart-link"]').click() //hago click en el icono del carrito

    cy.url().should('include', '/cart.html') //valido que estoy en la pagina del carrito

    cy.get('[data-test="checkout"]').click() // hago click en el boton checkout

    //=======================================================================
    //      Entro a validar que estoy en la pagina de checkout-step-one.html
    //=======================================================================

    cy.url().should('include', '/checkout-step-one.html') 

    //==========================
    //         formulario
    //==========================

    cy.get('[data-test="firstName"]').type('Ana')
    cy.get('[data-test="lastName"]').type('García')

    cy.get('[data-test="continue"]').click() //hago click en el boton "continue"

})

    })