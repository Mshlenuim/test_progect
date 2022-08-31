import { useState } from "react";


function App() {
  let state = useState();
  const [likes, setLikes] = useState(5);

  function inc(){
    setLikes(likes + 1);
  }

  function dec(){
    setLikes(likes - 1);
  }

  document.getElementById('1').addEventListener('click', event =>{
    if(event.target.className('buttons')){
      console.log('click');
    }
  })
    


  return (
    <div className="App">
      <h1>{likes}</h1>
      <div id="1">
        <button className="buttons" onClick={inc}>Increment</button>
        <button className="buttons" onClick={dec}>Decrement</button>
      </div>
    </div>
  );
}

export default App;
