import React, { useState } from 'react';
 function TextForm(props){
  const [text, setText] = useState('');

  const handleUpClick=()=>{
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to uppercase','success');
  }
  const handleLowClick=()=>{
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert('Converted to lowercase','success');

  }
  const handleOnChange=(event)=>{
    console.log('On Change');
    setText(event.target.value);
  }
  const handleClearClick=()=>{
    let newText='';
    setText(newText);
    props.showAlert('Clear Text','success');
  }
 
  return(
    <>
    <div className='container' style={{color:props.Mode==='dark'?'white':'#042743'}}>
  <h1>{props.heading}</h1>
      
<div className="mb-3">
 
  <textarea className="form-control" value={text} style={{backgroundColor:props.Mode==='dark'?'grey':'white',color:props.Mode==='dark'?'white':'#042743'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button type="button" className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
<button type="button" className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
<button type="button" className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>

    </div>
    <div className='container my-3' style={{color:props.Mode==='dark'?'white':'#042743'}}>
      <h1>Your Text Summary</h1>
      <p>{text.split(' ').length} words {text.length} chaaracters</p>
      <p>{0.008*text.split(' ').length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:'Enter something to preview it here'}</p>

    </div>
    </>
)
}

export default TextForm;