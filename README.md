# Pruebas Automatizadas con Cypress en Amazon

Este repositorio contiene scripts de pruebas automatizadas utilizando Cypress y JavaScript para realizar pruebas en el sitio web de Amazon.<br>
Estos scripts están diseñados para ejecutar dos casos de prueba específicos.<br>
A continuación, se detallan los pasos y las verificaciones para cada caso.

## Caso 1: Agregar productos al carrito y verificar en el carrito
Pasos:
```
Ingresar a Amazon.
Buscar un producto en el buscador.
Agregar el producto al carrito.
Buscar otro producto en el buscador.
Agregar el segundo producto al carrito.
Ir al carrito.
```

Verificaciones:
```
Verificar que los productos seleccionados estén presentes en el carrito.
Verificar que al desplegar el menú de usuario, no se muestre la opción "Cerrar sesión".
```

## Caso 2: Agregar productos de una categoría al carrito y verificar en el carrito

Pasos:
```
Ingresar a Amazon.
Ingresar a una de las categorías mostradas en la pantalla principal.
Agregar dos de los productos mostrados al carrito.
Ir al carrito.
```

Verificaciones:
```
Verificar que los productos seleccionados estén presentes en el carrito.
```

Configuración de entorno:

1. Asegúrate de tener Node.js instalado.
2. Clona este repositorio.
3. Instala las dependencias con el siguiente comando:
```
npm install
```

## Ejecutar todos los casos de prueba:
```
npx run cypress
```

# IMPORTANTE
Amazon cambia las categorías principales cada vez que refrescas, en alguna ocasión puede que el test de la prueba falle,
vuelve a ejecutarlo en caso de que no aparezcan las categorías marcadas.