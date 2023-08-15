import { useQuery } from '@tanstack/react-query'
import useAuth from './useAuth'


 let useOrderLists=()=> {
  const{user}=useAuth()
const { refetch, data: orderlists = [] } = useQuery({
    queryKey: ['orderlists',user?.email],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/orderlists?email=${user?.email}`)
      return res.json()
    },
  })

  return [refetch, orderlists]
}
export default useOrderLists