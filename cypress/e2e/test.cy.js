const selectors = require("../support/selectors");

it('Agregar productos al carrito y verificar en el carrito', function() {
  // visits BaseURL defined in env config file and validate page elements
  cy.viewport(1920, 1080);
  cy.visit('https://www.amazon.es/');

  //Rechazamos las cookies
  cy.get(selectors.homepage.acceptCookie, { timeout: 10000 })
    .should('be.visible')
    .click();
  cy.wait(5000);

  //Buscamos nuestro primer producto y lo agregamos al carrito
  cy.get(selectors.homepage.searchBar)
    .type('MSI Modern 15 H')
    .type('{enter}');
  cy.get(selectors.shop.product1, { timeout: 10000 })
    .should('be.visible')
    .eq(1)
    .click();
  cy.addCart();

  //Buscamos nuestro segundo producto y lo agregamos al carrito, rechazamos el seguro
  cy.get(selectors.homepage.searchBar)
      .type('Iphone 15 Pro')
      .type('{enter}');
  cy.get(selectors.shop.product2, { timeout: 10000 })
    .should('be.visible')
    .eq(1)
    .click();
  cy.addCart();
  cy.get(selectors.shop.refuseSecure)
      .click();

  //Accedemos al carrito y verificamos los productos añadidos
  cy.get(selectors.shop.cart, { timeout: 10000 })
      .should('be.visible')
      .click({force: true});
  cy.get(selectors.shop.cartProduct)
      .eq(1)
      .contains('MSI Modern 15 H B13M-008XES');
  cy.get(selectors.shop.cartProduct)
      .eq(0)
      .contains('Apple iPhone 15 Pro (128 GB)');

  //Verificamos que no hay sesión abierta
  cy.get(selectors.homepage.userBtn)
      .realHover('mouse')
      .contains('Cerrar sesión').should('not.exist');
});

it('Agregar productos de categorías al carrito y verificar en el carrito', function() {
  // visits BaseURL defined in env config file and validate page elements
  cy.viewport(1920, 1080);
  cy.visit('https://www.amazon.es/');

  //Rechazamos las cookies
  cy.get(selectors.homepage.acceptCookie, { timeout: 10000 })
      .should('be.visible')
      .click();
  cy.wait(5000);

  //Seleccionamos una categoría y añadimos un nuevo producto
  cy.get(selectors.homepage.beauty)
      .click({force: true});
  cy.get(selectors.test2.product2, { timeout: 10000 })
      .should('be.visible')
      .eq(1)
      .click();
  cy.addCart();

  //Volvemos a la home, seleccionamos nuestro segundo producto y lo agregamos al carrito
  cy.get(selectors.homepage.home)
      .click();
  cy.get(selectors.homepage.houseKitchen)
      .click({ multiple: true });
  cy.get(selectors.test2.product1, { timeout: 10000 })
      .should('be.visible')
      .eq(1)
      .click();
  cy.addCart();

  //Accedemos al carrito y verificamos los productos añadidos
  cy.get(selectors.shop.cart, { timeout: 10000 })
      .should('be.visible')
      .click({force: true});
  cy.get(selectors.shop.cartProduct)
      .eq(4)
      .contains('Philips GC026/80 Quitapelusas');
  cy.get(selectors.shop.cartProduct)
      .eq(6)
      .contains('Revlon Professional UniqOne Protector Térmico Pelo');
});