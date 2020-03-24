import React from 'react'

const EmployeeTableRow = (props)=>{
    const {firstName, lastName, job, salary, _id} = props.employee
    const salaryindollars = '$'+salary
    // const fixedColumn={
    //     position: "absolute",
    //     width: "5em",
    //     left: 0,
    //     top: "auto"
    // }
    return(
        <tr>
            <th className="text-capitalize">{firstName}</th>
            <th className="text-capitalize">{lastName}</th>
            <td className="text-capitalize">{job}</td>
            <td>{salaryindollars}</td>
            <td>{_id}</td>
            <td>
                <div style={{display:"flex", justifyContent: "center"}}>
                <div className="btn-group" role="group">
                    <button type="button" onClick={props.showEditForm.bind(this, props.employee)} className="btn btn-secondary">Edit</button>
                    <button type="button" onClick={props.deleteHandler.bind(this, _id)} className="btn btn-danger">Delete</button>
                </div>
                </div>
            </td>
        </tr>
    )
}

export default EmployeeTableRow