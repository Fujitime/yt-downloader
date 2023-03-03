import { useState } from "react";
function App() {
  const [link, setLink] = useState("")
  const [currentLink, setCurrentLink] =useState()
    
  function handleChangeText(text){
      setLink(text.target.value)
    }

  function handleSubmit (){
    setCurrentLink(link)
  }

    return (
    <div className="flex w-full h-screen flex-col">
       <div className="flex-m3">
        <input type="text"
        className="border-2 border-black rounded w-full mr-2 p-3"
        placeholder="Masukan link youtube disini..."
        onChange={handleChangeText}
        /> 
        <button className="bg-blue-400  p-3 rounded border-2 border-black " onClick={handleSubmit} >
        <p className="text-white font-bold" >Submit</p>
        </button>

       </div>

  <iframe id="widgetApi"
   src={`https://convert2mp3s.com/api/widget?url=${currentLink}`} 
   width="100%"
   height="100%"
   allowtransparency="true"  
   style={{border: "none"}}>
   </iframe>


    </div>
  );
}

export default App;
