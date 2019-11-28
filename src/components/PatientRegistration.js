import React,{Component} from 'react';
import axios from 'axios';
import cookie from 'react-cookies';
import background from './background.jpg';
var st={
    backgroundImage:`url(${background})`,
    backgroundSize:"cover",
    height:"1200px",
    margin:"0px",
  }
  var sttit={
    height:"60px",
}
var st1={
    positon:"relative",
    top:"100px",
    backgroundColor:"rgba(0,0,0,0.6)",
    paddingTop:"30px",
    paddingBottom:"30px"
}
var act={
    lineHeight:"60px"
}
class PatientRegistration extends Component{
    state={
        first_name:'',
        last_name:'',
        password:'',
        address:'',
        username:'',
        gender:'',
        worksat:'',
        number:'',
        specialization:'',
        type:'patient',
        message:'this is from E-Swasth'
    }
    changedText=(e)=>{
        this.setState({
          [e.target.id]:e.target.value
        });
    }
    changedTextRadio=(e)=>{
        this.setState({
          [e.target.name]:e.target.value
        });
    }
    submitHandler=(e)=>{
        e.preventDefault();
        console.log(this.state);
        cookie.save('detals',this.state,{path:'/'});
            this.props.history.push('/Auth');
        
    }
    submitHandlerDoc=(e)=>{
        e.preventDefault();
        console.log(this.state);
        axios.post('http://localhost:5000/doctors/RegisterDoctor',this.state)
        .then(res=>{
            console.log(res);
            this.props.history.push('/');
        })
        .catch(err=>{
            console.log(err);
            alert('unable to connect to server');
        })
        
    }
    render()
    {
        if(this.state.type==='patient')
        {
        return(
            <div className="row" style={st}>
                  <div className="col s12 l6 offset-l3">
                      <div className="card white-text" style={st1}>
                      <div className="center-align indigo" style={sttit}>
                          <span className="card-title" style={act}>SIGNUP</span></div>
                          <div className="card-content">
                          <form action="/" onSubmit={this.submitHandler}>
                    <div className="input-field">
                    <i className="material-icons prefix">person</i>
                    <input type="text" id="first_name" required onChange={this.changedText}/>
                    <label htmlFor="first_name">First Name</label>
                    </div>
                    <div className="input-field">
                    <i className="material-icons prefix">person</i>
                    <input type="text" id="last_name" required onChange={this.changedText}/>
                    <label htmlFor="last_name">Last Name</label>
                    </div>
                    <div>
                    <div className="input-field">
                    <i className="material-icons prefix">person</i>
                    <input type="text" id="username" required onChange={this.changedText}/>
                    <label htmlFor="username">User Name</label>
                    </div>
                    <label>
                    <input className="with-gap" id="gender" name="gender" required type="radio" value="male" onChange={this.changedTextRadio}/>
                    <span >Male</span>
                    </label>
                    </div>
                    <div>
                    <label>
                    <input className="with-gap" id="gender1" name="gender" required type="radio"  value="female" onChange={this.changedTextRadio}/>
                    <span>Female</span>
                    </label>
                    </div>
                    <div className="input-field">
                    <i className="material-icons prefix">message</i>
                    <input type="tel" id="number" required onChange={this.changedText}/>
                    <label htmlFor="number">Your Phone Number</label>
                    </div>
                    <div className="input-field">
                    <i className="material-icons prefix">message</i>
                    <textarea name="" className="materialize-textarea" id="address" cols="30" rows="10" required onChange={this.changedText}></textarea>
                    <label htmlFor="address">Enter address</label>
                    </div>
                    <div className="input-field">
                    <i className="material-icons prefix">lock</i>
                    <input type="password" id="password" required onChange={this.changedText}/>
                    <label htmlFor="password">Enter the password</label>
                    </div>
                    <div>
                    <label>
                    <input className="with-gap" id="type" name="type" required type="radio" value="patient" onChange={this.changedTextRadio}/>
                    <span >Patient</span>
                    </label>
                    </div>
                    <div>
                    <label>
                    <input className="with-gap" id="type1" name="type" required type="radio"  value="doctor" onChange={this.changedTextRadio}/>
                    <span>Doctor</span>
                    </label>
                    </div>
                   
                    <br/>
                    <br/>
                    <button className="btn-small indigo right" type="submit">Register</button>
                </form>
                          </div>
                     </div>
                </div>
            </div>
        )
        }
        else
        {
            return(
                <div className="row" style={st}>
                  <div className="col s12 l6 offset-l3">
                      <div className="card white-text" style={st1}>
                      <div className="center-align indigo" style={sttit}>
                          <span className="card-title" style={act}>SIGNUP</span></div>
                          <div className="card-content">
                          <form action="/" onSubmit={this.submitHandlerDoc}>
                       <div className="input-field">
                       <i className="material-icons prefix">person</i>
                       <input type="text" id="first_name" required onChange={this.changedText}/>
                       <label htmlFor="first_name">First Name</label>
                       </div>
                       <div className="input-field">
                       <i className="material-icons prefix">person</i>
                       <input type="text" id="last_name" required onChange={this.changedText}/>
                       <label htmlFor="last_name">Last Name</label>
                       </div>
                       <div>
                       <div className="input-field">
                       <i className="material-icons prefix">person</i>
                       <input type="text" id="username" required onChange={this.changedText}/>
                       <label htmlFor="username">User Name</label>
                       </div>
                       <label>
                       <input className="with-gap" id="gender" name="gender" required type="radio" value="male" onChange={this.changedTextRadio}/>
                       <span >Male</span>
                       </label>
                       </div>
                       <div>
                       <label>
                       <input className="with-gap" id="gender1" name="gender" required type="radio"  value="female" onChange={this.changedTextRadio}/>
                       <span>Female</span>
                       </label>
                       </div>
                       <div className="input-field">
                       <i className="material-icons prefix">message</i>
                       <input type="tel" id="number" required onChange={this.changedText}/>
                       <label htmlFor="number">Your Phone Number</label>
                       </div>
                       <div className="input-field">
                       <i className="material-icons prefix">message</i>
                       <textarea name="" className="materialize-textarea" id="address" cols="30" rows="10" required onChange={this.changedText}></textarea>
                       <label htmlFor="address">Enter address</label>
                       </div>
                       <div className="input-field">
                       <i className="material-icons prefix">lock</i>
                       <input type="password" id="password" required onChange={this.changedText}/>
                       <label htmlFor="password">Enter the password</label>
                       </div>
                       <div>
                       <label>
                       <input className="with-gap" id="type" name="type" required type="radio" value="patient" onChange={this.changedTextRadio}/>
                       <span >Patient</span>
                       </label>
                       </div>
                       <div>
                       <label>
                       <input className="with-gap" id="type1" name="type" required type="radio"  value="doctor" onChange={this.changedTextRadio}/>
                       <span>Doctor</span>
                       </label>
                       </div>
                       <div className="input-field">
                    <i className="material-icons prefix">person</i>
                    <input type="text" id="specialization" required onChange={this.changedText}/>
                    <label htmlFor="specialization">Specialization</label>
                    </div>
                    <div className="input-field">
                       <i className="material-icons prefix">message</i>
                       <textarea name="" className="materialize-textarea" id="worksat" cols="30" rows="10" required onChange={this.changedText}></textarea>
                       <label htmlFor="worksat">Enter work address</label>
                       </div>
                       <br/>
                       <br/>
                       <button className="btn-small indigo right" type="submit">Register</button>
                   </form>
                          </div>
                       </div>
                    </div>
                </div>
           )
        }
    }
}
export default PatientRegistration;