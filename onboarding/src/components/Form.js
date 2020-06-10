import React, {useState} from "react";

const Form = props => {
    const [member, setMember] = useState({
        name: '',
        email: '',
        password: '',
        years: '',
        role: '',
        terms: false
    })

    const changeHandler = (event) => {
        let check = event.target.type === "checkbox" ? event.target.checked : event.target.value
       setMember({
           ...member,
        [event.target.name]: event.target.value
        })
    }
        
    return (
        <form onSubmit={(event)=>{
            event.preventDefault();
            props.addMember(member)
            setMember({name: "", email: "", password: "", years: "", role: ""})
             }}>

            <label htmlFor = "name">Member Name</label>
            <input type="text" name = "name" placeholder= "Enter Name!" value={member.name} onChange={
                changeHandler}
            /> 

           <label htmlFor = "email">Member Email</label>
           <input type="email" name = "email" placeholder= "Enter Email!" value={member.email} onChange={
                changeHandler}/>
           <label htmlFor = "role">Member Password</label>
           <input type="password" name = "password" placeholder= "Enter Password!" value={member.password} onChange={
                changeHandler}/>
            <label htmlFor = "role">Member Role</label>
            <input type="text" name = "role" placeholder= "Enter Role!" value={member.role} onChange={
                changeHandler}/>
            <label htmlFor = "years-experience">Years of Experience?</label>
            <select name="years" value={member.years} onChange= {changeHandler}>
                <option value = ''>--Enter Years--</option>
                <option value = '<1'>less than 1</option>
                <option value = '1-3'>1 to 3</option>
                <option value = '>3'>3 or more</option>
            </select>
            <label htmlFor="terms">
                <input type="checkbox" name="terms" checked={member.terms} onChange={changeHandler}/>
                Terms & Conditions
            </label>
           <button type = "submit">Submit!</button>
        </form>
    )};

export default Form;