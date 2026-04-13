import { useCallback, useEffect, useState,useRef } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [allowNumner, setAllowNumber] = useState(false);
  const [allowCharacter, setAllowCharacter] = useState(false);
  const [password, setPassword] = useState("")

  const passGen = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let pass = "";
    if (allowNumner) str = str + "0123456789";
    if (allowCharacter) str = str + "~!@#$%^&*()_+=-{}[]`";

    for (let i = 1; i <= length; i++) {
      pass = pass + str[Math.floor(Math.random() * str.length + 1)]
    }
    setPassword(pass);
  },
    [length, allowNumner, allowCharacter, setPassword]
  );

  const copypasswordtoClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 9999);
    window.navigator.clipboard.writeText(password);
  },[password]);
  const passwordRef = useRef(null);

  useEffect(() => {
    passGen();
  }, [length, allowNumner, allowCharacter, passGen]);


  return (
    <>
      <div className="w-full max-w-md mx-auto p-4 shadow-md rounded-lg mt-10">
        <div className="bg-gray-800 text-orange-500 p-4 rounded-lg">
          <input
            type="text"
            value={password}
            readOnly
            placeholder="Password"
            className="w-full p-2 mb-4 text-center text-lg font-bold bg-gray-700 rounded-md"
          />
          <button
            onClick={copypasswordtoClipboard}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-4"
          >
            Copy to Clipboard
          </button>
          {/* <button
            onClick={passGen}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded mb-4"
          >
            Generate Password
          </button> */}
          <div className="mb-4">
            <label className="block mb-2">Password Length: {length}</label>
            <input
              type="range"
              min="4"
              max="20"
              value={length}
              onChange={(e) => setlength(e.target.value)}
              className="w-full"
            />
          </div>
          <div className="mb-4 flex flex-row justify-content-start items-center">
            <label className="block mb-2">
              <input
                type="checkbox"
                checked={allowNumner}
                onChange={(e) => setAllowNumber(e.target.checked)}
                className="mr-2"
              />
              Include Numbers
            </label>
            <label className="block mb-2">
              <input
                type="checkbox"
                checked={allowCharacter}
                onChange={(e) => setAllowCharacter(e.target.checked)}
                className="mr-2"
              />
              Include Special Characters
            </label>  
        </div>
      </div>
      </div>
    </>
  )
}

export default App
