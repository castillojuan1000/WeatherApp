import { useState, useEffect } from 'react'


const useFetch = (initialUrl) => {

  const [url, updateUrl] = useState(initialUrl)
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  // const [refetchIndex, setRefetchIndex] = useState(0)


  // const refetch = () => setRefetchIndex((prevRefetchIndex) => prevRefetchIndex + 1)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const response = await fetch(url)
        const result = await response.json()
        if (response.ok) {
          setData(result)
        } else {
          setHasError(true)
          setErrorMessage(result)
        }
        setIsLoading(false)
      } catch (err) {
        setHasError(true)
        setErrorMessage(err.message)

      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [url])
  return { data, isLoading, hasError, errorMessage, updateUrl }
}
export default useFetch