import { useToast } from 'primevue/usetoast'

export function useAppToast() {
    const toast = useToast()

    return {
        success(message, summary = 'Успешно') {
            toast.add({
                severity: 'success',
                summary,
                detail: message,
                life: 3000,
            })
        },
        error(message, summary = 'Ошибка') {
            toast.add({
                severity: 'error',
                summary,
                detail: message,
                life: 4000,
            })
        },
    }
}
