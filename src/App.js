import './App.css';
import { Routes, Route} from 'react-router-dom';
import HomePage from './screens/HomePage';

function App() {
  return (
    <>
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        {/* <Route path='/SignUp' element={<LoginPage/>}/> */}
    </Routes>
    </>
  );
}

export default App;
