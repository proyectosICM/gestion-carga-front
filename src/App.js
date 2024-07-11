import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { routes } from './routes';
import { useEffect, useState } from 'react';
import "./styles/generalStyles.css";
import "./styles/graphicsStyles.css";
import "./styles/panelRegistrosCarga.css";
import NavBarG from './common/navbarG';

function App() {
  useEffect(() => {
    document.title = 'Gestion de Carga';
  }, []);

  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    const interval = setInterval(() => {
      const storedToken = localStorage.getItem("token");
      setToken(storedToken);
    }, 100);

    return () => {
      clearInterval(interval);
    }
  }, []);

  return (
    <div className="App">
      <Router>
      {token && (
          <NavBarG />
        )}
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} exact path={route.path} element={route.component}
            />
          ))}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
