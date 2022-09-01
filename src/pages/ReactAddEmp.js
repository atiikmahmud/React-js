import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import Swal from 'sweetalert2';

const ReactAddEmp = () => {

    const navigate = useNavigate();
    
    const [name, setName]       = useState("")
    const [emp_id, setEmpid]    = useState("")
    const [email, setEmail]     = useState("")
    const [dept, setDept]       = useState("")
    const [phone, setPhone]     = useState("")
    const [image, setImage]     = useState()
    const [validationError,setValidationError] = useState({})

    const changeHandler = (e) => {
		setImage(e.target.files[0]);
	};

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData()

        formData.append('name', name)
        formData.append('emp_id', emp_id)
        formData.append('email', email)
        formData.append('dept', dept)
        formData.append('phone', phone)
        formData.append('image', image)

        await axios.post(`http://127.0.0.1:8000/api/employee`, formData).then(({data})=>{
            Swal.fire({
                title: "Employee successfully registered!",
                icon: "success",
                text: data.message
            })
            navigate("/employee")
        }).catch(({response})=>{
            if(response.status ===422){
                setValidationError(response.data.errors)
            }else{
                Swal.fire({
                    text:response.data.message,
                    icon:"error"
                }) 
            }
        })
    }
    

    return (
        <>
            <div className="employee-reg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <div className="card my-3">
                                <div className="card-header h4 text-center">
                                    Employee Registration
                                </div>
                                <div className="card-body">
                                {
                                    Object.keys(validationError).length > 0 && (
                                        <div className="row">
                                        <div className="col-12">
                                            <div className="alert alert-danger">
                                            <ul className="mb-0">
                                                {
                                                Object.entries(validationError).map(([key, value])=>(
                                                    <li key={key}>{value}</li>   
                                                ))
                                                }
                                            </ul>
                                            </div>
                                        </div>
                                        </div>
                                    )
                                    }
                                    <div className="reg-form">
                                        <form onSubmit={handleSubmit}>
                                            <div className="mb-3">
                                                <label for="employeeName" className="form-label">Name</label>
                                                <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
                                            </div>
                                            <div className="mb-3">
                                                <label for="employeeId" className="form-label">Employee ID</label>
                                                <input type="text" className="form-control" value={emp_id} onChange={(e) => setEmpid(e.target.value)} required />
                                            </div>
                                            <div className="mb-3">
                                                <label for="employeeEmail1" className="form-label">Email address</label>
                                                <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                            </div>
                                            <div className="mb-3">
                                                <label for="employeeDept" className="form-label">Department</label>
                                                <input type="text" className="form-control" value={dept} onChange={(e) => setDept(e.target.value)} required />
                                            </div>
                                            <div className="mb-3">
                                                <label for="employeePhone" className="form-label">Phone Number</label>
                                                <input type="text" className="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                                            </div>
                                            {/* <div className="mb-3">
                                                <label for="employeePhone" className="form-label">Image</label>
                                                <input type="file" className="form-control" value={image} onChange={changeHandler} required />
                                            </div> */}
                                            <div className="form-text mb-2">If you already registered, <Link to="/employee">click here</Link></div>
                                            <button type="submit" className="btn btn-primary">Submit</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </div>
            </div>
        </>
    );

}

export default ReactAddEmp;