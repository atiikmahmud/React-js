import { Link } from "react-router-dom";

const AddEmployee = () => {
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
                                        <form method="post" action="http://127.0.0.1:8000/api/add-employee" >
                                            <div className="mb-3">
                                                <label for="employeeName" className="form-label">Name</label>
                                                <input type="text" className="form-control" id="employeeName" name="name" required />
                                            </div>
                                            <div className="mb-3">
                                                <label for="employeeId" className="form-label">Employee ID</label>
                                                <input type="text" className="form-control" id="employeeId" name="emp_id" required />
                                            </div>
                                            <div className="mb-3">
                                                <label for="employeeEmail1" className="form-label">Email address</label>
                                                <input type="email" className="form-control" id="employeeEmail1" name="email" required />
                                            </div>
                                            <div className="mb-3">
                                                <label for="employeeDept" className="form-label">Department</label>
                                                <input type="text" className="form-control" id="employeeDept" name="dept" required />
                                            </div>
                                            <div className="mb-3">
                                                <label for="employeePhone" className="form-label">Phone Number</label>
                                                <input type="text" className="form-control" id="employeePhone" name="phone" required />
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
export default AddEmployee;