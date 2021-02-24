import React, {useState, useRef} from "react";
 

export default function CreateForm() {
  const [state, setState] =  useState({
    ename: '',
    address: '',
    phoneno : '',
    altphoneno: '',
     email: '',
     qualification: '',
     department: '', 
     designation:'',
     expreience: '',
     emergContno:'',
     
  });
  const myInput = useRef();
  function handleChange(evt) {
    const value =
      evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
     
    setState({
      ...state,
      [evt.target.name]: value
    });
  }
  const handleReset = (event) => {
    event.preventDefault();
   // const validationErrors = validate(inputs);
  //  const noErrors = Object.keys(validationErrors).length === 0;
   // setErrors(validationErrors);
     
   setState({
    ...state,
     ename: '',
    address: '',
    phoneno : '',
    altphoneno: '',
     email: '',
     qualification: '',
     department: '', 
     designation:'',
     expreience: '',
     emergContno:''
  });
     
    
}
const handleSubmit = (event) => {
    event.preventDefault();
    
   // const validationErrors = validate(inputs);
  //  const noErrors = Object.keys(validationErrors).length === 0;
   // setErrors(validationErrors);
     
        console.log(state);
        console.log(myInput.current.files[0].name)
     
    
}
  return (
      <div className="formnew m-5">
    <div className="container">
        <h1 className="mb-3">Enter Employee Details</h1>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
        {/* <label>Name</label> */}
          <input className="form-control" type="text" name="ename" value={state.ename} onChange={handleChange} placeholder="Name"   />
        
        </div>
        <div className="form-group">
        {/* <label> Address </label> */}
          <textarea className="form-control" name="address" value={state.address} onChange={handleChange} placeholder="address" />
       </div>
        <div className="form-group">
        {/* <label>  Phone No. </label> */}
        <input className="form-control"
            type="tel" pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
            name="phoneno"
            value={state.phoneno}
            onChange={handleChange} placeholder="Phone No"
          />
         
                  
        </div>
        <div className="form-group">
        {/* <label> Alternative Phone No </label> */}
        <input className="form-control"
            type="tel" pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
            name="altphoneno"
            value={state.altphoneno}
            onChange={handleChange} placeholder="Alternative Phone No"
          />
        
       
        </div>
        <div className="form-group">
        {/* <label> Email Id</label> */}
          <input  className="form-control"  type="email"    name="email"  value={state.email}  onChange={handleChange} placeholder="Email Id" />
        
</div> <div className="form-group">
        {/* <label>   Qualification </label> */}
        <select name="qualification" onChange={handleChange} value={state.qualification} className="form-control">
          <option value="" disabled selected hidden>Qualification</option>
            <option value="BE">BE</option>
            <option value="BTech">BTech</option>
            <option value="B.Sc">B.Sc</option>
            <option value="BCA">BCA</option>
          </select>
         
       
        </div>
        <div className="form-group">
        {/* <label>  Department </label> */}
        <select name="department" onChange={handleChange} value={state.department} className="form-control">
          <option value="" disabled selected hidden>Department</option>
          <option value="Computer Science">Computer Science</option>
            <option value="Information Technology">Information Technology</option>
            <option value="Computer Application">Computer Application</option>
             
          </select>
          
       
        </div>
        <div className="form-group">
        {/* <label> Designation </label> */}
        <select name="designation" onChange={handleChange} value={state.designation} className="form-control">
        <option value="" disabled selected hidden>Designation</option>
            <option value="Computer Science">Software Engineer</option>
            <option value="Information Technology">Software Developer</option>
            <option value="Computer Application">Web Developer</option>
            <option value="Computer Application">Web Designer</option>
             
          </select>
          
        
        
        </div>
        <div className="form-group">
        {/* <label> Experience </label> */}
        <select name="expreience" onChange={handleChange} value={state.expreience} className="form-control">
        <option value="" disabled selected hidden>Experience</option>
        <option value="0-1">0-1</option>
            <option value="2-3">2-3</option>
            <option value="3-4">3-4</option>
            <option value="4-5">4-5</option>
            <option value="5-6">5-6</option>
            <option value="6<">6 above</option>
             
          </select>
          
        
        </div>
        <div className="form-group"> 
        {/* <label>  Emergency Contact No </label> */}
        <input
        className="form-control"
            type="tel" pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
            name="emergContno"
            value={state.emergContno}
            onChange={handleChange}
            placeholder="Emergency Contact No" 
          />
         
         
       
        </div>
         <div className="m-2">
         <label>Choose a profile picture:</label>
         <input type="file" className="btn btn-secondary"
       id="avatar" name="avatar"   ref={myInput}
       accept="image/png, image/jpeg" />
         </div>
        
        <button type="submit" className="btn btn-primary m-2 w-25">Submit</button>
        <button type="submit" onClick={handleReset} className="btn btn-danger m-2 w-25">Reset</button>
         
      </form>
      {/* <pre>{JSON.stringify(state, null, 2)}</pre> */}
    </div>
    </div>
  );
}