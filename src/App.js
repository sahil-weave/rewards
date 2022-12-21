import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Header } from './Components';
import { LandingPage, LoginSignup, Invalid, AdminPanel } from './Routes';
function App() {
  return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth" element={<LoginSignup />}></Route>
          <Route path="*" element={<Invalid/>} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </Router>
  );
}

export default App;
