import path from "path";
import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import { PrimeVueResolver } from "@primevue/auto-import-resolver";
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/app.css", "resources/loader.css", "resources/app.js"],
            refresh: true,
        }),

        vue({
            template: {
                transformAssetUrls: {
                    includeAbsolute: false,
                    base: null,
                },
            },
        }),

        Components({
            resolvers: [PrimeVueResolver()],
        }),

        VueI18nPlugin({
            include: path.resolve(__dirname, "resources/locales/**")
        }),
    ],

    optimizeDeps: {
        include: ['@vue-leaflet/vue-leaflet', 'leaflet']
    },

    build: {
        minify: true,
        sourcemap: false,
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes("primevue")) {
                        return "vendor/primevue";
                    }

                    if (id.includes("leaflet") || id.includes("vue-leaflet")) {
                        return "vendor/maps";
                    }

                    if (id.includes("node_modules")) {
                        return "vendor/all";
                    }

                    return "app"
                },
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name.endsWith('.css')) {
                        return 'assets/css/[name]-[hash][extname]';
                    }
                    return 'assets/[name]-[hash][extname]';
                }
            },
        },
    },

    resolve: {
        alias: {
            "@views": path.resolve(__dirname, "resources/views"),
            "@scripts": path.resolve(__dirname, "resources/scripts"),
            "@admin": path.resolve(__dirname, "modules/admin/resources"),
        },
    },
});