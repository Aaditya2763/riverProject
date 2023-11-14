
import { Fragment } from 'react';
import './App.css';
import Title from './components/title/title';
import InputBox from './components/input/input';
import ButtonBox from './components/buttons/buttons';

function App() {
  return (
    <Fragment className="App">
     
     <div className='Box'>
       <Title/>
       
      <InputBox/>
      <div className='buttons'>
      <ButtonBox/>
      </div>
      
       </div>
      

    </Fragment>
  );
}

export default App;
