import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
      fetch("http://127.0.0.1:8000/api/employeelist")
        .then((res) => res.json())
        .then((data) => setData(data));
    }, []);

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
                                    <Link to="/addemp" className="btn btn-dark"><i class="fas fa-plus-circle"></i> Add Employee</Link>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="employee-list-table">
                                <table class="table table-hover VAMIDDLE">
                                    <thead>
                                        <tr>
                                        <th scope="col">No.</th>
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
                                            <td>{item.name}</td>
                                            <td>{item.emp_id}</td>
                                            <td>{item.email}</td>
                                            <td>{item.dept}</td>
                                            <td>{item.phone}</td>
                                            <td>
                                                <div className="actions">
                                                    <Link to="#" ><i class="fas fa-info" style={infoStyle}></i></Link>
                                                    <Link to="#" ><i class="far fa-edit" style={editStyle}></i></Link>
                                                    <Link to="#" ><i class="far fa-trash-alt" style={deleteStyle}></i></Link>
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