import { ModalLink } from "@inertiaui/modal-vue"
import { Link } from "@inertiajs/vue3"

import ToastService from "primevue/toastservice"
import VueApexCharts from "vue3-apexcharts"
import KeyFilter from "primevue/keyfilter"
import PrimeVue from "primevue/config"

import { route } from "../../../vendor/tightenco/ziggy"
import { Ziggy } from "@scripts/routes.js"

import primeVueConfig from "./configs/prime-vue.js"
import * as Components from "./components"

export default {
    install(app, { page }) {
        rgisterZiggy(app, page.auth)
        registerAsset(app, page.app.url)

        registerGlobalDirectives(app)
        registerGlobalComponents(app)
        registerPlugins(app)
    },
}

function rgisterZiggy(app, auth) {
    const $route = (name, params = {}) => {
        return route(name, params, true, Ziggy)
    }

    app.config.globalProperties.$route = $route
    window.$route = $route
}

function registerAsset(app, url) {
    const asset = (path, absolute = false) => {
        if (!path) return '/assets/images/placeholder.jpg';

        if (absolute) return `${url}/${path}`

        return `${url}/storage/${path}`
    }

    app.config.globalProperties.$asset = asset
    window.$asset = asset
}

function registerPlugins(app) {
    app.use(PrimeVue, primeVueConfig)
    app.use(VueApexCharts)
    app.use(ToastService)
}

function registerGlobalComponents(app) {
    app.component("ModalLink", ModalLink)
    app.component("Link", Link)

    const registerAll = ([name, Component]) => {
        app.component(name, Component)
    }

    Object.entries(Components).forEach(registerAll)
}

function registerGlobalDirectives(app) {
    app.directive("keyfilter", KeyFilter)
}
