import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUPClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText)
  }

  const handleLOClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText)
  }
  const handleCLClick = ()=>{
    let newText ="";
    setText(newText);
  }
  const handlecopy = ()=>{
    let text = document.getElementById('myBox');
    text.select();
    document.getSelection().removeAllRanges();
    navigator.clipboard.writeText(text.value);
  }

  const handleExtraspace = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }
    const handleOnChange = (event)=>{
      setText(event.target.value);
  }
  const [text, setText] = useState(' ');

  return (
    <>
    <div className='container' style={{color:props.mode === 'dark'? 'white':'black'}} >
        <h2 className='mb-3'>{props.heading}</h2>    
       <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'dark'? '#13466e':'white', color:props.mode === 'dark'? 'white':'black'}} id="myBox" rows={8}></textarea>
       </div>
       <button disabled={text.length === 0} className='btn btn-secondary mx-1 my-1' onClick={handleUPClick}>Convert to Uppercase</button>
       <button disabled={text.length === 0} className='btn btn-secondary mx-1 my-1' onClick={handleLOClick}>Convert to Lowercase</button>
       <button disabled={text.length === 0} className='btn btn-secondary mx-1 my-1' onClick={handleCLClick}>Clear Text</button>
       <button disabled={text.length === 0} className='btn btn-secondary mx-1 my-1' onClick={handlecopy} >Copy Text</button>
       <button disabled={text.length === 0} className='btn btn-secondary mx-1 my-1' onClick={handleExtraspace}>Remove Extra Space</button>

    </div>
    <div className='container my-3' style={{color:props.mode === 'dark'? 'white':'black'}}>
      <h2>Your text summary </h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  )
}
