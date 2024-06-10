import React from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';

import { Card } from 'primereact/card';

const Home = () => (
    <div className="p-grid p-align-center p-justify-center" style={{ height: '100vh' }}>
        <Card title="Dashboard">
            <p>Welcome to the Dashboard!</p>
        </Card>
    </div>
);
const About = () => <h2>About Page</h2>;
const Contact = () => <h2>Contact Page</h2>;

const Navigation = () => {
    const navigate = useNavigate();

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <button onClick={() => navigate('/contact')}>Go to Contact</button>
                </li>
            </ul>
        </nav>
    );
};

const App1 = () => (
    <div>
        <Navigation />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    </div>
);

export default App1;
