import React, { useEffect } from 'react';
import useLocalStorage from './useLocalStorage'

function useRangeChange(e){
    const [value, setValue] = useLocalStorage("darkmode", false)
    let App = document.getElementsByClassName("App")
    useEffect(() =>{
    if (e.target.value === 1 && value === false){
      console.log("light");
      App.classList.remove("darkmode");
      setValue(false);
    } else if(e.target.value === 2 && value === true) {
      console.log("dark");
      setValue(true);
      App.classList.add("darkmode");
    }
  },[value])
  return [value, setValue]
  }


export default useRangeChange;