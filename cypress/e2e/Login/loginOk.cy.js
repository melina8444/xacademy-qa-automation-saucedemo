describe('Pagina principal', () => {

    // Se ejecuta antes de cada prueba
    beforeEach(() => {
        cy.viewport(1280, 720) // visualizo en pantalla 1280 x 720
        cy.visit('https://www.saucedemo.com/') // visita la pagina 
    })

    //   it('', ()=>{
    
//   })



    // Prueba de login exitoso con ID de los elementos
    it('Login exitoso', () => {

        //=========================
        //     campo Usuario
        //=========================

        // cy.get('#user-name').type('standard_user') // Ingreso el nombre de usuario
        cy.get('#user-name').as('campoUser') // utilizo "as" para ponerle alias al campo usuario
        cy.get('@campoUser').type('standard_user') // Ingreso el usuario
        
        //=========================
        //     campo Contraseña
        //=========================

        // cy.get('#password').type('secret_sauce') // Ingreso la contraseña
        cy.get('#password').as('campoPass')// utilizo "as" para ponerle alias al campo contraseña
        cy.get('@campoPass').type('secret_sauce')//Ingreso la contraseña


        
        cy.get('#login-button').click() // Hago clic en el botón de Login

        cy.url().should('include', '/inventory.html')
        cy.get('[data-test="title"]').should('have.text','Products')
    })

})