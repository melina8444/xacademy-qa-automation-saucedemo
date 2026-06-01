describe('Inventario - Verificar cantidad de productos', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type('standard_user') // Ingreso el nombre de usuario
        cy.get('[data-test="password"]').type('secret_sauce') // Ingreso una contraseña correcta
        cy.get('[data-test="login-button"]').click() // Hago clic en el botón Login
        cy.url().should('include', '/inventory.html') // Verifico que se redirige a la página de inventario
    })

    it('Verificar cantidad de productos', () => {
        cy.get('[data-test="inventory_item_name"]').should('have.length', 6) // Verifico que hay 6 productos en el inventario
    })
})