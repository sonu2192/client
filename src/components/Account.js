import React,{Component} from 'react';
import axios from 'axios';
import cookie from 'react-cookies';
import back from './background1.jpg';
class Account extends Component
{
    state={
        username:cookie.load('username'),
        patient:{},
        fullName:'',
        number:'',
        address:'',
        oldName:'',
        oldpass:''
    }
    componentDidMount()
    {
        const M=window.M;
        var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {});
        axios.post("http://localhost:5000/patients/account",this.state)
        .then(patient=>{
            this.setState({
                patient:patient.data,
                fullName:patient.data.fullName,
                number:patient.data.number,
                address:patient.data.address,
                oldName:patient.data.fullName,
                password:patient.data.password
            })
            console.log(this.state.patient);
            document.getElementById('fullName').value=this.state.patient.fullName;
            document.getElementById('fullName').readOnly=true;

            document.getElementById('number').value=this.state.patient.number;
            document.getElementById('number').readOnly=true;
            document.getElementById('password').value=this.state.patient.password;
            document.getElementById('password').readOnly=true
            document.getElementById('address').value=this.state.patient.address;
            document.getElementById('address').readOnly=true;

        })
        .catch(err=>{
            alert(err);
        })
    }
    changeText=(e)=>{
        this.setState({
            patient:this.state.patient,
            fullName:document.getElementById('fullName').value,
            number:document.getElementById('number').value,
            address:document.getElementById('address').value,
            password:document.getElementById('password').value
        })
    }
    passChange=e=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    passwordHandler=e=>{
        if(this.state.password==this.state.oldpass)
        {
            document.getElementById('password').readOnly=false;
            document.getElementById('password').select();
        }
        else
        {
            alert('wrong password');
        }
    }
    submitHandler=(e)=>{
        e.preventDefault();
        console.log(this.state);
        axios.post("http://localhost:5000/patients/update",this.state)
        .then(res=>{
            alert(res.data);
            window.location.replace("http://localhost:3000/Logout");
        })
        .catch(err=>{
            alert(err);
        })
    }
    render(){
            console.log(this.state);
        return(
            <div style={{backgroundImage:`url(${back})`, backgroundSize:"cover"}}>
            <div id="modal1" class="modal">
    <div className="modal-content">
        <div className="input-field col s6 center">
        <input type="password" name="oldpass" id="oldpass" onChange={this.passChange}/>
        <label htmlFor="oldpass">Enter the old password</label>
        </div>
        <div className="btn-small indigo" onClick={this.passwordHandler}>Check</div>
    </div>
    <div className="modal-footer">
      <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
    </div>
  </div>
            <div className="container">
                <br/>
                <br/><br/><br/><br/>
                <div className="card" style={{paddingLeft:"50px"}}>
                <form action="">
                    <div className="row">
                        <br/>
                        <span className="col s2">Name</span>
                        <span className="col s6">
                        <input type="text" id="fullName" onChange={this.changeText}/>
                        </span>
                        <span className="btn indigo" onClick={(e)=>{document.getElementById('fullName').readOnly=false;
                        document.getElementById('fullName').select();}}><i className="material-icons">create</i></span>
                    </div>
                    <div className="row">
                    <span className="col s2">Address</span>
                        <span className="col s6">
                        <input type="text" id="address" onChange={this.changeText}/>
                        </span>
                        <span className="btn indigo" onClick={(e)=>{document.getElementById('address').readOnly=false;
                        document.getElementById('address').select();}}><i className="material-icons">create</i></span>
                    </div>
                    <div className="row">
                    <span className="col s2">number</span>
                        <span className="col s6">
                        <input type="text" id="number" onChange={this.changeText}/>
                        </span>
                        <span className="btn indigo" onClick={(e)=>{document.getElementById('number').readOnly=false;
                        document.getElementById('number').select();}}><i className="material-icons">create</i></span>
                    </div>
                    <div className="row">
                    <span className="col s2">Password</span>
                        <span className="col s6">
                        <input type="password" id="password" onChange={this.changeText}/>
                        </span>
                        <a class="waves-effect indigo waves-light btn modal-trigger" href="#modal1"><i className="material-icons">create</i></a>
                    </div>
                    <div className="btn indigo" onClick={this.submitHandler}>Submit</div>
                </form>
                <br/>
                <br/>
            </div>
            </div>
            </div>
        )
    }
}
export default Account;