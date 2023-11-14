
import { Fragment } from 'react';
import './App.css';

import TallyCounter from './pages/tallyCounter';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <Fragment className="App">
     {/* <h1>Something went wrong .Please try after sometime.</h1> */}
    <Navbar/>
      <TallyCounter/>

    </Fragment>
  );
}

export default App;
