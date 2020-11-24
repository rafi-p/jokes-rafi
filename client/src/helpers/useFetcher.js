import { useState, useEffect } from 'react'

function useFetch(url) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    const random = (urlRandom) => {
        setLoading(true)
        fetch(urlRandom, {
          method: 'GET'
        })
          .then(res => {
            if(res.ok) {
              return res.json()
            } else {
              return Promise.reject({
                status: res.status,
                statusText: res.statusText
              })
            }
          })
          .then(data => {
            console.log('Success:', data);
            setData(data)
            setLoading(false)
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      }

    useEffect(() => {
        random(url)
    }, [url])

    return [data, loading, random]
}

export default useFetch