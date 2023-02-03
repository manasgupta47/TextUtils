import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick=()=>{
  //  console.log("Upper case was Clicked"+text); just for seeing
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Convert to UpperCase","success");
  }
  const handleLowClick=()=>{
    //  console.log("Upper case was Clicked"+text); just for seeing
      let newText=text.toLowerCase();
      setText(newText);
      props.showAlert("Convert to LowerCase","success");
    }
  const handleOnChange=(event)=>{
   // console.log("hancdleonchange Clicked"); just for seeing
    setText(event.target.value)
  }
  const handleCopy=()=>{

    navigator.clipboard.writeText(text);
    props.showAlert("Text copied","success");
    
  }
  const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/)
    setText(newText.join(" "))
    props.showAlert("Extra spaces removed","success");
  }
  const handleclearClick=(event)=>{
    // console.log("hancdleonchange Clicked"); just for seeing
    
     setText("");
     props.showAlert("clear text","success");
   }
 const [text,setText]=useState("");
 
  return (
    <>
    <div className='container my-3' style={{ color: props.mode === 'dark'? 'white': '#042743'}}>
      <h1 className='mb-4'>{props.heading} </h1>
      <div className="mb-3">
        <textarea className="form-control" value = {text} style={{backgroundColor : props.mode === 'dark'? '#13466e' : 'white', color: props.mode === 'dark'? 'white': '#042743'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>
      <button disabled={text.length===0}   className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Convert to Upper Case</button>
      <button disabled={text.length===0}  className='btn btn-primary mx-1 my-1' onClick={handleLowClick}>Convert to Lower Case</button>
      <button disabled={text.length===0}  className='btn btn-primary mx-1 my-1' onClick={handleclearClick}>Clear Text</button>
      <button disabled={text.length===0}   className='btn btn-primary mx-1 my-1' onClick={handleCopy}>Copy Text</button>
      <button disabled={text.length===0}   className='btn btn-primary mx-1 my-1' onClick={handleExtraSpaces}>Remove Extra Spaces</button>

    </div>
    <div className="container my-3" style={{ color: props.mode === 'dark'? 'white': 'black'}}>
      <h1>Your Text Summary</h1>
      <p>{text.split(/\s+/).filter((element)=>{ return element.length!==0}).length} words and {text.length} characters.</p>
      <p>{0.008 * text.split(" ").filter((element)=>{ return element.length!==0}).length} minutes to Read.</p>
      <h2>Preview</h2>
      <p>{text.length>0?text : "Nothing to Preview"}</p>
    
    </div>
    </>
  );
}
