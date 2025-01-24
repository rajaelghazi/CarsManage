import { router, usePage } from "@inertiajs/vue3"
import { useToast } from "primevue/usetoast"

export default () => {
    const toast = useToast()
    const page = usePage()

    router.on("finish", () => {
        const { notification } = page.props.app

        if (notification) {
            const { type, body } = notification
            const summaries = {
                error: "Error",
                warn: "Warning",
                success: "Success",
                info: "Information",
            }

            toast.add({ summary: summaries[type], severity: type, detail: body, life: 3000 })
        }
    })
}
