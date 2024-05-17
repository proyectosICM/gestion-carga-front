import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { routes } from './routes';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = 'Monitoreo de Camiones';
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
