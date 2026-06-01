describe('Pagina principal', () => {

    // Se ejecuta antes de cada prueba
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
    })

    // Prueba de login con campos vacíos
    it('Login con campos vacíos', () => {
        cy.get('[data-test="login-button"]').click() // Hago clic en el botón Login sin ingresar datos
        cy.get('[data-test="error"]').should('be.visible').and('contain', '[data-test="error"]') // Verifico que se muestre el mensaje de error
        })



})