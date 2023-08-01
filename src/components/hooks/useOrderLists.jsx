import { useQuery } from '@tanstack/react-query'


export default function useOrderLists() {
const { refetch, data: orderlists = [] } = useQuery({
    queryKey: ['orderlists'],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/orderlists`)
      return res.json()
    },
  })

  return [refetch, orderlists]
}
