import React, { useState } from 'react';
import Logo from './logo.svg';
import PropTypes from 'prop-types';
import '../App.css';

const BtnAlta = () => {
  window.alert('Alta');
}

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

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }

  return (
    <div className="App-header">
      <form className="bg-white flex flex-col items-center pb-4 px-6 m-6 rounded-lg shadow-slate-300 bg-gray-500 border-2 border-black" onSubmit={handleSubmit}>
        <div className="bg-orange-500 border-black border-x-2 border-b-2 w-full mb-2 grid justify-items-center rounded-b-lg">
          <img className="h-12 w-12" src={Logo} alt="Enterprise Logo" />
        </div>
        <div className="p-2 grid justify-items-center bg-gray-700 border-2 border-black w-full rounded-lg">
          <input className="text-slate-300 text-black w-full p-2 border-2 border-black rounded-lg mb-2" type="text" placeholder="Nombre de Usuario" onChange={e => setUserName(e.target.value)} />
          <input className="text-slate-300 text-black w-full p-2 border-2 border-black rounded-lg" type="password" placeholder="Contraseña" onChange={e => setPassword(e.target.value)} />
        </div>
        <div className="flex flex-row space-x-4 pt-3">
          <button className="bg-green-500 border-black border-2 hover:bg-green-700 text-white py-2 px-6 rounded-lg" onClick={BtnAlta}>Sing In</button>
          <button className="bg-blue-500 border-black border-2 hover:bg-blue-700 text-white py-2 px-6 rounded-lg" type="submit">Login</button>
        </div>
      </form>
    </div>);
}

Login.prototype = {
  setToken: PropTypes.func.isRequired
}