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
        this.setState({tabHighlight:"table-primary"})
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
                <th style={{overflowX: "scroll"}} className="text-capitalize">{firstName}</th>
                <th style={{overflowX: "scroll"}} className="text-capitalize">{lastName}</th>
                <td style={{overflowX: "scroll"}} className="text-capitalize">{job}</td>
                <td style={{overflowX: "scroll"}}>{salaryindollars}</td>
                <td style={{overflowX: "scroll"}}>{_id}</td>
                <td>
                    <div style={{display:"flex", justifyContent: "center"}}>
                    <div className="btn-group flex-wrap" role="group">
                        <button type="button" onClick={(e)=>this.editForm(e)} className="btn btn-secondary btn-responsive">Edit</button>
                        <button type="button" onClick={this.props.deleteHandler.bind(this, _id)} className=" btn btn-danger btn-responsive">Delete</button>
                    </div>
                    </div>
                </td>
            </tr>
        )
    }
}

export default EmployeeTableRow