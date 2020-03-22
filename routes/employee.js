const express = require('express')
const employeeRouter = express.Router()
const Employee = require('../model/Employee')

//read
employeeRouter.get('/', (req,res)=>{
    Employee.find({}, (err,response)=>{
        if(err){
            res.status(500).json({message:{
                msgBody: "Unable to get employee",
                msgError: true
            }})
        }else{
            res.status(200).json(response)
        }
    })
})

//create
employeeRouter.post('/',(req,res=>{
    const employee = new Employee(req.body)
    employee.save((err,doc)=>{
        if(err){
            res.status(500).json({message:{
                msgBody: "Unable to add employee",
                msgError: true
            }})
        }else{
            res.status(200).json({message:{
                msgBody: "Successfully added employee",
                msgError: false
            }})
        }

    })
}))


//delete
employeeRouter.delete('/:id',(req,res)=>{
    Employee.findByIdAndDelete(req.params.id, (err)=>{
        if(err){
            res.status(500).json({message:{
                msgBody: "Unable to delete employee",
                msgError: true
            }})
        }else{
            res.status(200).json({message:{
                msgBody: "Successfully deleted employee",
                msgError: false
            }})
        }
    })
})

//update
employeeRouter.put('/:id', (req,res)=>{
    Employee.findByIdAndUpdate(req.params.id, req.body,{runValidators:true},(err)=>{
        if(err){
            res.status(500).json({message:{
                msgBody: "Unable to update employee",
                msgError: true
            }})
        }else{
            res.status(200).json({message:{
                msgBody: "Successfully updated employee",
                msgError: false
            }})
        }
    })
})

module.exports = employeeRouter