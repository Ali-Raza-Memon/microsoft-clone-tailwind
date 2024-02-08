import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Microsoft from '../components/Microsoft';

const AppRouter = () =>{
    return(
        <>
        
       
        <Router>
    
        
            <Routes>
                <Route path="/" element={<Microsoft />} />
            </Routes>
           
        </Router>
        </>
    )

}

export default AppRouter;