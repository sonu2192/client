import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import background from './image.jpg'
var back={
    backgroundImage:`url(${background})`,
    backgroundAttachment:"fixed",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    margin:"0px",
}
var st={
    backgroundColor:"rgba(0,0,0,0.2)",
}
class FindDoctor extends React.Component{
    state={
        search:'',
        doctor:[]
    }
    changeText=(e)=>{
        this.setState({
        [e.target.name]:e.target.value
        })

    }
    componentDidMount(){
        axios.get("http://localhost:5000/doctors/viewdocs")
        .then(doctors=>{
            this.setState({
                doctor:doctors.data
            })
        })
        .catch(err=>{
            alert(err);
        })
    }
    render(){
        const {doctor}=this.state;
        const docList=doctor.length?(
            doctor.filter((doctor)=>{
                return doctor.fullName.toLowerCase().includes(this.state.search.toLowerCase())||!this.state.search;
            }).map(doc=>{
                return(
                    <div className="post card" key={doc._id} style={st}>
                        <div className="card-content white-text">
                            <span className="card-title">{doc.fullName}</span>
                            <p>{doc.specialization}<Link to={"/doctors/"+doc._id}><span className="btn-small indigo right">Book Now</span></Link></p>
                            <p>{doc.worksat}</p>
                        </div>
                    </div>
                )
            })
        ):(
            <div className="center">no doctors yet</div>
        )
    return(
        <div className="section" style={back}>
        <br/><br/><br/><br/>
            <span className="btn-floating indigo right darken-1 center-align z-depth-0" onClick={this.getDoctor}>
                <i className="material-icons">search</i>
            </span>
            <span className="right input-field" >
                <input type="text" name="search" id="search" autoComplete="off" onChange={this.changeText}/>
                <label htmlFor="search">Search Doctor</label>
            </span>
        <div className="container" >
           
            <br/><br/><br/><br/>
            <div>{docList}</div>
        </div>
        </div>
    )
    }
}
export default FindDoctor;