import './App.css';
import { Routes, Route} from 'react-router-dom'
import Login from './components/Login';
import Header from './components/Header';

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Login />}>
      </Route>
    </Routes>
    </>
  );
}

export default App;
