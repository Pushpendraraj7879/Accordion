
const Button = (props) => {
     return (
    <div className=" flex flex-col gap-1">
    <div className='text-white bg-black flex  justify-between items-center w-[400px] px-4 py-2' >
        <div>{props.title}</div>
        <button onClick={props.onToggle} value={props.id} >{props.isOpen?"-":"+"}</button>
    </div>
    {props.isOpen && <div className="w-[400px] px-4 py-2 leading-4 border-2" >{props.content}</div>}
    </div>
  )
}

export default Button