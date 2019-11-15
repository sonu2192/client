import React,{Component} from 'react';
import axios from 'axios';
import cookie from 'react-cookies';
var height={
    height:'300px'
}
var position={
    position:'relative',
    left:'300px'
}
class Authenticate extends Component
{
    state={
        number:'919779038011',
        resAuth:''
    }
    componentDidMount(){
        console.log(cookie.load('detals'));
        axios.post("http://localhost:5000/getotp/send",cookie.load('detals'))
    }
    changeHandler=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    submitHandler=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:5000/getotp/verify",this.state)
        .then(res=>{
            if(res.data==true)
            {
                console.log(res.data);
                axios.post('http://localhost:5000/patients/RegisterPatient',cookie.load('detals'))
                .then(res1=>{
                    console.log(res1);
                    alert('saved successfully');
                    cookie.remove('detals',{path:'/'});
                    this.props.history.push('/');
                })
                .catch(err=>{
                    console.log(err);
                    alert('unable to connect to server');
                })
            }
            else
            {
                alert('wrong otp');
            }
        })
    }
    render()
    {
        return(
            <div className="container">
                <div className="card" style={height}>
                <div className="row">
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <div className="col s5 center" style={position}>
                <form action="" onSubmit={this.submitHandler}>
                    <input type="tel" className="text-field" placeholder="Enter the number" name="resAuth" onChange={this.changeHandler} autoComplete="off"/>
                    <button type="submit">Verify</button>
                </form>
                </div>
                </div>
                </div>
                </div>
        )
    }
}
export default Authenticate;