import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import cookie from 'react-cookies';
import background from './doctor-eswasth.jpg'
var pos={
    position:"relative",
    //left:"50%",
    //top:"50%",
    //transform:"translate(-25%,0)"
}
var card={
  backgroundColor:"rgba(255,255,255,0.2)"
}
var back={
  backgroundImage:`url(${background})`,
  backgroundSize:"cover",
  margin:"0px",
  height:"768px"
}
class ViewDoc extends Component{
    state={
        doctor:{}
    }
    componentDidMount(){
        axios.get("http://localhost:5000/admin/"+this.props.match.params.doc_id)
        .then(user=>{
            this.setState(
                {
                    doctor:user.data
                }
            )
        })
        .catch(err=>{
            alert(err);
        })
        console.log("Hello");
    }
    save=(e)=>{
     axios.post("http://localhost:5000/doctors/RegisterDoctor",this.state)
     .then(res=>{
       axios.get("http://localhost:5000/admin/delete/"+this.props.match.params.doc_id)
       .then(res=>{
         alert(res.data);
         window.location.reload("http://localhost:3000/adminAccept");
       })
     })
     .catch(err=>{
       console.log("unable to connect to the server");
     })
 }
 del=(e)=>{
     axios.get("http://localhost:5000/admin/delete/"+this.props.match.params.doc_id)
     .then(res=>{
       alert("deleted successfully");
       window.location.reload("http://localhost:3000/adminAccept");
     })
 }
    render()
    {
        return(
          <React.Fragment>
            <div className="row" style={back}>
            <br/><br/><br/>
                  <div className="container">
                  <div className="row" style={pos}>
                  <div className="col s12 m7 ">
                  <h2  className="header">Accept</h2>
                  <div className="card horizontal z-depth-3" style={card}>
                  <div className="card-stacked">
                  <div className="card-content black-text">
                    <table >
                    <tbody>
                      <tr>
                        <td>Name:</td>
                        <td>{this.state.doctor.fullName}</td>
                      </tr>
                      <tr>
                        <td>Registration Number:</td>
                        <td>{this.state.doctor.registration_no}</td>
                      </tr>
                      <tr>
                        <td>Specialization:</td>
                        <td>{this.state.doctor.specialization}</td>
                      </tr>
                      <tr>
                        <td>Work Address:</td>
                        <td>{this.state.doctor.worksat}</td>
                      </tr>
                    </tbody>
            </table>
              </div>
              <div className="card-action">
              <span className="btn-small indigo" onClick={this.del}>Delete</span> <span className="btn-small indigo" onClick={this.save}>Register</span>
              </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </React.Fragment>
        )
    }
}
export default ViewDoc;