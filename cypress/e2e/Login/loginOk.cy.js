describe('Pagina principal', () => {

    // Se ejecuta antes de cada prueba
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
    })

    //   it('', ()=>{
    
//   })



    // Prueba de login exitoso con ID de los elementos
    it('Login exitoso', () => {
        cy.get('#user-name').type('standard_user') // Ingreso el nombre de usuario
        cy.get('#password').type('secret_sauce') // Ingreso la contraseña
        cy.get('#login-button').click() // Hago clic en el botón de Login
    })

})