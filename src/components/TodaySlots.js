import React,{Component} from 'react';
import cookie from 'react-cookies';
import axios from 'axios';
var st1={
    backgroundColor:"rgba(0,0,0,0.6)",
    width:"400px",
    position:"relative",
    top:"300px",
    left:"500px"
}
var st={
    margin:"0px",
    height:"700px"
  }
class TodaySlots extends Component{
    state={
        doctor:cookie.load('firstName')+cookie.load('lastName'),
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
                  <div className="col s12 l4 offset-l3">
                      <div className="card white-text" style={st1}>
                      <div className="card-content">
           <table className="centered">
               
                <thead><tr><th>Patient</th><th>Time</th></tr></thead>
                <tbody>
                {sList}
                </tbody>
            </table>
            </div>
            </div>
            </div>
            </div>
        )
    }
}
export default TodaySlots;