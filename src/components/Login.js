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

async function singupUser(credentials) {
    return fetch('http://localhost:8080/signup', {
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
    const [usernamecompleted, setUserNameCompleted] = useState();
    const [password, setPassword] = useState();
    const [passwordverified, setPasswordVerified] = useState();
    const [singup, setSingup] = useState(false);

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        setToken(token);
    }
    const handleSubmitPost = async n => {
        n.preventDefault();
        console.log('signup');
        await singupUser({
            username,
            usernamecompleted,
            password,
            passwordverified
        });
        setSingup(false);
    }

    const handleSingup = async h => {
        h.preventDefault();
        setSingup(true);
    }

    const handleSingin = async h => {
        h.preventDefault();
        setSingup(false);
    }

    if (singup) {
        return (
            <div className="body-class">
                <nav className="nav-class">
                    Social Club - Alta de Usuario
                </nav>
                <form className="container-class" onClick={handleSubmitPost}>
                    <div className="logo-box-class">
                        <img className="h-12 w-12" src={Logo} alt="Enterprise Logo" />
                    </div>
                    <div className="input-box-class">
                        <input className="input-text-class mb-2" type="text" placeholder="Nombre de Usuario" onChange={e => setUserName(e.target.value)} />
                        <input className="input-text-class mb-2" type="text" placeholder="Apellido y Nombre" onChange={e => setUserNameCompleted(e.target.value)} />
                        <input className="input-text-class mb-2" type="password" placeholder="Contraseña" onChange={e => setPassword(e.target.value)} />
                        <input className="input-text-class" type="password" placeholder="Vreificación Contraseña" onChange={e => setPasswordVerified(e.target.value)} />
                    </div>
                    <div className="btn-box-class">
                        <button className="btn-green-class" type="submit">Aceptar</button>
                        <button className="btn-red-class" onClick={handleSingin}>Cancelar</button>
                    </div>
                </form>
            </div>);
    }

    return (
        <div className="body-class">
            <nav className="nav-class">
                Social Club - Ingreso de Usuario
            </nav>
            <form className="container-class" onSubmit={handleSubmit}>
                <div className="logo-box-class">
                    <img className="h-12 w-12" src={Logo} alt="Enterprise Logo" />
                </div>
                <div className="input-box-class">
                    <input className="input-text-class mb-2" type="text" placeholder="Nombre de Usuario" onChange={e => setUserName(e.target.value)} />
                    <input className="input-text-class" type="password" placeholder="Contraseña" onChange={e => setPassword(e.target.value)} />
                </div>
                <div className="btn-box-class">
                    <button className="btn-blue-class" onClick={handleSingup}>Darse de Alta</button>
                    <button className="btn-green-class" type="submit">Entrar</button>
                </div>
            </form>
        </div>);
}

Login.prototype = {
    setToken: PropTypes.func.isRequired
}