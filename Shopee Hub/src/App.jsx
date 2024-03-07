import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loginpage from './pages/Public/Loginpage';
import { Login } from './utils/Path_Url';
import MainLayout from './Routes/MainLayout'; 
import PrivateRoute from './utils/PrivateRoute';

function App() {
  return (
   
      <Routes>
        <Route path={Login} element={<Loginpage />} />
        <Route path="/" element={<PrivateRoute><MainLayout/></PrivateRoute>} />
      </Routes>
 
  );
}

export default App;
