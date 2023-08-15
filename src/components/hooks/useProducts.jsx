import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import { FunctionProvider } from '../Functions/Functions'



let useProducts=() =>{
  const{ searchValue,categoryValue
}=useContext(FunctionProvider)
    const { refetch, data: products = [] } = useQuery({
        queryKey: ['products',searchValue,categoryValue],
        queryFn: async () => {
          const res = await fetch(`http://localhost:5000/products?search=${searchValue}&category=${categoryValue}`)
          return res.json()
        },
      })
    
      return [refetch, products]
}
export default useProducts