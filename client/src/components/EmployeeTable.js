import React from 'react'
import EmployeeTableRow from './EmployeeTableRow'

const EmployeeTable = (props)=>{
    const tableWrapper = {
        overflowX: "scroll",
        overflowY: "scroll",
        width:"100%",
    }
    return(
        <div style={tableWrapper}>
        <table className="table table-bordered table-striped table-sm">
            <thead>
                <tr>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Job Title</th>
                <th scope="col">Salary</th>
                <th scope="col">Employee ID</th>
                <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {props.employees.map(employee=>{
                    return <EmployeeTableRow key={employee._id}
                                            employee={employee}
                                            deleteHandler={props.deleteHandler}
                                            showEditForm={props.showEditForm} />
                })}
            </tbody>
        </table>
        </div>
    )
}

export default EmployeeTable