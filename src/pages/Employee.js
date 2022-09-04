import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import Swal from 'sweetalert2';

const Employee = () =>{
    const infoStyle = {
        fontSize: "20px",
        backgroundColor: "#20c997",
        padding: "5px 12px",
        color: "white",
        height: "30px",
        width: "30px",
        borderRadius: "5px"
    }
    const editStyle = {
        fontSize: "20px",
        marginLeft: "10px",
        marginRight: "10px",
        backgroundColor: "#fd7e14",
        padding: "5px",
        color: "white",
        height: "30px",
        width: "30px",
        borderRadius: "5px"
    }
    const deleteStyle = {
        fontSize: "20px",
        backgroundColor: "#dc3545",
        padding: "6px",
        color: "white",
        height: "30px",
        width: "30px",
        borderRadius: "5px"
    }

    const [data, setData] = useState(null);

    useEffect(() => {
      fetch("http://127.0.0.1:8000/api/employee")
        .then((res) => res.json())
        .then((data) => setData(data));
    }, []);

    const fetchEmployee = async () => {
        await axios.get(`http://localhost:8000/api/employee`).then(({data})=>{
            setData(data)
        })
    }

    const deleteEmployee = async (id) => {
        console.log(id);
        const isConfirm = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            return result.isConfirmed
        });

        if(!isConfirm){
            return;
          }

          await axios.delete(`http://localhost:8000/api/employee/${id}`).then(({data})=>{
            Swal.fire({
                icon:"success",
                text:data.message
            })
            fetchEmployee()
          }).catch(({response:{data}})=>{
            Swal.fire({
                text:data.message,
                icon:"error"
            })
          })

    }

    return(
        <>
            <div className="employee-list">
                <div className="container">
                    <div className="row">
                        <div className="card">
                            <div className="card-header d-flex justify-content-between">
                                <div className="table-title h4">
                                Employee List
                                </div>
                                <div className="add-employee">
                                    <Link to="/newemp" className="btn btn-dark"><i className="fas fa-plus-circle"></i> Add Employee</Link>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="employee-list-table">
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                        <th scope="col">No.</th>
                                        <th scope="col">Image</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Emp-ID</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Department</th>
                                        <th scope="col">Phone</th>
                                        <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {data &&
                                        data.data.map((item) => {
                                        return (
                                        <tr className="align-middle">
                                            <td>{item.id}</td>
                                            <td><img src="https://www.alhaimission.in/images/demo-user.png" className="border rounded-circle" alt="" style={{ height: "50px", width: "50px"}} /></td>
                                            <td>{item.name}</td>
                                            <td>{item.emp_id}</td>
                                            <td>{item.email}</td>
                                            <td>{item.dept}</td>
                                            <td>{item.phone}</td>
                                            <td>
                                                <div className="actions">
                                                    <Link to="#" ><i className="fas fa-info" style={infoStyle}></i></Link>
                                                    <Link to="#" ><i className="far fa-edit" style={editStyle}></i></Link>
                                                    <Link to="#" onClick={()=>deleteEmployee(item.id)}><i className="far fa-trash-alt" style={deleteStyle}></i></Link>
                                                </div>
                                            </td>
                                        </tr>
                                            );
                                        })
                                    }
                                    </tbody> 
                                </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Employee;