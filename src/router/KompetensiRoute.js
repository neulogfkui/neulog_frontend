import KompetensiForm from "@/views/KompetensiForm.vue"

let routes = [
    {
        path: '/kompetensiform/:operation',
        name: 'KompetensiForm',
        component: KompetensiForm,
    }
]

export default routes;