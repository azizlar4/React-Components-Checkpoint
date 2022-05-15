import "./App.css";
import ProfileImg from "./Component/Profile/ProfilePhoto";
import MyName from "./Component/Profile/FullName.js"
import Adress from "./Component/Profile/Address"

function App() {
  return (
    <div className="App">
       <h1>React Components Checkpoint</h1>
      <ProfileImg  />
      <MyName />
      <Adress />
     
    </div>
  );
}

export default App;
