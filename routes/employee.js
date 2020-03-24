const express = require('express')
const employeeRouter = express.Router()
const Employee = require('../model/Employee')

//read
employeeRouter.get('/', (req,res)=>{
    Employee.find({}, (err,response)=>{
        if(err){
            res.status(500).json({message:{
                msgBody: "Unable to get employees",
                msgError: true
            }})
        }else{
            res.status(200).json({response})
        }
    })
})

//create
employeeRouter.post('/',(req,res)=>{
    const employeeName = `${req.body.firstName} ${req.body.lastName}`
    const employee = new Employee(req.body)
    employee.save((err,doc)=>{
        if(err){
            res.status(500).json({message:{
                msgBody: "Unable to add " + employeeName,
                msgError: true
            }})
        }else{
            res.status(200).json({message:{
                msgBody: "Successfully added " + employeeName,
                msgError: false
            }})
        }

    })
})


//delete
employeeRouter.delete('/:id',(req,res)=>{
    let employeeName = ""
    Employee.findById(req.params.id,(err,response)=>{
        if(err){
            res.status(500).json({message:{
                msgBody: "Unable to find employee",
                msgError: true
            }})
        }else{
            employeeName = `${response.firstName} ${response.lastName}`
        }
    })
    Employee.findByIdAndDelete(req.params.id, (err)=>{
        if(err){
            res.status(500).json({message:{
                msgBody: `Unable to delete employee ${employeeName}`,
                msgError: true
            }})
        }else{
            res.status(200).json({message:{
                msgBody: `Successfully deleted ${employeeName}`,
                msgError: false
            }})
        }
    })
})

//update
employeeRouter.put('/:id', (req,res)=>{
    const employeeName = `${req.body.firstName} ${req.body.lastName}`
    Employee.findOneAndUpdate({_id : req.params.id}, req.body,{runValidators:true},(err,response)=>{
        if(err){
            res.status(500).json({message:{
                msgBody: `Unable to update ${employeeName}`,
                msgError: true
            }})
        }else{
            const name = 
            res.status(200).json({message:{
                msgBody: `Successfully updated ${employeeName}`,
                msgError: false
            }})
        }
    })
})

module.exports = employeeRouter