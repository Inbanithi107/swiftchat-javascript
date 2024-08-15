import { Route, Routes } from 'react-router-dom';
import HomePage from './Component/HomePage';
import Status from './Component/Status.jsx/Status';
import StatusViewer from './Component/Status.jsx/StatusViewer';
import Signin from './Component/Register/Signin';
import Signup from './Component/Register/Signup';


function App() {
  return (
    <div className="App">
      
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/status' element={<Status />}></Route>
          <Route path='status/:userid' element={<StatusViewer />}></Route>
          <Route path='/signin' element={<Signin />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
        </Routes>

    </div>
  );
}

export default App;
