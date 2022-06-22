import React from 'react';
import { NavLink } from 'react-router-dom';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import {Main} from './Main';

export const Navbar = () => {
    return <div>
        <div>
            <NavLink to='/'>Main</NavLink>
        </div>
        <div>
            <NavLink to='/login'>Login</NavLink>
        </div>
        <div>
            <NavLink to='/register'>Register</NavLink>
        </div>
        <div>
            <NavLink to='/forgot'>Forgot</NavLink>
        </div>
        <div>
            <NavLink to='/setPass'>SetPass</NavLink>
        </div>
        <div>
            <NavLink to='/profile'>Profile</NavLink>
        </div>
        <div>
            <NavLink to='/packs'>Packs</NavLink>
        </div>
        <div>
            <NavLink to='/cards'>Cards</NavLink>
        </div>
        <div>
            <NavLink to='/error404'>Error404</NavLink>
        </div>
    </div>
}

function App() {
    return (
        <div className="App">
            <div><Navbar /></div>
            <div>
                <Routes>
                    <Route path='/' element={<Main/>} />
                    <Route path='/login' element={<Login/>} />
                    <Route path='/register' element={<Register/>} />
                    <Route path='/forgot' element={<Forgot/>} />
                    <Route path='/setPass' element={<SetPass/>} />
                    <Route path='/profile' element={<Profile/>} />
                    <Route path='/packs' element={<Packs/>} />
                    <Route path='/cards' element={<Cards/>} />
                    <Route path='/error404' element={<Error404/>} />
                </Routes>
            </div>
        </div>
    );
}

export default App;


export const Login = () => {
    return <div>
        <input />
        <input type="password"/>
        <div>
            <input type="checkbox"/> remember me
        </div>
        <button>sign in</button>
    </div>
}

export const Register = () => {
    return <div>
        <input type="text"/>
        <input type="text"/>
        <input type="text"/>
        <button>sign up</button>
        <NavLink to='/login'>login</NavLink>
    </div>
}

export const Forgot = () => {
    return <div>
        Forgot

        <input type="text"/>
        <button>send</button>
        <NavLink to='/login'>login</NavLink>
    </div>
}

export const SetPass = () => {
    return <div>
        SetPass

        <input type="text"/>
        <input type="text"/>
        <button>setPass</button>
        <NavLink to='/login'>login</NavLink>
    </div>
}

export const Profile = () => {
    return <div>
        Profile
    </div>
}

export const Packs = () => {
    return <div>
        Packs
    </div>
}

export const Cards = () => {
    return <div>
        Cards
    </div>
}

export const Error404 = () => {
    return <div>
        Error404
    </div>
}