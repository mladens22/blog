import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import JSONDATA from './data.json';
import './App.css';

const EmpListing = () => {

    const [empData, setEmpData] = useState(null);
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");

    const UserDetails = (id) => {
        navigate('/employee/detail/' + id)
    }

    const UserEdit = (id) => {
        navigate('/employee/edit/' + id)
    }

    const UserDelete = (id) => {
        if (window.confirm('Remove this user ?')) {

            fetch("http://localhost:3000/data/" + id, {method: "DELETE"})
                .then((res) => {
                    alert("Deleted!")
                    window
                        .location
                        .reload();
                })
                .catch((err) => {
                    console.log(err);
                })
            }
    }

    useEffect(() => {
        fetch("http://localhost:3000/data")
            .then((res) => {
                return res.json();
            })
            .then((resp) => {
                setEmpData(resp);
            })
            .catch((err) => {
                alert(err.message);
            })
        }, [])

    return (
        <div className="container mt-5">
            <div className="card">
                <div className="card-title">
                    <h2>User Listing</h2>
                </div>
                <div className="card-body">
                    <div className="div-btn">
                        <Link to="/employee/create" className="btn btn-outline-primary mb-2">NEW USER</Link>
                    </div>

                    <input
                        className="input"
                        type="text"
                        placeholder="Search.."
                        onChange={event => {
                            setSearchTerm(event.target.value)
                        }}/>

                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>ID</td>
                                <td>First name</td>
                                <td>Last name</td>
                                <td>Email</td>
                                <td>Gender</td>
                                <td>Description</td>
                                <td>Actions</td>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                JSONDATA
                                    .data
                                    .filter((val) => {

                                        if (searchTerm === "") {
                                            return val
                                        } else if (val.first_name.toLowerCase().includes(searchTerm) || val.last_name.toLowerCase().includes(searchTerm) || val.email.toLowerCase().includes(searchTerm)) {
                                            return val
                                        }
                                    })
                                    .map(item => (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.first_name}</td>
                                            <td>{item.last_name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.gender}</td>
                                            <td>{item.description}</td>
                                            <td>
                                                <button
                                                    onClick={() => {
                                                        UserEdit(item.id)
                                                    }}
                                                    className="btn btn-success">Edit</button>

                                                <button
                                                    onClick={() => {
                                                        UserDelete(item.id)
                                                    }}
                                                    className="btn btn-danger mx-2">Delete</button>

                                                <button
                                                    onClick={() => {
                                                        UserDetails(item.id)
                                                    }}
                                                    className="btn btn-info">Info</button>
                                            </td>

                                        </tr>
                                    ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default EmpListing;