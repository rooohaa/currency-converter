import { useToast } from 'primevue/usetoast'

export function useAppToast() {
    const DEFAULT_LIFE = 3000
    const toast = useToast()

    return {
        success(message, summary = 'Успешно') {
            toast.add({
                severity: 'success',
                summary,
                detail: message,
                life: DEFAULT_LIFE,
            })
        },
        info(message, summary = 'Информация') {
            toast.add({
                severity: 'info',
                summary,
                detail: message,
                life: DEFAULT_LIFE,
            })
        },
        error(message, summary = 'Ошибка') {
            toast.add({
                severity: 'error',
                summary,
                detail: message,
                life: DEFAULT_LIFE,
            })
        },
    }
}
