import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Homepage from './pages/Homepage';
import About from './pages/About';
import './App.css';

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path='/' element={<Homepage/>}/>
                    <Route path='/about' element={<About/>}/>
                </Routes>
            </div>
        </Router>
    );
}


export default App;
