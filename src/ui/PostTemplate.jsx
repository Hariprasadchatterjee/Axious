

export const PostTemplate = ({data,handleDelete}) => {
  const {id,title,body} = data;
  return (
      <li className="flex flex-col items-center justify-start w-full gap-4 px-3 py-2 text-white border-l-2 bg-slate-700 ">
          <p className="text-start">{id}</p>
          <h1>{title}</h1>
          <p>{body}</p>
          <div className="flex items-center justify-start gap-4 btns justify-items-start justify-self-start ">
            <button className="px-4 py-1 bg-green-500 rounded-sm">Edit</button>
            <button onClick={()=>handleDelete(id)} className="px-4 py-1 bg-red-500 rounded-sm">Delete</button>
          </div>
      </li>
  )
}
