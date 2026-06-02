describe('Pagina principal', () => {
 
    

    // Prueba de login y logout exitoso con ID de los elementos
    it('Logout desde menú hamburguesa', () => {
        // cy.visit('https://www.saucedemo.com/')
        // cy.get('#user-name').type('standard_user') // Ingreso el nombre de usuario
        // cy.get('#password').type('secret_sauce') // Ingreso la contraseña
        // cy.get('#login-button').click() // Hago clic en el botón de Login
        cy.login('standard_user', 'secret_sauce') //utilizo el commands "login"


        cy.url().should('include','/inventory.html')//valido que estoy en la pagina "inventory.html"
        
        cy.get('#react-burger-menu-btn').click() // Hago clic en el botón del menú hamburguesa
        cy.get('#logout_sidebar_link').click() // Hago clic en el enlace de Logout
    })

})