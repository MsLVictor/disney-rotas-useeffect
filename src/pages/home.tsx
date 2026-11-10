import { useEffect, useState } from "react"
import type { CharatersProps } from "../types/character"
import axios from "axios"

const Home = () => {
    const [character, setCharacter] = useState<CharatersProps | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        fetchCharacter()
    }, [])

    const fetchCharacter = async () => {
        try {
            const response = await axios.get("https://api.disneyapi.dev/character")
            setCharacter(response.data.data)
        }
        catch (error) {
            setError(true)
        }
        finally {
            setLoading(false)
            console.log(character)
        }

    }

    
    return (
        <div>Home
        </div>
    )
}

export default Home