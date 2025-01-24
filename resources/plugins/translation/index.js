import { createI18n } from "vue-i18n"

import en from "../../locales/en.json"
import ar from "../../locales/ar.json"

export default {
    install(app, { locale }) {
        app.use(
            createI18n({
                locale: locale || 'en',
                messages: { en, ar },
                fallbackLocale: "en",
            })
        )
    },
}
