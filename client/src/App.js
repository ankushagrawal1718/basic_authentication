// import react from 'react';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Register from './pages/Register';
import Login from './pages/Login';
import Quote from "./pages/Quote";

const App =()=>{
    return <div>
        <BrowserRouter>
            <Routes>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/quote' element={<Quote/>}/>
            </Routes>
        </BrowserRouter>
    </div>
}

export default App;