export const Button=({label,onClick})=>{
    return(
    <button onClick={onClick}  className="w-full text-white bg-blue-800 hover:bg-blue-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
    {label}
  </button>
    )
}