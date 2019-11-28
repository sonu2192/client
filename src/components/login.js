import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import cookie from 'react-cookies';
import logo from './logo.png'
import background from './background.jpg';
var st1={
    positon:"relative",
    top:"100px",
    backgroundColor:"rgba(0,0,0,0.6)",
    paddingTop:"30px"
}
var op={
    opacity:"0.7"
}
var sttit={
    height:"60px",
}
var sty={
    fontFamily:"'Abril Fatface', cursive"
}
var act={
    lineHeight:"60px"
}
var st={
    backgroundImage:`url(${background})`,
    backgroundSize:"cover",
    height:"700px",
    margin:"0px"
  }
class Login extends Component{
    state={
        username:'',
        password:''
    }
    changeText=(e)=>{
        this.setState({
        [e.target.id]:e.target.value
        })
    }
    submitHandler=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:5000/patients/LoginPatient",this.state)
        .then(user=>{
            if(user.data==='invalid username or password')
            {
                //alert(user.data);
                //return;
                axios.post("http://localhost:5000/doctors/LoginDoctor",this.state)
                .then(doctor=>{
                    if(doctor.data==='invalid username or password')
                    {
                        alert(doctor.data);
                    }
                    else
                    {
                        cookie.save('username',doctor.data.username,{path:'/'});
                        cookie.save('type',doctor.data.type,{path:'/'});
                        cookie.save('Authenthication','true',{path:'/'});
                        cookie.save('firstName',doctor.data.name.first_name,{path:'/'});
                        cookie.save('lastName',doctor.data.name.last_name,{path:'/'});
                        window.location.replace("http://localhost:3000/Home");
                        //this.props.history.push("/Home");
                    }
                })
                .catch(err=>{
                    console.log(err);
                    alert('unable to connect to doctor database');
                })
            }
            else{
                cookie.save('username',user.data.username,{path:'/'});
                cookie.save('type',user.data.type,{path:'/'});
                cookie.save('Authenthication','true',{path:'/'}); 
                cookie.save('firstName',user.data.name.first_name,{path:'/'});
                cookie.save('lastName',user.data.name.last_name,{path:'/'});
                window.location.replace("http://localhost:3000/Home");
            }
        })
        .catch(err=>{
            console.log(err);
            alert(err);
        })
    }
    render()
    {
        return(
        <React.Fragment >
              <div className="row" style={st}>
                  <div className="col s12 l4 offset-l4">
                      <div className="card white-text" style={st1}>
                          <div className="center-align indigo" style={sttit}>
                          <span className="card-title" style={act}>LOGIN</span></div>
                          <div className="card-content center-align">
                          <form action="/Home" onSubmit={this.submitHandler}>
                    <div className="input-field">
                        <i className="material-icons prefix">person</i>
                    <input type="text" id="username" required onChange={this.changeText}/>
                    <label htmlFor="username">Username</label>
                    </div>
                    <div className="input-field">
                        <i className="material-icons prefix">lock</i>
                        <input type="password" id="password" required onChange={this.changeText}/>
                        <label htmlFor="password">Password</label>
                        <br/><br/><br/>
                        <button className="btn-small indigo white-text" style={sty} type="submit">Login</button> <br/><br/>
                        <span className="" style={op}>or</span>
                        <br/><br/>
                        <Link to="/Register" className="btn-small indigo white-text">SignUp</Link>
                    </div>
                    </form>
                          </div>
                      </div>
                  </div>
              </div>
        </React.Fragment>
        )
    }
}
export default Login;