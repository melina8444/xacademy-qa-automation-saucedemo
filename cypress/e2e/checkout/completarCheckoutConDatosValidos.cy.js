describe('Página Principal - checkout',()=>{
    
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
    })
   
     // Prueba de login exitoso con ID de los elementos
    it('Completar compra de un producto exitosamente', () => {
        // cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('standard_user') // Ingreso el nombre de usuario
        cy.get('#password').type('secret_sauce') // Ingreso la contraseña
        cy.get('#login-button').click() // Hago clic en el botón de Login
        cy.url().should('include', '/inventory.html')
    

    //=================================
    //       Agrego primer prod
    //=================================
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click() // agrego el producto
    cy.get('[data-test="remove-sauce-labs-backpack"]').should('be.visible') // busco el boton remove    y veo que este visible
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

    //=================================
    //      Completo Formulario
    //=================================

    cy.get('[data-test="firstName"]').type('Melina')
    cy.get('[data-test="lastName"]').type('Yanguez')
    cy.get('[data-test="postalCode"]').type('5000')
    cy.get('[data-test="continue"]').click()

    //======================================================================
    //      Entro a validar que estoy en la pagina de checkout-step-two.html

    //======================================================================

    cy.url().should('include', '/checkout-step-two.html') 

    
    //===========================================================
    //      Validaciones de la orden antes de finalizar la compra 
    //===========================================================

    
    cy.get('[data-test="inventory-item-name"]').should('be.visible') //verifico que el producto agregado exista

    cy.get('[data-test="shopping-cart-badge"]').should('have.text', '1') //valido que el carrito tenga el  producto

    cy.get('[data-test="finish"]').click()

    //=================================================================
    //      Entro a pagina Checkout: Complete! - checkout-complete.html
    //=================================================================
    cy.url().should('include', '/checkout-complete.html') // valido qque se muestra la página de compra completada
    cy.get('[data-test="complete-header"]').should('have.text', 'Thank you for your order!')// verifico que se muestre el mensaje de compra exitosa


})
  

})