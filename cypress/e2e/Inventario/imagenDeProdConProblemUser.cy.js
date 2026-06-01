describe('Imagen de productos con Problem User', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type('problem_user') // Ingreso el nombre de usuario
        cy.get('[data-test="password"]').type('secret_sauce') // Ingreso una contraseña correcta
        cy.get('[data-test="login-button"]').click() // Hago clic en el botón Login
        cy.url().should('include', '/inventory.html') // Verifico que se redirige a la página de inventario
    })

    it('Verificar imagen de productos con Problem User', () => {
        cy.get('[data-test="inventory_item_img"]').should('be.visible')
        })
    })
    
