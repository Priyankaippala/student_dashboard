import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Student from './pages/student';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div>
          <Routes>
            <Route path="/students/*" element={<Student />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;