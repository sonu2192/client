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
        axios.get("http://localhost:5000/admin/viewtemp")
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
                            <p>{doc.specialization}<Link to={"/admin/"+doc._id}><span className="btn-small indigo right">View</span></Link></p>
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
        <div className="container" >
            <div className="post card transparent z-depth-2 row" style={{padding:"30px"}}>
            <input type="texts" id="search" autoComplete="off" style={{borderStyle:"solid",lineHeight:"50px",height:"50px",borderColor:"#4a148c",borderRadius:"40px 0px 0px 40px",outline:"none"}} className="search col s10" name="search" onChange={this.changeText}/>
            <span className="btn col s2 purple purple darken-4" style={{height:"50px",border:"1.5px",lineHeight:"48px",borderStyle:"solid",borderColor:"#4a148c",borderRadius:"0px 40px 40px 0px"}}><i className="material-icons  center">search</i></span>
            </div>
            <br/><br/><br/><br/>
            <div>{docList}</div>
        </div>
        </div>
    )
    }
}
export default FindDoctor;