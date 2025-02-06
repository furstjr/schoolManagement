import { useEffect } from "react"
import { useRouter } from "next/router"

const Homepage = () => {
  const router = useRouter()

  useEffect(() => {
    router.replace("/admin")
  }, [])

  return null
  // return (
  //   <div className=''>Homepage</div>
  // )
}

export default Homepage