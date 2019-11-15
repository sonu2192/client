import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import cookie from 'react-cookies';
import logo from './logo.png'
import background from './background.jpg';
var st1={
    positon:"relative",
    top:"100px",
    backgroundColor:"rgba(0,0,0,0.6)"
}
var act={
    padding:"10px"
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
                  <div className="col s12 l4 offset-l7">
                      <div className="card white-text" style={st1}>
                          <span className="card-title center-align" style={act}><h3>LOGIN</h3></span>
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
                        <button className="btn-floating btn-large waves-effect waves-light blue" type="submit">Login</button> <br/><br/>
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