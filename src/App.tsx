

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { publicRoutes } from "./routes/routes";

function App() {
  return (
    <>
      
      <Router> 
        <p> <Link to="/">Quay lại</Link></p>
        <div className="App">
          <Routes>
            {publicRoutes.map((route, index) => {
              const Page = route.component;
              
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    
                      <Page />
                    
                  }
                />
              );
            })}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
