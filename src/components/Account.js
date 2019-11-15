import React,{Component} from 'react';
import axios from 'axios';
import cookie from 'react-cookies';
class Account extends Component
{
    state={
        username:cookie.load('username'),
        patient:{},
        fullName:'',
        number:'',
        address:''
    }
    componentDidMount()
    {
        axios.post("http://localhost:5000/patients/account",this.state)
        .then(patient=>{
            this.setState({
                patient:patient.data,
                fullName:patient.data.fullName,
                number:patient.data.number,
                address:patient.data.address
            })
            console.log(this.state.patient);
            document.getElementById('fullName').value=this.state.patient.fullName;
            document.getElementById('fullName').readOnly=true;

            document.getElementById('number').value=this.state.patient.number;
            document.getElementById('number').readOnly=true;

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
            address:document.getElementById('address').value
        })
    }
    submitHandler=(e)=>{
        e.preventDefault();
        console.log(this.state);
        axios.post("http://localhost:5000/patients/update",this.state)
        .then(res=>{
            alert(res.data);
        })
        .catch(err=>{
            alert(err);
        })
    }
    render(){
            console.log(this.state);
        return(
            <div className="container">
                <form action="">
                    <div className="row">
                        <br/>
                        <span className="col s2">Name</span>
                        <span className="col s5">
                        <input type="text" id="fullName" onChange={this.changeText}/>
                        </span>
                        <span className="btn indigo" onClick={(e)=>{document.getElementById('fullName').readOnly=false;
                        document.getElementById('fullName').select();}}><i className="material-icons">create</i></span>
                    </div>
                    <div className="row">
                    <span className="col s2">Address</span>
                        <span className="col s5">
                        <input type="text" id="address" onChange={this.changeText}/>
                        </span>
                        <span className="btn indigo" onClick={(e)=>{document.getElementById('address').readOnly=false;
                        document.getElementById('address').select();}}><i className="material-icons">create</i></span>
                    </div>
                    <div className="row">
                    <span className="col s2">number</span>
                        <span className="col s5">
                        <input type="text" id="number" onChange={this.changeText}/>
                        </span>
                        <span className="btn indigo" onClick={(e)=>{document.getElementById('number').readOnly=false;
                        document.getElementById('number').select();}}><i className="material-icons">create</i></span>
                    </div>
                    <div className="btn indigo" onClick={this.submitHandler}>Submit</div>
                </form>
                <br/>
                <br/>
            </div>
        )
    }
}
export default Account;