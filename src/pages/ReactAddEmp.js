import { useState } from "react";
import { Link } from "react-router-dom";

const ReactAddEmp = () => {

    const [name, setName]       = useState("");
    const [emp_id, setEmpid]    = useState("");
    const [email, setEmail]     = useState("");
    const [dept, setDept]       = useState("");
    const [phone, setPhone]     = useState("");
    const [message, setMessage] = useState("");

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch("http://127.0.0.1:8000/api/add-employee", {
            method: "POST",
            body: JSON.stringify({
                name: name,
                emp_id: emp_id,
                email: email,
                dept: dept,
                phone: phone,
             }),
            });
            let resJson = await res.json();
            if (res.status === 200) {
                setName("");
                setEmpid("");
                setEmail("");
                setDept("");
                setPhone("");
                setMessage("Employee registred successfully!");
            }  else {
                setMessage("Some error occured");
            }
        } catch (err) {
            console.log(err);
        }
    };

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
                                    <div className="reg-form">
                                        <form onSubmit={handleSubmit}>
                                            <div className="message">{message ? <p>{message}</p> : null}</div>
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