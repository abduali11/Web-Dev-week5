import './App.css';
import Home from './components/Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Profile } from './components/Profile';
import Upload from './components/Upload';
import { Layout } from './components/Layout';
import Single from './components/Single';


const App = () => {
  return (
      <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/media/:id" element={<Single />} />
          <Route path="/single" element={<Single />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
