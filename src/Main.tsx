import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Cards, Error404, Forgot, Login, Packs, Profile, Register, SetPass} from "./m1-main/n1-ui/App";
import {TestComponent} from "./TestComponent";

export const Main = () => {
    return (
        <div>
            main
            <Routes>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/forgot' element={<Forgot/>}/>
                <Route path='/set-pass' element={<SetPass/>}/>
                <Route path='/profile' element={<Profile/>}/>
                <Route path='/packs' element={<Packs/>}/>
                <Route path='/cards' element={<Cards/>}/>
                <Route path='/error404' element={<Error404/>}/>
                <Route path='/test-components' element={<TestComponent/>}/>
            </Routes>
        </div>
    );
};
