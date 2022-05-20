import { useEffect, useState } from 'react'

export function useFetch(url: string): any {
  
  const [data, setData] = useState()
  const [error, setError] = useState()
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    
    setLoading(true)
    fetch(url)
    .then(response => response.json())
    .then(data => setData(data))
    .catch(error => setError(error))
    .finally(() => setLoading(false)) 
  }, [url])
  
  
  return {data, error, loading}
}
