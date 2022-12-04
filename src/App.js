import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import EmpCreate from './EmpCreate';
import EmpListing from './EmpListing';
import EmpEdit from './EmpEdit';
import EmpDetails from './EmpDetails';

function App() {

    

    return (
        <div className="App">

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<EmpListing/>}></Route>
                    <Route path="/employee/create" element={<EmpCreate/>}></Route>
                    <Route path="/employee/detail/:empid" element={<EmpDetails/>}></Route>
                    <Route path="/employee/edit/:empid" element={<EmpEdit/>}></Route>

                </Routes>
            </BrowserRouter>
        </div>
    );

}

export default App;
