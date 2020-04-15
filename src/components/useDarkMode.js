import React, { useEffect } from 'react';
import useLocalStorage from './useLocalStorage'

function useRangeChange(e){
    const [value, setValue] = useLocalStorage(e)
    let App = document.getElementsByClassName("App")
    let lightvsnight = document.getElementsByClassName("dark-vs-light")
    useEffect(() =>{
    if (value === false){
      console.log("light");
      App[0].classList.remove("darkmode");
      lightvsnight[0].textContent = "Light Mode"
      lightvsnight[0].style.color = "black"
    } else if(value === true) {
      console.log("dark");
      App[0].classList.add("darkmode");
      lightvsnight[0].textContent = "Dark Mode"
      lightvsnight[0].style.color = "white"
    }
  },[value])
  return [value, setValue]
  }


export default useRangeChange;