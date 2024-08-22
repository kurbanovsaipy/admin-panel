import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import MainContainer from './MainContainer';
import NotesPopUp from './components/popups/NotesPopUp';
import CategoriesPopUp from './components/popups/CategoriesPopUp';
import Calendar from './components/popups/Calendar';


const App = () => {

  return (
    <div className='main_wrapper'>

      <Router>
        
        <Dashboard />

        <MainContainer />

      </Router>

      {/*---- Всплывающие окна -----*/}
      <NotesPopUp />
      <CategoriesPopUp />
      <Calendar />

    </div>
  );
};

export default App;