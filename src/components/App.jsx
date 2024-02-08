import React, { useState } from "react";
import Questions from "../Questions";

function App(){
    

    const[next,setNext] = useState(false);
    const[index,setIndex] = useState(0);
    const[id,setId] = useState("");
  
    

    function handleClick(e){
            
            
            if(e.target.value === Questions[index].answer){
                setId("correct")
                setNext(true);

            }
            else{
                setId("wrong");
            }
    }
    function nextButton(){
        setNext(false);
        if(index === Questions.length-1)
        {
            setIndex(0);
        }
        else{ setIndex(index+1);}
       

        

    }
    return<div>
    <div className="container">
        <div className="card">
            <div className="question">{Questions[index].question}</div>
            <div className="options">
                <button className="btn" id={id} onClick={handleClick} value={Questions[index].options.one}>{Questions[index].options.one}</button>
                <button className='btn' id={id} onClick={handleClick} value={Questions[index].options.two}>{Questions[index].options.two}</button>
                <button className='btn' id={id} onClick={handleClick} value={Questions[index].options.three}>{Questions[index].options.three}</button>
                <button className='btn' id={id} onClick={handleClick} value={Questions[index].options.four}>{Questions[index].options.four}</button>
            </div>  
        </div>
        <div className="bottom"><h3 style={{display : next ? "" : "none", color:"white",fontWeight:"bolder"}}>Correct Answer</h3><button id="next-btn" onClick={nextButton} style={{display : next ? "" : "none"}}>Next</button></div>
        </div>
    </div>
}

export default App;