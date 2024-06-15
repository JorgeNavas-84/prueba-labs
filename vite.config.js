import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    VitePWA({
      includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'prueba-labs',
        short_name: 'Perritos',
        description: 'Busca perros por raza',
        start_url: '/',
        display: 'standalone',
        theme_color: '#9DA993',
        background_color: '#ffffff',
        icons: [
          {
            src: 'public/dog-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'public/dog.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});
