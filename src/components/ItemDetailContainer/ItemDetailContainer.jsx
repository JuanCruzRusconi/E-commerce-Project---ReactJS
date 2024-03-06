import { useEffect, useState } from "react"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { Loading } from "../Loading/Loading"
import { doc, getDoc, getFirestore } from "firebase/firestore"
import { Title } from "../Title/Title"

import "./ItemDetailContainer.css"

export const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const { pid } = useParams()
    
    
    useEffect(() => {

        const dbFirestore = getFirestore()
        const queryDoc = doc(dbFirestore, "productos", pid)

        getDoc(queryDoc)
            .then(res => setProduct({ id: res.id, ...res.data() }))
            .catch(err => console.log(err))
            .finally(() => setIsLoading(false))
    })

    return (
        
        <div className="item-detail-container">

            <Title title="DETALLE DE PRODUCTO"/>
            {isLoading ?
                <Loading />
                :
                <>
                    <ItemDetail producto={product} />
                </>  
            }

        </div>

    )
} 
