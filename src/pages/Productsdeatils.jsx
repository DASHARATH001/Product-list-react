// import React, { useEffect, useState } from 'react'
// import { Link, useParams } from 'react-router-dom'

// const Productsdeatils = () => {

//   const [product,setProduct] = useState();
//   const [loading,setLoading] = useState(true);
//   const {id} = useParams();

// const fetchProduct=async ()=>{
//   try {
//     const res = await fetch(`https://fakestoreapi.com/products/${id}`);
//     const data = await res.json();
//     setProduct(data);
//     setLoading(false);
//   } catch (error) {
//     console.log(error);
//     setLoading(false)  
//   }
// }

// useEffect(()=>{
//   fetchProduct()
// },[id])

// if(loading){
//   return <h2 className='text-center mt-20 text-xl'>loading.....</h2>
// }

// if(!product){
//   return <h2 className='text-center mt-20 text-xl' >Product not Found...!</h2>
// }


//   return (
//     <div className='flex '>
//       <img src={product.image} />
//       <div>
//         <h2>{product.title}</h2>
//         <p>{product.description}</p>
//         <h3>₹ {product.price}</h3>
//         <p>{product.category}</p>
//        <Link to='/' >back product</Link>
//       </div>
//     </div>
//   )
// }

// export default Productsdeatils

import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const ProductDetails = () => {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const { id } = useParams()

  const fetchProduct = async () => {
    try {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`)
      const data = await res.json()
      setProduct(data)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProduct()
  }, [id])

  if (loading) {
    return <h2 className='text-center mt-20 text-xl text-gray-600'>Loading...</h2>
  }

  if (!product) {
    return <h2 className='text-center mt-20 text-xl text-red-600'>Product Not Found!</h2>
  }

  return (
    <div className='max-w-5xl mx-auto p-6 flex flex-col md:flex-row gap-8'>
      

      {/* Product Image */}
      <img
        src={product.image}
        alt={product.title}
        className='w-full md:w-1/2 h-96 object-contain'
      />

      {/* Product Details */}
      <div className='flex-1 flex flex-col gap-4'>
        <h2 className='text-3xl font-bold'>{product.title}</h2>
        <p className='text-gray-500 '>{product.category}</p>
        <h3 className='text-2xl font-semibold text-green-600'> ${product.price}</h3>
        <p className='text-gray-700'>{product.description}</p>

        <Link
          to='/'
          className='mt-4 inline-block bg-slate-800 text-white px-6 py-2 
          rounded-lg hover:bg-slate-900 transition text-center'
        >
          ⬅ Back to Products
        </Link>
       
      </div>
    </div>
  )
}

export default ProductDetails

