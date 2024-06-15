# React + Vite

Para que funcione la autenticación es necesario correr el json-server porque la auth es local en un json.
copy this json-server --watch db.json --port 5000

Tambien es posible que de errores Cros por el uso de auth local, mejor correrlo en ambiente de desarrollo.
Al ser mi primer intento tengo muchos errores el principal es manejar las funciones dentro de los mismos componentes.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
