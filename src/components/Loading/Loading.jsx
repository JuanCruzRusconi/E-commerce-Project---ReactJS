import { useEffect } from "react"
import { Title } from "../Title/Title"

import "./Loading.css"

export const Loading = () => {

    useEffect(() => {
        console.log("loading")
        return (() => {
            console.log("terminado")
        })
    })

    return (
        
        <div className="loading-container">
            <Title title="CARGANDO..." />
        </div>
        
    )
}