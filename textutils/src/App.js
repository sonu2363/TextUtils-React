import React, {useState} from 'react';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import About from './Components/About';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';


function App() {
  const [Mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },3000);
  }
  const toggleMode=()=>{
    if(Mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert('Dark mode has been enabled','success');
      document.title='TextUtils - Dark Mode'
      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert('Light mode has been enabled','success');
      document.title='TextUtils - Light Mode';

    }
  }
  return (
   <> 
 
  <BrowserRouter>
<Navbar title="Textutils" Mode={Mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className='container my-3'>

        <Routes>
        <Route path="/about" element={ <About />}>
           
          </Route>
          <Route path="/" element={<TextForm showAlert={showAlert} heading='Enter the text enalyze below'Mode={Mode} ></TextForm>}>
          </Route>
        </Routes>
         
            
          
        
  

 {/* <About></About>  */}
</div>
        </BrowserRouter>

  
            
   </>
    
  )
}
export default App;
