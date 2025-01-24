import { createInertiaApp } from "@inertiajs/vue3"
import { renderApp } from "@inertiaui/modal-vue"
import { createApp } from "vue"
import axios from "axios"

import darkMode from "./plugins/dark-mode"
import codrocket from "./plugins/codrocket"
import translation from "./plugins/translation"

axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest"
window.axios = axios

const setTitle = (title) => {
    const appName = "Starter kit"
    return title ? `${title} - ${appName}` : appName
}

const resolvePages = (name) => {
    if (name.includes("::")) {
        const [module, path] = name.split("::")
        const modules = import.meta.glob("../modules/**/views/pages/**/*.vue", { eager: true })

        return modules[`../modules/${module}/resources/views/pages/${path}.vue`]
    }

    const pages = import.meta.glob("./views/pages/**/*.vue", {
        eager: true,
    })

    return pages[`./views/pages/${name}.vue`]
}

createInertiaApp({
    title: setTitle,
    resolve: resolvePages,

    setup({ el, App, props, plugin }) {
        const { props: pageProps } = props.initialPage

        createApp({ render: renderApp(App, props) })
            .use(translation, {
                locale: pageProps.app?.locale
            })
            .use(darkMode, {
                locale: pageProps.app?.locale
            })
            .use(codrocket, {
                page: pageProps,
            })
            .use(plugin)
            .mount(el)
    },
})
