import './App.css';
import Header from './components/Header';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';


function App() {
  const [form, setForm] = useState({name : "", email: ""});
  const [data, setData] = useState([]);

  const addData = () => {
    if(form.name === "" || form.email === ""){
      alert("Add details");
      console.log("iff");
      
    }else{
      console.log("ehlse");
      setData([...data, form])
      setForm({name:"",email:""});  
    } 
  }

  const remove = (index) => {
    let arr = data;
    arr.splice(index,1);
    setData([...arr]);
  }

  return (
    <div className="App">
      <Header />
      <div className='form'>
        <Stack direction="row" spacing={2}>
          <TextField value={form.name}
            onChange={(event) => setForm({...form , name: event.target.value})}
            id="outlined-basic" label="name" variant="outlined" />
          <TextField value={form.email}
            onChange={(event) => setForm({...form , email:event.target.value})}
            id="outlined-basic" label="email" variant="outlined" />
          <Button
            onClick={addData}
            variant="contained" color="error">
            <AddIcon />
          </Button>
        </Stack>
      </div>

      <div className='data'>
        <div className='data_val'>
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Remove</h4>
        </div>
        {
          data.map((element, index) => {
            return (
              <div key={index} className='data_val'>
                <h4>{element.name}</h4>
                <h4>{element.email}</h4>
                <Stack>
                  <Button onClick={() => remove(index)} variant="contained" color="error">
                    <DeleteIcon />
                  </Button>
                </Stack>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
