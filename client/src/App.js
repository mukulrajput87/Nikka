import logo from './logo.svg';
import React , {useState,useEffect} from 'react';
import './App.css';

function App() {

  const [data,setData] = useState("");
  useEffect(()=>{


  //   fetch("/signin",{
  //     method:"post",
  //     headers:{
  //         "Content-Type":"application/json"
  //     },
  //     body:JSON.stringify({
  //       name : "mukul"
  //     })
  // })
    fetch("/abc",{
      method : "post",
      headers : {
        "Content-Type":"application/json"
      },
      body : JSON.stringify({
        name : "mukul"
      })
    }).
    then(res => res.json())
    .then(data => {
      console.log(data);
      setData(data)
    }).catch(err => {
      console.log(err)
    })
  },[])
   
 
 
  return (
    <div className="App">
        <h1>ggjjhjkh {data.message}</h1>
    </div>
  );
}

export default App;
