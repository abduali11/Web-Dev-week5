import './App.css';
import Home from './views/Home';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import {Profile} from './views/Profile';
import Upload from './views/Upload';
import Layout from './views/Layout';
import Single from './views/Single';
import Login from './views/Login';
import { UserProvider } from './contexts/UserContext';

const App = () => {
  return (
      <Router basename={import.meta.env.BASE_URL}>
      <UserProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="/login" element={<Login/>}/>
          <Route index element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/media/:id" element={<Single />} />
          <Route path="/single" element={<Single />} />
        </Route>
      </Routes>
      </UserProvider>
    </Router>
  );
};

export default App;
