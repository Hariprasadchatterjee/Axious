/* eslint-disable react/prop-types */

export const SearchCom = ({handleSubmit,handleInput,intVal}) => {
  const {title,post} = intVal
  return (
  <div className="flex items-center justify-center gap-2 mt-5 src">
    <form action="" onSubmit={(e)=>handleSubmit(e)}>
    <input value={title}  type="search" name="title" id="" className="px-3 py-2 border-none outline-none" placeholder="Add Title" onChange={(e)=>handleInput(e)}/>
    <input value={post}  type="search" name="body" id="" className="px-3 py-2 border-none outline-none " placeholder="Add Post" onChange={(e)=>handleInput(e)}/>
    <button className="px-4 py-2 bg-green-500 rounded-sm">Add</button>
    </form>
  </div>
  )
}
