import { useEffect } from "react"
import { Title } from "../Title/Title"

export const Loading = () => {

    useEffect(() => {
        console.log("loading")
        return (() => {
            console.log("terminado")
        })
    })

    return (

        <Title title="Cargando..." />
        
    )
}