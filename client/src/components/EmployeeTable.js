import React from 'react'
import EmployeeTableRow from './EmployeeTableRow'

class EmployeeTable extends React.Component{
    constructor(props){
        super(props)
        this.refArray = []
    }
    parentRemoveHighlight = () =>{
        this.refArray.forEach(element => {
            element.removeHighlight()
        });
    }
    
    render(){
        const tableWrapper = {
            overflowX: "scroll",
            overflowY: "scroll",
            width:"100%",
            maxHeight:"400px",
            fontSize: "1rem"
        }
        return(
            <div style={tableWrapper}>
                <table className="table table-bordered table-striped table-sm table-hover-info">
                    <thead>
                        <tr>
                        <th scope="col" style={{width:"10%"}}>First Name</th>
                        <th scope="col" style={{width:"10%"}}>Last Name</th>
                        <th scope="col" style={{width:"10%"}}>Job Title</th>
                        <th scope="col" style={{width:"10%"}}>Salary</th>
                        <th scope="col" style={{width:"10%"}}>Employee ID</th>
                        <th scope="col" style={{width:"10%"}}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.employees.map((employee,index)=>{
                            return <EmployeeTableRow key={employee._id}
                                                    employee={employee}
                                                    ref={(ele)=>this.refArray[index] = ele}
                                                    deleteHandler={this.props.deleteHandler}
                                                    showEditForm={this.props.showEditForm} />
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default EmployeeTable