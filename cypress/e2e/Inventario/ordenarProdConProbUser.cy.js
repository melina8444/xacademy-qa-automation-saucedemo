describe('Inventario - Ordenar productos por precio', () => {
  beforeEach(() => {
    // Inicio sesión antes de cada prueba      
    // cy.visit('https://www.saucedemo.com/');
    // cy.get('#user-name').type('problem_user');
    // cy.get('#password').type('secret_sauce');
    // cy.get('#login-button').click();
    cy.login('problem_user', 'secret_sauce')//utilizo el commands "login"
  })
  it('Debería ordenar los productos por precio de menor a mayor', () => {
    // Selecciona la opción de ordenar por precio de menor a mayor
    cy.get('.product_sort_container').select('Price (low to high)')

  })

})