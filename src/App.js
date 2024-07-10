import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { routes } from './routes';
import { useEffect } from 'react';
import "./styles/generalStyles.css";
import "./styles/graphicsStyles.css";
import "./styles/panelRegistrosCarga.css";

function App() {
  useEffect(() => {
    document.title = 'Gestion de Carga';
  }, []);

  return (
    <div className="App">
      <Router>
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
