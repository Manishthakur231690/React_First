import './App.css';
import Header from './header';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';

function App() {

const [name, setName] = useState(""); 
const [email, setEmail] = useState(""); 
const [course, setCourse] = useState(""); 
const [data, setData] = useState([]);



function addData(){
  setData([...data, {name, email, course}]);
  setName("");
  setEmail("");
  setCourse("");
}

const remove = (index) => {
  let arr = data;
  arr.splice(index, 1);
  setData([...arr]);
}

  return (
    <>
      

      <Header/>


      <form action='#'>
        <div>
        <Stack direction="row" spacing={2} style={{marginTop:'20px'}}>
              <TextField  value={name} onChange={(event) => setName(event.target.value)} id="outlined-basic" label="Name" variant="outlined" required/>
              <TextField type={email} value={email} onChange={(event) => setEmail(event.target.value)} id="outlined-basic" label="Email" variant="outlined" required />
              <TextField value={course} onChange={(event) => setCourse(event.target.value)} id="outlined-basic" label="Course" variant="outlined" required/>
              <Button type='submit' onClick={addData} variant="contained">Add</Button> 
        </Stack>
        </div>
      </form>

      <div className="data-container">
        <div className="data-value">
          <h3>Name</h3>
          <h3>Email</h3>
          <h3>Course</h3>
          <h3>Remove</h3>

        </div>

        { data.map((element, index) => {
            return (
                          <div key={index} className="data-value">
                          <p>{element.name}</p>
                          <p>{element.email}</p>
                          <p>{element.course}</p>
                          <Button onClick={() => remove(index)} variant="contained" size="small" color="error"> Remove </Button>
                          </div>
                  
                );
          })
        }
      </div>
    </>
  );
}

export default App;
