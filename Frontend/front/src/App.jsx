import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'


function App() {
  const [pets, setPets] = useState([])

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const { data } = await axios.get('http://localhost:3000/api/pets')
        setPets(data)
      } catch (error) {
        console.error('Error pets :', error)
      }
    }
  
    fetchPets()
  }, [])

  return (
    <>
      {console.log(pets)}
      <div>My pet shop {pets.length} </div>
      {pets.map((pet) => (
        <div key={pet.id}>
          <h3>{pet.name} {pet.is_favorite && <span style={{ color: 'red' }}>*</span>} </h3>
          
        </div>
      ))}
      {
        <div>
          <span style={{ color: 'red' }}> * </span>
          <span> Is a favorite pet:</span>
        </div>
        


      }

    </>
  )
}

export default App
