describe('Inventario - Ordenar productos por precio', () => {
  beforeEach(() => {
    // Inicio sesión antes de cada prueba      
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
  })
  it('Debería ordenar los productos por precio de menor a mayor', () => {
    // Selecciona la opción de ordenar por precio de menor a mayor
    cy.get('.product_sort_container').select('Price (low to high)')

  })

})