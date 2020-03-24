export default{
    getEmployees: ()=>{
        return fetch('http://localhost:5000/employee')
            .then(res => res.json())
            .then(data=>data)
    },
    deleteEmployee: (_id)=>{
        return fetch(`http://localhost:5000/employee/${_id}`, {method: 'delete'})
            .then(res => res.json())
            .then(data=> data)
    },
    createEmployee: (employee)=>{
        return fetch('http://localhost:5000/employee', 
        {
            method:'post',
            body: JSON.stringify(employee),
            headers: {
                "Content-Type" : "application/json"
            }})
            .then(res=> res.json())
            .then(data=>data)
    },
    updateEmployee: (employee)=>{
        return fetch(`http://localhost:5000/employee/${employee._id}`,
        {
            method:'put',
            body: JSON.stringify(employee),
            headers: {
                "Content-Type" : "application/json"
            }})
            .then(res=>res.json())
            .then(data=>data)
    }
}