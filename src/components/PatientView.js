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
        docName:cookie.load('fullName'),
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
            <div className="container">
            <div className="post card transparent z-depth-2 row" style={{padding:"30px"}}>
            <input type="texts" id="search" autoComplete="off" style={{borderStyle:"solid",lineHeight:"50px",height:"50px",borderColor:"#4a148c",borderRadius:"40px 0px 0px 40px",outline:"none"}} className="search col s10" name="search" onChange={this.changeText}/>
            <span className="btn col s2 purple purple darken-4" style={{height:"50px",border:"1.5px",lineHeight:"48px",borderStyle:"solid",borderColor:"#4a148c",borderRadius:"0px 40px 40px 0px"}}><i className="material-icons  center">search</i></span>
            </div>
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