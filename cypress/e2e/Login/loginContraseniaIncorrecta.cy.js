describe('Pagina principal', () => {

    // Se ejecuta antes de cada prueba
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
    }) 

    // Prueba de login con contraseña incorrecta Con DATA-TEST 
    it('Login con contraseña incorrecta', () => {
        cy.get('[data-test="username"]').type('standard_user') // Ingreso el nombre de usuario
        cy.get('[data-test="password"]').type('12345') // Ingreso una contraseña incorrecta
        cy.get('[data-test="login-button"]').click() // Hago clic en el botón Login
        cy.get('[data-test="error"]').should('be.visible') // Verifico que se muestre un mensaje de error
    })
})