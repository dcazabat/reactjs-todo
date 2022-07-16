import React from 'react';
import logo from '../logo.svg';

class Login extends React.Component {
    render() {
        const Alta = () => {
            window.alert('Alta');
        }

        const Login = () => {
            window.alert('Login');
        }

        return (
            <div class="bg-white flex flex-col items-center pb-6 px-6 m-6 rounded-lg shadow-slate-300 border-2 border-black">
                <div class="bg-black w-full mb-2 grid justify-items-center rounded-b-lg">
                    <img class="h-12 w-12" src={logo} alt="Enterprise Logo" />
                </div>
                <div class="p-2 grid justify-items-center border-2 border-blue w-full rounded-lg">
                    <input class="text-slate-300 text-black w-full p-2 border-2 rounded-lg mb-2" type="text" placeholder="Nombre de Usuario" />
                    <input class="text-slate-300 text-black w-full p-2 border-2 rounded-lg" type="password" placeholder="Contraseña" />
                </div>
                <div class="flex flex-row space-x-4 pt-2">
                    <button class="bg-green-500 hover:bg-green-700 text-white py-2 px-6 rounded-lg" onClick={Alta}>Sing In</button>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-6 rounded-lg" onClick={Login}>Login</button>
                </div>
            </div>
        )
    }
}
