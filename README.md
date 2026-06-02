# 🚀 XAcademy - QA Automation con Cypress

## 📋 Descripción

Proyecto realizado como actividad de Automatización en XAcademy.
El objetivo fue automatizar casos de prueba sobre la aplicación SauceDemo 
utilizando Cypress, aplicando buenas prácticas como custom commands, 
aserciones, aliases, viewport y scroll. Los bugs encontrados fueron 
documentados en un tablero de Trello.

---

## 🛠️ Tecnologías utilizadas

* ⚡ Cypress
* 📜 JavaScript
* 🌿 Git
* 🐙 GitHub
* 📌 Trello

---

## 📂 Módulos automatizados

* 🔐 Login
* 📦 Inventario
* 🛒 Carrito
* ✅ Checkout

---

## 🧪 Casos de prueba automatizados

* ✔️ Login exitoso
* ✔️ Login con campos vacíos
* ✔️ Login con contraseña incorrecta
* ✔️ Login con usuario bloqueado
* ✔️ Logout desde menú hamburguesa
* ✔️ Agregar producto al carrito
* ✔️ Agregar múltiples productos al carrito
* ✔️ Eliminar producto desde página del carrito
* ✔️ Verificar cantidad de productos en inventario
* ✔️ Ordenar productos por precio
* ✔️ Ordenar productos con problem_user
* ✔️ Imagen de producto con problem_user
* ✔️ Checkout exitoso con datos válidos
* ✔️ Checkout sin completar campos obligatorios
* ✔️ Campo Last Name con problem_user en checkout

---

## ⚙️ Custom Commands

Se implementaron comandos personalizados en `cypress/support/commands.js`
para centralizar flujos repetidos y mejorar la mantenibilidad del proyecto.

| Command | Parámetros | Descripción |
|---------|-----------|-------------|
| `cy.login(usuario, password)` | usuario, password | Visita la URL, completa y envía el formulario de login |
| `cy.agregarAlCarrito(producto)` | producto (data-test slug) | Hace click en el botón "Add to cart" del producto indicado |

**Ejemplo de uso:**
```javascript
beforeEach(() => {
    cy.login('standard_user', 'secret_sauce')
})

it('Agregar producto al carrito', () => {
    cy.agregarAlCarrito('sauce-labs-backpack')
})
```

---

## ▶️ Ejecución del proyecto

### Instalar dependencias
```bash
npm install
```

### Ejecutar Cypress en modo interactivo
```bash
npx cypress open
```

### Ejecutar Cypress en modo headless
```bash
npx cypress run
```

---

## 🐞 Gestión de Bugs

Se reportaron los bugs identificados durante la ejecución utilizando Trello.

🔗 **Tablero Trello:**
[*Ver tablero*](https://trello.com/invite/b/6a1702418d51ce9e1cf8906c/ATTI3d8788ea212f0fb3f91697bff3926b1cAD0DD1C8/xacademy-saucedemo-bugs)

---

## 📁 Estructura del proyecto

```text
cypress/
│
├── e2e/
│   ├── carrito/
│   │   ├── agregarMultiplesProdAlCarrito.cy.js
│   │   ├── agregarProdAlCarrito.cy.js
│   │   └── eliminarProdDesdePagDelCarrito.cy.js
│   │
│   ├── checkout/
│   │   ├── campoLastNameEnCheckoutConproblemUser.cy.js
│   │   ├── completarCheckoutConDatosValidos.cy.js
│   │   └── sinCompletarCamposObligatorios.cy.js
│   │
│   ├── Inventario/
│   │   ├── imagenDeProdConProblemUser.cy.js
│   │   ├── ordenarProdConProbUser.cy.js
│   │   ├── ordenarProdPorPrecio.cy.js
│   │   └── verificarCantProductos.cy.js
│   │
│   └── Login/
│       ├── loginCamposVacios.cy.js
│       ├── loginContraseniaIncorrecta.cy.js
│       ├── loginOk.cy.js
│       ├── loginUsuarioBloqueado.cy.js
│       └── logoutMenuHambur.cy.js
│
├── fixtures/
│
└── support/
    ├── commands.js     ← Custom commands reutilizables
    └── e2e.js

cypress.config.js
README.md
```

---

## 👩‍💻 Autora

**Melina Yangüez** - QA Automation

---

## 🎯 Estado del proyecto

🚧 En progreso — refactorizando tests con custom commands.
