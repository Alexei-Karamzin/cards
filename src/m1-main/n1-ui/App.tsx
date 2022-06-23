import React from 'react';
import {NavLink} from 'react-router-dom';
import {Main} from '../../Main';

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
            <NavLink to='/set-pass'>SetPass</NavLink>
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
        <div>
            <NavLink to='/test-components'>test components</NavLink>
        </div>
    </div>
}

function App() {
    return (
        <div className="App">
                <Navbar/>
                <Main/>
        </div>
    );
}

export default App;


export const Login = () => {
    return <div>
        <input/>
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