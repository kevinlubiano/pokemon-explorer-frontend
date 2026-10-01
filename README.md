# Pokédex App

Aplicación web para buscar Pokémon por nombre o número y ver sus estadísticas, tipos y movimientos, usando datos en tiempo real de la [PokeAPI](https://pokeapi.co/).

Proyecto final de TripleTen — Aplicación de Front-End.

## 🔗 Demo en vivo

https://endearing-eclair-96ccdc.netlify.app

## Tecnologías

- React
- Vite
- React Router
- PokeAPI (fetch nativo, sin librerías externas)

## Funcionalidad

- Búsqueda de Pokémon por nombre
- Manejo de estados: cargando (preloader), error de conexión y "no encontrado"
- Lista de movimientos con paginación "Mostrar más"
- Se guarda la última búsqueda en `localStorage`
- Diseño responsivo, con fuentes personalizadas (`@font-face`) y microanimaciones

## Cómo correrlo localmente

```bash
npm install
npm run dev
```
