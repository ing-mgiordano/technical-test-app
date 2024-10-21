import { useEffect, useState } from "react"

export default function useFetchData( url ) {
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: false,
    })

    useEffect(() => {
        const fetchData = async () => {
            try {
                setState((prevState) => ({
                    ...prevState,
                    isLoading: true
                }))
                const resp = await fetch(url)
                const data = await resp.json()
                setState((prevState) => ({
                    ...prevState,
                    data
                }))
            } catch (error) {
                setState((prevState) => ({
                    ...prevState,
                    hasError: true
                }))
            } finally {
                setState((prevState) => ({
                    ...prevState,
                    isLoading: false
                }))
            }
        }
        fetchData()
    }, [url])

  return state
  
}
