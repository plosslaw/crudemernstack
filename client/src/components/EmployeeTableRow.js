import React from 'react'

class EmployeeTableRow extends React.Component{
    constructor(props){
        super(props)
        this.state={
            tabHighlight:""
        }
    }
    
    editForm(event){
        this.props.showEditForm(this.props.employee, event)
        // this.props.parentRemoveHighlight(event)
        this.setState({tabHighlight:"table-danger"})
    }

    deleteEntry(event){
        const info = `${this.props.employee.firstName} ${this.props.employee.lastName} (${this.props.employee.job})`
        this.props.deleteHandler(this.props.employee._id, info, event)
    }

    removeHighlight(){
        this.setState({tabHighlight:""})
    }

    render(){
        const {firstName, lastName, job, salary, _id} = this.props.employee
        const salaryindollars = '$'+salary.toLocaleString()
        // const fixedColumn={
        //     position: "absolute",
        //     width: "5em",
        //     left: 0,
        //     top: "auto"
        // }
        return(
            <tr className={this.state.tabHighlight}>
                <td style={{overflowX: "scroll", fontWeight:"bold"}} className="text-capitalize">{firstName}</td>
                <td style={{overflowX: "scroll", fontWeight:"bold"}} className="text-capitalize">{lastName}</td>
                <td style={{overflowX: "scroll"}} className="text-capitalize">{job}</td>
                <td style={{overflowX: "scroll"}}>{salaryindollars}</td>
                <td style={{overflowX: "scroll"}}>{_id}</td>
                <td>
                    <div style={{display:"flex", justifyContent: "center"}}>
                    <div className="btn-group flex-wrap" role="group" style={{position:"relative"}}>
                        <button type="button" onClick={(e)=>this.editForm(e)} className="btn btn-secondary btn-responsive">Edit</button>
                        <button type="button" onClick={(e)=>this.deleteEntry(e)} className=" btn btn-danger btn-responsive">Delete</button>
                    </div>
                    </div>
                </td>
            </tr>
        )
    }
}

export default EmployeeTableRow