import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/home';
import Form from './components/form';
import Success from './components/success';


function App() {
  
  // const { app, api } = useContext(FirebaseContext);
  // const foods = useSelector(state => state.foods);

  // useEffect(() => {
  //   api.getFoods();
  // }, [])

  return (
    <Router>
      <div className="App">
        <Routes>
            <Route path='/free-food' element={<Home />} exact/>
            <Route path='/free-food/submission' element={<Form/>} />
            <Route path='/free-food/success' element={<Success/>} />
        </Routes>
      </div>
    </Router>

  );
};

export default App;
