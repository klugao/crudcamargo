import Account from './components/account/account'
import Main from './components/main/main'
import CriarPublicacao from './components/admin/CriarPublicacao'
import Login from './components/login/login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    // <div>
    //   <Header></Header>
    //   {/* <Main></Main> */}
    //   <Login></Login>
    // </div>

    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/admin" element={<CriarPublicacao />} />
        <Route path="/perfil" element={<Account />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
