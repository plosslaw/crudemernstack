import React from 'react'
import EmployeeTable from './components/EmployeeTable'
import Form from './components/Form'
import Message from './components/Message'
import EmployeeAPI from './EmployeeAPI'

//todo: make modal warning when deleting entry


class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            employees: [],
            isEditForm: false,
            employee: {
                firstName: "",
                lastName: "",
                salary: "",
                job: ""
            },
            message: "",
        }
        this.deleteHandler = this.deleteHandler.bind(this)
        this.addHandler = this.addHandler.bind(this)
        this.updateHandler = this.updateHandler.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.showEditForm = this.showEditForm.bind(this)
        this.returnForm = this.returnForm.bind(this)
        this.tableElement = React.createRef()
    }
    
    componentDidMount(){
        EmployeeAPI.getEmployees().then(data=> {
            this.setState({employees: data.response})
        })
    }


    resetForm(){
        this.setState({
            employee:{
                firstName: "",
                lastName: "",
                salary: "",
                job: ""
            },
        })
        this.tableElement.current.parentRemoveHighlight()
    }

    handleChange(e){
        this.setState({
            employee:{
                ...this.state.employee,
                [e.target.name] : e.target.value
            }
        })
    }

    showEditForm(employee){
        this.setState({
            isEditForm: true,
            employee : employee,
            message:"",
        })
        this.tableElement.current.parentRemoveHighlight()
    }

    async deleteHandler(id){
        const deleteData = await EmployeeAPI.deleteEmployee(id)
        const message = deleteData.message
        if(message.msgError){
            this.setState({message})
        }else{
            const data = await EmployeeAPI.getEmployees()
            this.setState({
                message, employees: data.response
            })
        }
    }

    async updateHandler(e){
        e.preventDefault()
        const updateData = await EmployeeAPI.updateEmployee(this.state.employee)
        const message = updateData.message
        if(message.msgError){
            this.setState({message})
        }else{
            const data = await EmployeeAPI.getEmployees()
            this.setState({
                message, employees: data.response
            })
        }
        this.setState({isEditForm: false})
        this.resetForm()
    }

    returnForm(e){
        e.preventDefault()
        this.setState({isEditForm: false})
        this.resetForm()
    }

    async addHandler(e){
        e.preventDefault()
        const postData = await EmployeeAPI.createEmployee(this.state.employee)
        const message = postData.message
        if(message.msgError){
            this.setState({message})
        }else{
            const data = await EmployeeAPI.getEmployees()
            this.setState({
                message, employees: data.response
            })
        }
        this.resetForm()
    }

    renderEmployeeTable(){
        if(this.state.employees.length > 0){
            return (
                <EmployeeTable employees={this.state.employees}
                            deleteHandler={this.deleteHandler}
                            showEditForm={this.showEditForm}
                            ref={this.tableElement}/>
            )
        }
        return null; 
    }

    renderForm(){
        return (
            <Form  isEditForm={this.state.isEditForm}
                    employee={this.state.employee}
                    handleChange={this.handleChange}
                    handler={!this.state.isEditForm ? this.addHandler : this.updateHandler}
                    returnForm={this.returnForm}/>
        )
    }

    renderMessage(){
        if(this.state.message === ""){
            return null
        }else{
            return (
                <Message message={this.state.message}/>
            )
        }
    }

    render(){
        return(
            <>
                <h1 className="text-center mb-3 mt-2" style={{
                    color: 'coral',
                    fontFamily:["Verdana", "sans-serif"]
                }}>Employee Database</h1>
                <div className="row">
                    <div className="col-large-side col-md "></div>
                    <div className="col-large-center col-md-10">
                        {this.renderEmployeeTable()}
                        {this.renderForm()}
                        {this.renderMessage()}
                    </div>
                    <div className="col-large-side col-md"></div>
                </div>
            </>
        )
    }
}

export default App