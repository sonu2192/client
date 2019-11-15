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
        email:'',
        fullName:'',
        specialization:'',
        worksat:'',
        date:'',
        time:'',
        patientName:cookie.load('firstName')+cookie.load('lastName')
    }
    componentDidMount(){
     let that=this
        axios.get("http://localhost:5000/doctors/"+this.props.match.params.doc_id)
        .then(user=>{
            this.setState(
                {
                    email:user.data.email,
                    fullName:user.data.fullName,
                    specialization:user.data.specialization,
                    worksat:user.data.worksat
                }
            )
        })
        .catch(err=>{
            alert(err);
        })
        console.log("Hello");

         const M=window.M;
         var elems = document.querySelectorAll('.datepicker');
         var instances = M.Datepicker.init(elems, 
          {autoClose:true,
            format:'d-mm-yyyy',
            onSelect:function(){
              that.setState({
                date:instances.toString(),
              })
              console.log(that.state);
            }
        });
         var elems1 = document.querySelectorAll('.timepicker');
         var instances1 = M.Timepicker.init(elems1, 
          {
            autoClose:true,
            twelveHour:false,
            onSelect:function(hours,minutes){
              that.setState({
                time:hours+":"+minutes
              })
            }
          });
    }
    changeText=(e)=>{
      console.log(document.getElementsByName('date').value);
      this.setState({
        [e.target.name]:e.target.value
      })
      
    }
    save=(e)=>{
      axios.post("http://localhost:5000/bookslot/saveSlot",this.state)
      .then(res=>{
        alert(res.data);
        window.location.reload();
      })
      .catch(err=>{
        console.log("unable to connect to the server");
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
                  <h2  className="header">BOOK THE SLOT</h2>
                  <div className="card horizontal z-depth-3" style={card}>
                  <div className="card-stacked">
                  <div className="card-content black-text">
                    <table >
                    <tbody>
                      <tr>
                        <td>Name:</td>
                        <td>{this.state.fullName}</td>
                      </tr>
                      <tr>
                        <td>Email:</td>
                        <td>{this.state.email}</td>
                      </tr>
                      <tr>
                        <td>Specialization:</td>
                        <td>{this.state.specialization}</td>
                      </tr>
                      <tr>
                        <td>Work Address:</td>
                        <td>{this.state.worksat}</td>
                      </tr>
                      <tr>
                        <td>Select a Date</td>
                        <td><input type="text" className="datepicker" name="date"/></td>
                      </tr>
                      <tr>
                        <td>Select Time</td>
                        <td>  <input type="text" name="time" className="timepicker" /></td>
                      </tr>
                    </tbody>
            </table>
              </div>
              <div className="card-action">
               <span className="btn-small indigo" onClick={this.save}>Book Now</span>
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