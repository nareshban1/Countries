import React from 'react'
import { Route, Routes } from 'react-router';
import NavBar from './components/NavBar/NavBar';
import ThemeProvider from './contextAPI/ThemeProvider';
import Home from './pages/Home/Home';


const App = () => {
    return (
        <ThemeProvider >
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </ThemeProvider>
    )
}

export default App
