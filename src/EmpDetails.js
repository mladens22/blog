import {useState} from "react";
import {useEffect} from "react";
import {Link, useParams} from "react-router-dom";

export default function EmpDetails() {

    const {empid} = useParams();
    const [empInfo, setEmpInfo] = useState({});

    useEffect(() => {
        fetch("http://localhost:3000/data/" + empid)
            .then((res) => {
                return res.json();
            })
            .then((resp) => {
                setEmpInfo(resp);
            })
            .catch((err) => {
                alert(err.message);
            })
        }, [empid])

    return (
        <div>
            {
                empInfo && <div>
                        <h1 className="mt-5">Employee name: {empInfo.first_name}
                            </h1>
                        <h2>Details:
                        </h2>
                        <h3>Last name: {empInfo.last_name}</h3>
                        <h3>Email: {empInfo.email}</h3>
                        <h3>Gender: {empInfo.gender}</h3>
                        <h3>Description: {empInfo.description}</h3> 

   

    
                        <Link className="btn btn-info" to="/">Back</Link>

                    </div>
            }

        </div>
    )
}
