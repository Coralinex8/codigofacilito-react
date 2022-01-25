import react,{useState} from 'react';
import logo from './logo.svg'; 
import {Surprise} from './components/Surprise'
import './App.css';
import React from 'react';
import Button from './components/Button';


const themes = {
  'dark':{
    backgroundColor:'black',
    color:'white'
  },
  'light':{
    backgroundColor:'white',
    color:'black'
  }
}

export const ThemeContext = React.createContext();


function App() {

  const [theme, setTheme] = useState(Themes.dark);
  
  return (
    <div>
      <ThemeContext.Provider value={ themes.dark }>
        <button />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
