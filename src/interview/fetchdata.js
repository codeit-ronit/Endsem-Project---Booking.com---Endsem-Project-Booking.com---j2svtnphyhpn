import {useEffect, useState} from 'react'
function FetchData(){
  const [array, setarray] = useState([])
  const [search, setsearch] = useState('')
  const [thumbnail, setthumbnail] = useState('')
//   console.log(1,array)
//   console.log(search)
//   console.log(thumbnail)
  function handlesearch(e){
     setsearch(e.target.value)
  }
  function btnseach(){
    if (search){
        array.forEach((arr)=>{
            console.log(arr)
            if (arr.title==search){
                setthumbnail(arr.price)
            }
        })
     }
  }
  useEffect(()=>{
    fetch('https://dummyjson.com/products/search?q=mobile')
    .then(response=>response.json())
    .then((data)=>setarray(data.products))
  },[])
  return(
    <div className='bg-[gray] text-white'>
      <label>Search</label>
      <input
        type="text"
        value={search}
        onChange={handlesearch}
        className='text-black'
      />
      <button onClick={btnseach}>Click</button>
      <div>{thumbnail}</div>
      fetchedData
    </div>
  )
}

export default FetchData