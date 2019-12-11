import React,{Component} from 'react';
import axios from 'axios';
import cookie from 'react-cookies';
import back from './background1.jpg';
class Account extends Component
{
    state={
        username:cookie.load('username'),
        doctor:{},
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
        axios.post("http://localhost:5000/doctors/account",this.state)
        .then(doctor=>{
            this.setState({
                doctor:doctor.data,
                fullName:doctor.data.fullName,
                number:doctor.data.number,
                address:doctor.data.address,
                oldName:doctor.data.fullName,
                password:doctor.data.password
            })
            console.log(this.state.doctor);
            document.getElementById('fullName').value=this.state.doctor.fullName;
            document.getElementById('fullName').readOnly=true;

            document.getElementById('number').value=this.state.doctor.number;
            document.getElementById('number').readOnly=true;
            document.getElementById('address').value=this.state.doctor.address;
            document.getElementById('address').readOnly=true;

        })
        .catch(err=>{
            alert(err);
        })
    }
    changeText=(e)=>{
        this.setState({
            doctor:this.state.doctor,
            fullName:document.getElementById('fullName').value,
            number:document.getElementById('number').value,
            address:document.getElementById('address').value,
        })
    }
    submitHandler=(e)=>{
        e.preventDefault();
        console.log(this.state);
        axios.post("http://localhost:5000/doctors/update",this.state)
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
            <div className="container">
                <br/>
                <br/><br/><br/><br/>
                <div className="card align-center" style={{paddingLeft:"60px",width:"800px"}}>
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