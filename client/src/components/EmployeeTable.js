import React from 'react'
import EmployeeTableRow from './EmployeeTableRow'
import WarningModal from './WarningModal'

class EmployeeTable extends React.Component{
    constructor(props){
        super(props)
        this.refArray = []
        this.state={
            warningToggle:false,
            modalShow:false,
            _id:"",
            nameAndJob:""
        }
        this.toggleWarning = this.toggleWarning.bind(this)
        this.deleteHandlerWithModal = this.deleteHandlerWithModal.bind(this)
    }
    parentRemoveHighlight = () =>{
        this.refArray.forEach(element => {
            element.removeHighlight()
        });
    }

    setModalShow(visible){
        this.setState({
            modalShow:visible
        })
    }

    toggleWarning(){
        this.setState({
            warningToggle: !this.state.warningToggle
        })
    }
    
    deleteHandlerWithModal(id, info){
        if(this.state.warningToggle){
            this.setModalShow(true)
        }
        this.setState({
            _id: id,
            nameAndJob: info
        })
        if(this.state.warningToggle === false){
            this.props.deleteHandler(id)
        }

    }

    render(){
        const tableWrapper = {
            overflowX: "scroll",
            overflowY: "scroll",
            width:"100%",
            maxHeight:"400px",
        }
        return(
            <>
                <div style={{display:"flex", justifyContent:"space-between", marginBottom:"0.2rem"}}>
                    <div className="small" style={{fontWeight:"bold", fontSize:"1rem"}}>*This datatable is responsive to screen size</div>
                    <div>
                        <span className="mr-2 small" style={{color:"red", fontFamily:"Helvetica", fontSize:"1rem", fontWeight:"bold"}}>Display warning:</span>
                        <label className="switch">
                            <input type="checkbox" onClick={()=>this.toggleWarning()}/>
                            <span className="slider"></span>
                        </label>
                    </div>
                </div>
                <div style={tableWrapper} className="table-wrapper">
                    <table className="table table-bordered table-striped table-sm sticky" style={{borderTop:0}}>
                        <thead className="table-dark">
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
                                                        ref={(ele)=>{
                                                            this.refArray[index] = ele
                                                            // console.log(index)
                                                        }}
                                                        deleteHandler={this.deleteHandlerWithModal}
                                                        showEditForm={this.props.showEditForm} />
                            })}
                        </tbody>
                    </table>
                </div>
                <WarningModal
                    show={this.state.modalShow}
                    onHide={() => this.setModalShow(false)}
                    deleteHandler={this.props.deleteHandler}
                    deleteEntryId={this.state._id}
                    deleteEntryName={this.state.nameAndJob}
                />
            </>
        )
    }
}

export default EmployeeTable