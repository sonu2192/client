import React ,{Component} from 'react';
import axios from 'axios';
import cookie from 'react-cookies';
import {Link} from 'react-router-dom';
import background from './back.jpg'
var back={
    backgroundImage:`url(${background})`,
    backgroundSize:"cover",
    backgroundAttachment:"fixed",
    margin:"0px",
}
class PatientView extends Component
{
    state={
        search:'',
        docName:cookie.load('firstName')+cookie.load('lastName'),
        patients:[]
    }
    componentDidMount()
    {
        axios.post("http://localhost:5000/bookslot/ViewPatients",this.state)
        .then(patients=>{
            this.setState({
                patients:patients.data
            })
        })
        .catch((err)=>{
            alert("unable to get data");
        })
    }
    changeText=(e)=>{
        this.setState({
        [e.target.name]:e.target.value
        })

    }
    render()
    {
        const pList=(this.state.patients.length)?(this.state.patients.filter(pat=>{
            return pat.patientName.toLowerCase().includes(this.state.search.toLowerCase())||!this.state.search;
        }).map(patient=>{
            return(
                <div className="post card" key={patient._id}>
                        <div className="card-content">
                            <span className="card-title">{patient.patientName}</span>
                            <Link to={"upload/"+patient._id}><p><span className="btn small indigo dark 2 right">Upload Prescription</span></p></Link>
                            <p>Booking Date:{patient.date}</p>
                            <p>Booking Time:{patient.time}</p>
                        </div>
                    </div>
            ) 
        })
        ):(<div className="center">No bookings yet</div>);
        return(
            <div className="section" style={back}>
                <br/><br/><br/><br/>
            <span className="btn-floating indigo right darken-1 center-align z-depth-0 white-text" onClick={this.getDoctor}>
                <i className="material-icons">search</i>
            </span>
            <span className="right input-field white-text">
                <input type="text" name="search" id="search" autoComplete="off" onChange={this.changeText}/>
                <label htmlFor="search">Search Doctor</label>
            </span>
            <div className="container">
            
            <br/>
            <br/>
            <br/>
            <br/>
                {pList}
            </div>
            </div>
        )
    }
}
export default PatientView;