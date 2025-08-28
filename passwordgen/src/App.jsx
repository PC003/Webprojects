import { useState,useEffect} from 'react'
import './App.css'

function generateRandomPassword(length = 12, includeNumbers = true, includeSymbols = true) {
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numberChars = '0123456789';
  const symbolChars = '!@#$%^&*()_+~`|}{[]\\:;?><,./-=';

  let allChars = lowercaseChars;
  allChars += uppercaseChars;
  if (includeNumbers) allChars += numberChars;
  if (includeSymbols) allChars += symbolChars;

  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }

  return password;
}

function App() {
  const [ischecked, setischecked] = useState(false)
  const [charcheck, setcharcheck] = useState(false)
  const ans = generateRandomPassword(10, ischecked, charcheck);
  const [output, setoutput] = useState(ans)
  const [copied, setCopied] = useState(false)
   useEffect(() => {
    setoutput(generateRandomPassword(10, ischecked, charcheck));
  }, [ischecked, charcheck]);
  
  const handleCopy = () => {
    navigator.clipboard.writeText(output).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-[400px] text-center">
        
        <h1 className="text-2xl font-bold mb-6 text-gray-800">🔐 Password Generator</h1>

        <div className="p-4 border rounded-xl bg-gray-50 font-mono text-lg tracking-wider text-gray-800 shadow-inner mb-4">
          {output}
        </div>

        <button
          onClick={handleCopy}
          className="px-6 py-2 mb-6 bg-indigo-600 text-white font-semibold rounded-xl shadow-md hover:bg-indigo-700 transition-all"
        >
          {copied ? "Copied ✅" : "Copy Password"}
        </button>

        <div className="flex flex-col gap-3 items-start text-gray-700">
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={ischecked} onChange={(e) => setischecked(e.target.checked)} className="h-5 w-5 text-indigo-600 rounded"/>
            <span className="font-medium">Include Numbers</span>
          </label>

          <label className="flex items-center gap-2">
            <input type="checkbox" checked={charcheck} onChange={(e) => setcharcheck(e.target.checked)} className="h-5 w-5 text-indigo-600 rounded"/>
            <span className="font-medium">Include Symbols</span>
          </label>
        </div>
      </div>
    </div>
  )
}

export default App
