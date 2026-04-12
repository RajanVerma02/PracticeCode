import { useState } from 'react'
import './App.css';
function App() {
  const colorList = ['Lightseagreen', 'Pink','Lightsteelblue', 'Teal', 'Mediumvioletred',   'Aqua', 'Darkseagreen','Seagreen','Palevioletred'];
  const [color, setColor] = useState(colorList[0])
  
const setbgcolor = (color) =>{
  
  setColor(color);
}
  return (
    <>
      <div className="W-full h-screen duration-200" style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-content gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            {colorList.map((color, index) => (
              <button
                className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                style={{ backgroundColor: color }}
                onClick={()=>setbgcolor(color)}> {color}
              </button>
            ))}

          </div>
        </div>
      </div>
    </>
  )
}

export default App
