import { useEffect, useState } from 'react';
import { FunctionComponent } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';

import { useDispatch } from 'react-redux';

import NavBar from './components/nav-bar';
import NotFoundPage from './pages/not-found';
import HomePage from './pages/home';
import ContactPage from './pages/contact';
import CollaborationPage from './pages/collaboration';


const App: FunctionComponent = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/collaboration" element={<CollaborationPage/>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
