import React,{Component} from 'react';
import cookie from 'react-cookies';
import axios from 'axios';
import back3 from "./back2.jpg";
var st1={
    backgroundColor:"rgba(0,0,0,0.6)",
    position:"relative",
    width:"600px",
    left:"30%",
}
var st={
    backgroundImage:`url(${back3})`,
    margin:"0px",
  }
class TodaySlots extends Component{
    state={
        doctor:cookie.load('fullName'),
        date:new Date().getDate()+'-'+(new Date().getMonth()+1)+'-'+new Date().getFullYear(),
        slots:[]
    }
    componentDidMount()
    {
        console.log(this.state.doctor);
        console.log(this.state.date);
        axios.post("http://localhost:5000/bookslot/getSlots",this.state)
        .then(res=>{
            this.setState({
                slots:res.data
            })
            console.log(this.state.slots);
        })
        .catch(err=>{
            alert(err);
        })
    }
    render()
    {
        const slots=this.state.slots;
        const sList=slots.length?(
            slots.map(slot=>{
                return(
                    
                            <tr key={slot._id}><td>{slot.patientName}</td><td>{slot.time}</td></tr>
                )
            })
        ):(<tr><td>No Bookings Today</td></tr>)
        return(
            <div className="section" style={st}>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                  <div className="row">
                      <div className="card black-text" style={st1}>
                          <div className="card-title center indigo white-text" style={{lineHeight:"50px",height:"50px"}}>Today Slots</div>
                      <div className="card-content white" style={{padding:"30px"}}>
           <table className="centered">
               
                <thead><tr><th>Patient</th><th>Time</th></tr></thead>
                <tbody>
                {sList}
                </tbody>
            </table>
            </div>
            </div>
            </div>
            <br/><br/>
            </div>
        )
    }
}
export default TodaySlots;