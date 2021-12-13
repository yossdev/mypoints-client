import logo from './logo.svg'
import './App.css'

import { MdDeleteForever } from 'react-icons/md'

function App() {
  return (
    <>
      <h1 className="text-3xl text-blue-600 font-bold underline">
        Hello agents!
      </h1>
      <button
        type="button"
        className="bg-LightYellow2 rounded-full p-1"
        aria-label="Delete"
      >
        <MdDeleteForever color="red" size="1.75rem" />
      </button>
    </>
  )
}

export default App
