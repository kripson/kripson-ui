import { useState } from "react";
import "./App.scss";
import BankCard from "./components/BankCard/BankCard";
import DoubleMouseCursor from "./components/DoubleMouseCursor/DoubleMouseCursor";
import GlassCard from "./components/GlassCard/GlassCard";
import ThemeChanger from "./components/ThemeChanger/ThemeChanger";

function App() {
  
  const [bankNumber, setBankNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [cardFlipped, setFlipped] = useState(false);



  

  return (
    <div className="App">
      <GlassCard>
        <h1>Hello</h1>
      </GlassCard>
      <ThemeChanger/>
      <DoubleMouseCursor cursorTrailStyles={{backgroundColor: 'white'}} styles={{backgroundColor: 'red'}}/>
      <BankCard bankNumber={bankNumber} expiry={expiry} cvc={cvc} name={'Sankit Man Shrestha'} flipped={cardFlipped}/>
      <input type="text" onChange={(e)=>setBankNumber(e.target.value)} value={bankNumber} placeholder="Card number"></input>
      <input type="text" onChange={(e)=>setExpiry(e.target.value)} value={expiry} placeholder="Expiry"></input>
      <input type="text" onFocus={()=>setFlipped(true)} onBlur={()=>setFlipped(false)} onChange={(e)=>setCvc(e.target.value)} value={cvc} placeholder="CVC"></input>


    </div>
  );
}

export default App;
