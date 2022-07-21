import React, { useState } from 'react';
import Logo from './logo.svg';
import PropTypes from 'prop-types';
import '../App.css';

async function loginUser(credentials) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [singup, setSingup] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }
  const btnAlta = () => {
    window.alert('Alta');
  }

  const handleSingup = () => {
    setSingup(true);
  }

  const handleSingin = () => {
    setSingup(false);
  }

  if (singup) {
    return (<div className="flex flex-col items-center min-h-screen bg-base-color">
      <nav className="text-center text-black bg-nav-base-color border-black border-y-2 p-6 w-full">
        Social Club
      </nav>
      <form className="flex flex-col items-center pb-4 px-6 m-16 rounded-lg shadow-slate-300 bg-cyan-base border-2 border-black max-w-sm" onSubmit={btnAlta}>
        <div className="bg-nav-base border-black border-x-2 border-b-2 w-full mb-2 grid justify-items-center rounded-b-lg">
          <img className="h-12 w-12" src={Logo} alt="Enterprise Logo" />
        </div>
        <div className="p-2 grid justify-items-center bg-brown-base border-2 border-black w-full rounded-lg">
          <input className="text-slate-300 text-black w-full p-2 border-2 border-black rounded-lg mb-2" type="text" placeholder="Nombre de Usuario" onChange={e => setUserName(e.target.value)} />
          <input className="text-slate-300 text-black w-full p-2 border-2 border-black rounded-lg mb-2" type="text" placeholder="Nombre de Usuario" onChange={e => setUserName(e.target.value)} />
          <input className="text-slate-300 text-black w-full p-2 border-2 border-black rounded-lg" type="password" placeholder="Contraseña" onChange={e => setPassword(e.target.value)} />
          <input className="text-slate-300 text-black w-full p-2 border-2 border-black rounded-lg" type="password" placeholder="Contraseña" onChange={e => setPassword(e.target.value)} />
        </div>
        <div className="flex flex-row space-x-4 pt-3">
          <button className="bg-green-500 border-black border-2 hover:bg-green-700 text-white py-2 px-6 rounded-lg" type="submit">Aceptar</button>
          <button className="bg-red-500 border-black border-2 hover:bg-red-700 text-white py-2 px-6 rounded-lg" onClick={handleSingin}>Cancelar</button>
        </div>
      </form>
    </div>);
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-base-color">
      <nav className="text-center text-black bg-nav-base-color border-black border-y-2 p-6 w-full">
        Social Club
      </nav>
      <form className="flex flex-col items-center pb-4 px-6 m-16 rounded-lg shadow-slate-300 bg-cyan-base border-2 border-black max-w-sm" onSubmit={handleSubmit}>
        <div className="bg-nav-base border-black border-x-2 border-b-2 w-full mb-2 grid justify-items-center rounded-b-lg">
          <img className="h-12 w-12" src={Logo} alt="Enterprise Logo" />
        </div>
        <div className="p-2 grid justify-items-center bg-brown-base border-2 border-black w-full rounded-lg">
          <input className="text-slate-300 text-black w-full p-2 border-2 border-black rounded-lg mb-2" type="text" placeholder="Nombre de Usuario" onChange={e => setUserName(e.target.value)} />
          <input className="text-slate-300 text-black w-full p-2 border-2 border-black rounded-lg" type="password" placeholder="Contraseña" onChange={e => setPassword(e.target.value)} />
        </div>
        <div className="flex flex-row space-x-4 pt-3">
          <button className="bg-blue-500 border-black border-2 hover:bg-blue-700 text-white py-2 px-6 rounded-lg" onClick={handleSingup}>Darse de Alta</button>
          <button className="bg-green-500 border-black border-2 hover:bg-green-700 text-white py-2 px-6 rounded-lg" type="submit">Entrar</button>
        </div>
      </form>
    </div>);
}

Login.prototype = {
  setToken: PropTypes.func.isRequired
}