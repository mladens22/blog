import {useState} from "react";
import './App.css';
import {Link, useNavigate} from "react-router-dom";

const EmpCreate = () => {

    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [description, setDescription] = useState("");

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        const empData = {
            first_name,
            last_name,
            email,
            gender,
            description
        }

        fetch("http://localhost:3000/data", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(empData)
        })
            .then((res) => {
                alert("Success")
                navigate('/');
            })
            .catch((err) => {
                console.log(err);
            })
        }

    return (
        <div>
            <div className="row mt-5">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handleSubmit}>
                        <div className="card">
                            <div className="card-title">
                                <h2>Employee create</h2>
                            </div>
                            <div className="card-body">

                                <div className="row">

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>First name</label>
                                            <input
                                                required="required"
                                                value={first_name}
                                                onChange={e => setFirstName(e.target.value)}
                                                className="form-control"
                                                type="text"/>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Last name</label>
                                            <input
                                                required="required"
                                                value={last_name}
                                                onChange={e => setLastName(e.target.value)}
                                                className="form-control"
                                                type="text"/>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input
                                                required="required"
                                                value={email}
                                                onChange={e => setEmail(e.target.value)}
                                                className="form-control"
                                                type="text"/>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Gender</label>
                                            <input
                                                required="required"
                                                value={gender}
                                                onChange={e => setGender(e.target.value)}
                                                className="form-control"
                                                type="text"/>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Description</label>
                                            <input
                                                required="required"
                                                value={description}
                                                onChange={e => setDescription(e.target.value)}
                                                className="form-control"
                                                type="textarea"/>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group d-flex justify-content-center mt-2">
                                            <button className="btn btn-success" type="submit">Save</button>
                                            <Link to="/" className="btn btn-danger ml">Home Page</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EmpCreate;