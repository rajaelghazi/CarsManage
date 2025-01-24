import Aura from "@primevue/themes/aura";
import { definePreset, palette } from "@primevue/themes";

const primaryColor = palette("#E69F32");

const CODRocket = definePreset(Aura, {
    semantic: {
        primary: primaryColor,
        colorScheme: {
            light: {
                FormField: {
                    hoverBorderColor: '{primary.color}'
                }
            },
            dark: {
                FormField: {
                    borderColor: '{surface.700}'
                }
            }
        }
    },
});

export default {
    theme: {
        preset: CODRocket,
        options: {
            darkModeSelector: ".dark",
            cssLayer: {
                name: "primevue",
                order: "tailwind-base, primevue, tailwind-utilities",
            },
        },
    },
};
