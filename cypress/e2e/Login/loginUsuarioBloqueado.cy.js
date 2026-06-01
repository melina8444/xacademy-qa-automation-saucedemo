describe('Pagina principal', () => {

    // Se ejecuta antes de cada prueba
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
    }) 



it('Login bloqueado', () => {
    cy.get('[data-test="username"]').type('locked_out_user') // Ingreso el nombre de usuario bloqueado
    cy.get('[data-test="password"]').type('secret_sauce') // Ingreso la contraseña
    cy.get('[data-test="login-button"]').click() // Hago clic en el botón de Login
    cy.get('[data-test="error"]').should('be.visible') // Verifico que se muestre el mensaje de error
})

})