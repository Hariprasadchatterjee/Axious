import { useEffect, useState } from "react"
import { deletePosts, getPosts ,PostData } from "../api/Postapi"
import { PostTemplate } from "../ui/PostTemplate";
import { SearchCom } from "./SearchCom";


export const GetPost = () => {

  const [data,setData]=useState([]);
  const [intVal,setIintVal] = useState({
    title : "",
    body : "",
  })

  const  getApiData= async ()=> {
      const response = await getPosts()
      setData(response.data)
  }

  const deletPost= async (id)=>{
    
    try {
      const res = await deletePosts(id)
      // console.log(res);
      if (res.status===200) {
        const deletedData=data.filter( (curData)=>{
          if (curData.id!==id) {
            return curData;
          }
        })
        setData(deletedData)
      }
      
    } catch (error) {
      console.log(error);
      
    }
  }

  const handleInput=(e)=>{
    const name=e.target.name
    const value=e.target.value
    
    setIintVal( (prev)=> {
      return {...prev,[name]:value}
    })
  }
  
  const addPostData= async ()=>{
    const hari = await PostData(intVal)
    console.log(hari);
    if (hari.status===201) {
      setData([...data,hari.data])
    }
    
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    addPostData()
    // console.log(intVal);
    // setData( (prev)=>({...prev,intVal}))
  }

  useEffect( ()=>{
    getApiData()
  },[])
  return (
   
    <>
   <SearchCom handleInput={handleInput} intVal={intVal} handleSubmit={handleSubmit}/>
    <section className="mt-5">
      <div className="container max-w-[1200px] mx-auto">
        <ul className="grid justify-start grid-cols-3 gap-4 ">
          
    {
      data.map( (curPost)=>{
        return <PostTemplate data={curPost} key={curPost.id} handleDelete={deletPost} />
      })
    }
           </ul>
        </div>
      </section>
    </>

  )
}
