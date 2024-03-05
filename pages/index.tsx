import { useEffect, useState } from 'react'

export default function Home() {
  const [message, setMessage] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/bible-ref?book=exo&chap=20&v1=1&v2=undefined')
      const { message } = await res.json()
      setMessage(message.vers[0].v)
    }
    fetchData()
  }, [])

  if (!message) return <p>Loading...</p>

  return <p>{message}</p>
}
