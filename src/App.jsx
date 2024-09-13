import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const userName = "Mateen Gaba"
  const userImg = "https://avatars.githubusercontent.com/u/121400907?s=400&u=a67cd1489887024ff23b46dfd5510360c6ac29d4&v=4"
  const loggedin = false

  const products = [
    {
      name: "mango",
      Key: 1
    },
    {
      name: "Banana",
      Key: 2
    },
    {
      name: "Oringe",
      Key: 3
    },

  ]


  return (//1 element return hon ga. 1 se zayada return nahi ho ga. each element close
    <div>

      <h1>Hello {userName}</h1>
      <img
        src={userImg}
        height={200}
        width={200}
        alt="Hedy Lamarr"
        className="photo"
      />

      <ul>
        
        { products.map((data) => (
            <li key={data.Key}>{data.name}</li>
          ))}
      </ul>


      <br />
      {/*(condition) user login true hai to logout ahi. warna logout ahe. */}
      <button>
        {loggedin ? "Logout" : "Login"}
      </button>

    </div>
  )
}

export default App
