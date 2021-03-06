import React from 'react'
import Input from  './Input'

const Form = (props)=>{
    // let backButton={
    //     display : props.isEditForm ? "visible" : "none"
    // }
        return (
        <form className="mt-4" onSubmit={props.handler}>
                <h4>{props.isEditForm ? "Edit Employee" : "Add Employee"}</h4>
                <div className="font-weight-light mb-2" style={{fontSize:"0.8rem"}}>(Input is auto-capitalized; typing too quickly may result in input not getting captured)</div>
                <div className="form-group">
                <Input name="firstName"
                        placeholder="Enter First Name"
                        labelName="First Name: "
                        handleChange={props.handleChange}
                        value={props.employee.firstName}/>
                <Input name="lastName"
                        placeholder="Enter Last Name"
                        labelName="Last Name: "
                        handleChange={props.handleChange}
                        value={props.employee.lastName}/>
                <Input name="job"
                        placeholder="Enter Job"
                        labelName="Job Title: "
                        handleChange={props.handleChange}
                        value={props.employee.job}/>
                <Input name="salary"
                        placeholder="Enter Salary"
                        labelName="Salary: "
                        handleChange={props.handleChange}
                        value={props.employee.salary}/>
                </div>
                <button type="submit" className="btn btn-danger btn-block">Submit</button>
                {props.isEditForm &&
                <button onClick={props.returnForm} className="btn btn-secondary btn-block">Back</button>}

        </form>
        )
}


export default Form