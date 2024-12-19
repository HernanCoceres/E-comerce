import { getFirestore, collection, getDocs } from "firebase/firestore"
import { app } from "./config.js"

const db = getFirestore(app)

export const getProducts = async () => {
    try {
        const documents = await getDocs(collection(db, "items"))
        const products = []

        documents.forEach((doc) => {
            products.push({ id: doc.id, ...doc.data() })
        })

        return products
    } catch (error) {
        console.error("Error al obtener los productos:", error)
        return []
    }
}