const AuthCardLogin = ({ title, body, selected, onClick }) => {

  return (
    <>
      <div 
        onClick={onClick} 
        className={`w-sm rounded-lg p-4 m-2 cursor-pointer border-2 transition-all duration-200 ${
          selected === title 
          ? "border-purple-500 bg-purple-50" : 
          "border-gray-200 bg-white hover:border-gray-300"
        }`}>
            <p className={`font-semibold ${selected === title ? "text-purple-600" : "text-gray-800"}`}>
              {title}
            </p>
            <p className="text-sm text-gray-500">{body}</p>
      </div>
    </>
  )
}

export default AuthCardLogin
