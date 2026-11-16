import { useEffect, useState } from "react"
import type { CharatersProps } from "../types/character"
import axios from "axios"
import { Alert, Box } from "@mui/material"
import Card from "../components/card"
import { Loading } from "../components/loading"


const Home = () => {
    const [character, setCharacter] = useState<CharatersProps[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)


    useEffect(() => {
        const fetchCharacter = async () => {
            try {
                const response = await axios.get("https://api.disneyapi.dev/character")
                setCharacter(response.data.data)
            }
            catch(err) {
                console.error(err)
                setError(true)
            }
            finally {
                setLoading(false)
            }
        }

        fetchCharacter()
    }, [])

    if(error) {
        return <Alert severity="error"> Erro ao buscar personagens...</Alert>
    }

    return (
        <Box sx={{ backgroundColor: "#040714", color: "white", minHeight: "100vh" }}>
            {loading &&  <Loading/>}
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: "1.5rem", justifyContent: "center", padding: "2rem" }}>
                {character.map((item) => (
                    <Card key={item._id} _id={item._id} name={item.name} imageUrl={item.imageUrl}/>
                ))}
            </Box>
        </Box>
    )
}

export default Home
