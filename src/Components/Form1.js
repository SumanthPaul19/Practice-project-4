import React from 'react'
import {useState,useEffect} from 'react'

function Form()
{  
  const [location,setLocation]=useState([])
  let offshore=['chennai','banglore','hyderabad','pune','kochi']
  let onshore=['US','Non-US']
  const [formState,setFormState]=useState({
   associatename:'' ,
   associateid:'',
   projectid:'',
   location:'',
   comments:'',
   profile:'',
   skills:[]
   })
   
  let status=true
  const [errors,setErrors]=useState({});
  if(errors.locationRequiredError===''&&
     errors.associatenameLengthError===''&&
     errors.associatenameLengthError===''&&
     errors.associateIdLengthError===''&&
     errors.associateIdRequiredError===''&&
     errors.projectIdLengthError===''&&
     errors.projectIdRequiredError===''&&
     errors.skillsRequiredError===''&&
     errors.profileRequiredError===''&&
     errors.commentRequiredError==='')
     {
       status=false;
     }

  //error message for ASSOCIATE NAME---------------------------------------------------------------------------
  useEffect(()=>{
    if(formState.associatename.length>=1 && formState. associatename.length<5)
    {
        setErrors({...errors, associatenameLengthError:'*Minlength should be 5 ', associatenameRequiredError:''})
    }
    else if(formState. associatename.length>=5 || (formState. associatename.length<1 && errors. associatenameRequiredError===''))
    {
        setErrors({...errors, associatenameLengthError:''})
    }
    if(formState. associatename.length>30)
    {
      setErrors({...errors, associatenameLengthError:'*Maxlength is 30'})
    }
    if(formState. associatename.length===0 && errors. associatenameLengthError!=='' && errors. associatenameRequiredError==='')
    {
        setErrors({...errors, associatenameRequiredError:'*Please enter the associate name', associatenameLengthError:''})
    }
     if(/^[a-zA-Z ]*$/.test(formState.associatename)==false )
    {
      setErrors({...errors,associatenameLengthError:'*Accepts Alphabets, space',associatenameRequiredError:''})
    }   
    
},[formState. associatename])

//associate name
const handleBlurName=(e)=>
{
   if(e.target.value=='')
   {
      setErrors({...errors,associatenameRequiredError:"*Please enter the associate name"})
   } 
}

//error message for ASSOCIATE ID------------------------------------------------------------------------------------
useEffect(()=>{
      if(formState.associateid.length>=1 && formState.associateid.length<6)
      {
        setErrors({...errors, associateIdLengthError:'*Invalid Associate Id', associateIdRequiredError:''})
      }
      else if(formState.associateid.length>6 || (formState.associateid.length<1 && errors. associateIdRequiredError===''))
      {
        setErrors({...errors, associateIdLengthError:'*Invalid Associate Id'})
      }
      if(formState.associateid.length===6)
      {
        setErrors({...errors, associateIdLengthError:''})
      }
      if(formState.associateid.length===0 && errors. associateIdLengthError!=='' && errors. associateIdRequiredError==='')
      {
        setErrors({...errors, associateIdRequiredError:'*Please enter the Associate id', associateIdLengthError:''})
      }
      if(/^[0-9]+$/.test(formState.associateid)==false)
      {
        setErrors({...errors,associateIdLengthError:'*Accepts only numeric',associateIdRequiredError:''})
      }
      if(formState.associateid.length<1)
      {
        setErrors({...errors, associateIdRequiredError:'*Please enter the Associate id', associateIdLengthError:''})

      }
},[formState.associateid])

//associate id
const handleBlurId=(e)=>
{
   if(e.target.value=='')
   {
      setErrors({...errors,associateIdRequiredError:"*Please enter the associate id"})
   } 
}

//error message for PROJECT ID-------------------------------------------------------------------------------------
useEffect(()=>{
  if(formState.projectid.length>=1 && formState.projectid.length<12)
  {
    setErrors({...errors, projectIdLengthError:'*Invalid Project Id', projectIdRequiredError:''})
  }
  else if(formState.projectid.length>12 || (formState.projectid.length<1 && errors.projectIdRequiredError===''))
  {
    setErrors({...errors, projectIdLengthError:'*Invalid Project Id'})
  }
  if(formState.projectid.length===12)
  {
    setErrors({...errors, projectIdLengthError:''})
  }
  if(formState.projectid.length===0 && errors. projectIdLengthError!=='' && errors. projectIdRequiredError==='')
  {
    setErrors({...errors, projectIdRequiredError:'*Please enter the Project id',projectIdLengthError:''})
  }
  if(/^[a-z0-9]+$/i.test(formState.projectid)==false)
  {
    setErrors({...errors, projectIdLengthError:'*accepts only alphanumeric',projectIdRequiredError:''})
  }
  if(formState.projectid.length<1)
  {
    setErrors({...errors, projectIdRequiredError:'*Please enter the Project id',projectIdLengthError:''})

  }
},[formState.projectid])

//project id
const handleBlurProject=(e)=>
{
  if(e.target.value=='')
  {
    setErrors({...errors,projectIdRequiredError:"*Please enter the Project id"})
  }
}

//error message for RADIO BUTTON----------------------------------------------------------------------------------
useEffect(()=>{
    if(formState.location!=='selectlocation')
    {
      setErrors({...errors,locationRequiredError:''})
  
    }
  },[formState.location])
  
  
  const handleLocationBlur=(e)=>
  {
    if(e.target.value=='selectlocation')
    {
      setErrors({...errors,locationRequiredError:"*Please select location"})
    }
    
  }

  const handleChangeOffshore=()=>{
    setLocation(offshore)
}
const handleChangeOnshore=()=>{
    setLocation(onshore)
}

//error message for CHECKBOX------------------------------------------------------------------------------------
let [count,setCount]=useState(0)
const handleSkills=(e)=>
{
  
  if(e.target.checked==true)
  {
   count++
   setCount(count)
  }
  else if(e.target.checked==false)
  {
    count--
    setCount(count)
  }
  if(count<=4)
  {
    setErrors({...errors,skillsRequiredError:"*Please select Min 5 skills"})
  }
  if(count>4 && errors.skillsRequiredError!=='')
  {
    setErrors({...errors,skillsRequiredError:''})
  }
  console.log(count)
}

const handleCheck=(ind)=>{
    let skillsCpy=[...skills]
    skillsCpy[ind].value=! skillsCpy[ind].value;
    setSkills(skillsCpy)
    setFormState({...formState,skills:skillsCpy})
  }

  let[skills,setSkills]=useState([
    {name:'HTML,CSS3,JS',value:false},
    {name:'Angular 8',value:false},
    {name:'Express JS',value:false},
    {name:'SASS',value:false},
    {name:'React JS',value:false},
    {name:'Node js',value:false},
    {name:'ES4,ES5,ES7',value:false},
    {name:'Veu JS',value:false},
    {name:'Mongo DB',value:false},
    {name:'Bootstrap 4',value:false},
    {name:'TypeScript',value:false}
  ])




//error message for INPUT PROFILE PICTURE-------------------------------------------------------------------------
useEffect(()=>{
  if(formState.profile!=='No file chosen')
  {
    setErrors({...errors,profileRequiredError:''})
  } 
  if(formState.profile=='No file chosen')
  {
    setErrors({...errors,profileRequiredError:'Please upload profile picture'})

  }
 
 
},[formState.profile])


const handleProfile=(e)=>{
    if(e.target.value=='No file chosen')
    {
      setErrors({...errors,profileRequiredError:""})
    }
    if(e.target.value =='')
    {
      setErrors({...errors,profileRequiredError:"*Please upload profile picture"})
    }
  
  }
  const handleProfileUpload=(e)=>
  {
   if(e.target.value=='No file chosen')
   {
    setErrors({...errors,profileRequiredError:"*please"})
   }
  }

//error message for COMMENT BOx----------------------------------------------------------------------------------
useEffect(()=>{
  if(formState.comments.length>1)
  {
    setErrors({...errors,commentRequiredError:''})
  }
  if(formState.comments.length===0 && errors.commentRequiredError!=='' && errors. commentRequiredError==='')
  {
      setErrors({...errors, commentRequiredError:'* Please enter comments', commentRequiredError:''})
  }
  
},[formState.comments])

const handleComments=(e)=>{
    if(e.target.value=='')
    {
      setErrors({...errors,commentRequiredError:"*Please enter comments"})
    }
  }

    const[reset,setReset] =useState(formState); 
    const[resetError,setResetError] = useState(errors)
    const resets=()=>{
    setFormState(reset);
    setErrors(resetError);
    }
  

 


    const onFormSubmit=(e)=>{
        e.preventDefault();
        console.log(formState)

    }
   
    return(
        <form  className="w-50 mx-auto"  onSubmit={onFormSubmit} >
        <h1 className="h1 mt-4">Form validation</h1>

        {/*Associate name*/}
        <input type="text" 
        name='associatename'
        className="form-control mb-4"
        placeholder="Associate Name"
        autoComplete="off"
        value={formState.associatename}
        onBlur={handleBlurName}
        onChange={e=>{setFormState({...formState,associatename:e.target.value})}}
        required/>
        {errors.associatenameRequiredError && <p className="text-danger">{errors.associatenameRequiredError}</p> }
        {errors.associatenameLengthError && <p className="text-danger">{errors.associatenameLengthError}</p> }
        

         {/* Associate Id */}
        <input type="text"
        name="associateid"
        className="form-control mb-4" 
        placeholder="Associate id"
        autoComplete="off"
        value={formState.associateid}
        onBlur={handleBlurId}
        onChange={e=>{setFormState({...formState,associateid:e.target.value})}}
        required/>
        {errors.associateIdRequiredError && <p className="text-danger">{errors.associateIdRequiredError}</p> }
        {errors.associateIdLengthError && <p className="text-danger">{errors.associateIdLengthError}</p> }
         
      
         {/* Project Id */}
         <input type="text" 
         name="projectid" 
         className="form-control mb-4" 
         placeholder="Project id"
         autoComplete="off"
         value={formState.projectid}
         onBlur={handleBlurProject}
         onChange={e=>{setFormState({...formState,projectid:e.target.value})}}
         required/>
         {errors.projectIdRequiredError && <p className="text-danger">{errors.projectIdRequiredError}</p> }
         {errors.projectIdLengthError && <p className="text-danger">{errors.projectIdLengthError}</p> }
         
        
         
         {/* offshore/onshore */}
        
         <div className="form-check form-check-inline">
           <input type="radio" name="shore" id="offshore" className="form-check-input" value="offshore" onChange={handleChangeOffshore} />
           <label htmlFor="offshore">Offshore</label>
         </div>
         <div className="form-check form-check-inline">
           <input type="radio" name="shore" id="onshore" className="form-check-input mb-4" value="onshore" onChange={handleChangeOnshore}  />
           <label htmlFor="onshore">Onshore</label>
         </div>
        
         {/* select location */}
      <select name="locations"  className="form-select mb-4" 
      onBlur={handleLocationBlur}
      onChange={(e)=>setFormState({...formState,location:e.target.value})}>   
       <option value="selectlocation"  selected disabled> Select Location</option>
           {
             location.map((lv,ind)=>{
                   return(
                       <option value={lv} key={ind} >{lv}</option>
                   )
               })
              }
         </select>
         {errors.locationRequiredError && <p className="text-danger">{errors.locationRequiredError}</p> }

         


         {/* skills CHECKBOXES */}
         <div className="row">
         
         {
           skills.map((skillobj,ind)=>{
               return(
                <div className="col col-md-4">
                <div className="form-check" key={ind}>
                <input type="checkbox" className="form-check-input"
                 onClick={handleSkills}
                 onChange={()=>handleCheck(ind)}/>
                <label htmlFor={skillobj.name}>{skillobj.name}</label>
              </div>
              </div>
              
               )
           })
         }
         </div>
         {errors.skillsRequiredError && <p className="text-danger">{errors.skillsRequiredError}</p> }

        
     <label className="mt-2 mb-2">Upload Profile</label>
     <input type="file"
      id="propic"
       className="form-control mb-4" 
        onBlur={handleProfile}
        onFocus={handleProfileUpload}
        value={formState.profile}
        onChange={(e)=>setFormState({...formState,profile:e.target.value})} 
        />
     {errors.profileRequiredError && <p className="text-danger">{errors.profileRequiredError}</p> }
        {/* commentbox  */}
      <textarea name="about" cols="30" rows="3" 
                className="form-control mb-3" placeholder="Comments" 
                onBlur={handleComments}
                value={formState.comments}
                onChange={e=>{setFormState({...formState,comments:e.target.value})}}></textarea>
      {errors.commentRequiredError && <p className="text-danger">{errors.commentRequiredError}</p> }

        <button type="submit" className="btn btn-primary mb-5" id="submitBtn"  onClick={()=>window.location.reload()} disabled={status}>Submit</button>
        <button className="btn btn-danger ms-2 mb-5" type="reset" onClick={resets}>Reset</button>
    </form>
    )
}
export default Form;