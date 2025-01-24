export default {
    install(app, { locale }) {
        const dir = locale == "ar" ? "rtl" : "ltr"
        document.querySelector("html").setAttribute("dir", dir)

        const htmlElement = document.documentElement
        const dark = localStorage.getItem("theme")

        const method = dark == "Dark" ? "add" : "remove"
        htmlElement.classList[method]("dark")
    },
}
