import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {TextField} from '@mui/material'
import { Button } from '@mui/material'


function App() {
   

  return (
    <>
      <TextField
          required
          id="outlined-required"
          label="Nombre"
         
        />
          <TextField
          required
          id="outlined-required"
          label="Apellido"
         
        />
        <TextField
          required
          id="outlined-required"
          label="E-mail"
         
        />
        <p></p>
        <Button variant="contained">Enviar</Button>
    </>
  )
}

export default App
