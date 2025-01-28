import React,{ useState } from 'react'


export default function   Textform(props) {
  const handleUpClick =() =>{
    console.log("uppercase was clicked"+text); // +text use to add some extra text
    let newtext=text.toUpperCase(); // toUppercase function used
    setText(newtext);
    }


    const handlelowerClick = ()=>
    {
      console.log("Lowercase was clicked"+text);
      let ntext=text.toLowerCase();
      setText(ntext);
    }

    const handleclearClick=()=>
    {
      console.log("clear all text"+text)
     let c="Enter some text";
     setText(c);

    }

  const handleOnChange =(event)=>

    {
      console.log("on change");  // onchange event used
      setText(event.target.value); // add some extra text on textbox
     
      }  

      const [text, setText] = useState("Enter some text");


  return (
    <>
    <div>
      <div className="mb-3">
  <h2><label htmlFor="exampleFormControlTextarea1" className="form-label">{props.heading}</label></h2>
  <textarea className="form-control" value={text} id="myBox" onChange={handleOnChange} rows="15" width="50px"></textarea>
</div>
<button type="button" className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
<button type="button" className="btn btn-primary mx-2" onClick={handlelowerClick}>Convert to Lowercase</button> 
<button type="button" className="btn btn-primary mx-2" onClick={handleclearClick}>Clear all</button> 

</div>
<div className="container">
<h1>Your text summery</h1>
<p>{text.split(" ").length} words and {text.length} characters</p>

<p>{0.008*text.split(" ").length} Minutes read</p>

<h2>Priview</h2>
<p>{text}</p>
</div>
</>
)
}
