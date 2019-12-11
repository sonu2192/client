import React,{Component} from 'react';
import cookie from 'react-cookies';
import axios from 'axios';
import texture from './texture.jpg';
import backg from "./back2.jpg";
var sty={
    cursor:"pointer"
}
var cardback={
    color:"black",
}
class Prescription extends Component{
    state={
        medicine:{
                type:'',
                name:'',
                dosage:''
                 },
        medicines:[],
        patientName:'',
        doctorName:cookie.load('fullName'),
        date:new Date().getDate()+"-"+(new Date().getMonth()+1)+"-"+new Date().getFullYear(),
        response:null
    }
    componentDidMount()
    {
        axios.get("http://localhost:5000/bookslot/"+this.props.match.params.patient_id)
        .then(res=>{
            axios.post("http://localhost:5000/medicines/convert")
              .then(res1=>{
            this.setState({
                patientName:res.data.patientName,
                p:res1.data
            })
        })
        })
    }
    changeHandler(e,index){
       // console.log(e.target.value);
        this.setState({
            medicine:{
            type:document.getElementById('type'+index).value,
            name:document.getElementById('name'+index).value,
            dosage:document.getElementById('dosage'+index).value,
            }
         },function(){
            //console.log(this.state);
            this.state.medicines[index]=this.state.medicine
            this.setState({
                medicines:this.state.medicines,
            })
         })
    }
    addHandler=(e)=>{
        //console.log("Addhandler is called");
        e.preventDefault();
        this.setState({
            medicine:{
                type:'',
                name:'',
                price:'',
            },
        })
        this.setState({
            medicines:[...this.state.medicines,this.state.medicine]
        })
    }
    submitHandler=e=>{
        e.preventDefault();
        axios.post("http://localhost:5000/medicines/StoreMedicine",this.state)
        .then(user=>{
            console.log(user.data);
            alert(user.data);
            window.location.reload();
        })
        .catch(err=>{
           alert('unable to reach the server');
        })
    }
    handleRemove(e,index){
        e.preventDefault();
        this.state.medicines.splice(index,1);
        this.setState({
            medicines:this.state.medicines
        })
    }
    getelems(index)
    {
        if(document.getElementById("name"+index)==null||document.getElementById("name"+index).value=='')
        {
        return <div></div>
        }
        else if(document.getElementById('name'+index).selected==false)
        {
            return <div></div>
        }
        else
        return <div className="collection z-depth-3">{this.state.p.filter(ob=>{return ob.name.toLowerCase().includes(document.getElementById('name'+index).value.toLowerCase())}).map(obj=>{return <div className="collection-item black-text" style={sty} onClick={(e)=>{document.getElementById('name'+index).value=obj.name;document.getElementById('name'+index).selected=false}}>{obj.name}</div>})}</div>
    }
    render(){

        return(
            <React.Fragment>
                <div style={{backgroundImage:`url(${backg})`}}>
        <div className="container">
            <br/><br/><br/><br/>
            <form action="">
                  <div className="card horizontal z-depth-1 " style={cardback}>
                  <div className="card-stacked">
                  <div className="card-title center indigo white-text" style={{font:"algerian",height:"80px",lineHeight:"80px"}}><strong>ENTER PRESCRIPTION</strong></div>
                  <div className="card-content">
                      
                      <div className="row">
                  <div className="text-field col s2 ">
                      <input type="text" name="patientName" id="patientName" required className="black-text" value={this.state.patientName} readOnly/>
                      </div>
                  </div>
        <br/>
        {
            this.state.medicines.map((medicine,index)=>{
                return(
                    <div className="row" key={index}>
                        <span className="text-field col s3">
                        <input type="texts" required style={{height:"40px"}} id={"type"+index} className="black-text" onChange={(e)=>this.changeHandler(e,index)}/>
                        <label htmlFor={"type"+index} className="black-text">Enter the type of Prescription</label>
                        </span>
                        <span className="text-field col s3">
                        <input type="texts" required style={{height:"40px"}} id={"name"+index} className="black-text" onChange={(e)=>this.changeHandler(e,index)} autoComplete="off"/>
                        <label htmlFor={"name"+index} className="black-text">Enter the name of Prescription</label>
                        <div>
                        {
                           this.getelems(index)
                        }
                        </div>
                        </span>
                        <span className="text-field col s3">
                        <input type="texts" style={{height:"40px"}} className="black-text" required name="dosage" id={"dosage"+index} onChange={(e)=>this.changeHandler(e,index)}/>
                        <label htmlFor={"dosage"+index} className="black-text">Enter the dosage</label>
                        </span>
                        <button className="btn small indigo" onClick={(e)=>{this.handleRemove(e,index)}}><i className="material-icons center">delete</i>
                        </button>
                    </div>
                )
            })
        }
        <br/>
        <br/>
        <p className="center-align"><button className="btn big indigo " onClick={this.addHandler}>Add Item</button></p>
        <br/>
        <br/>
        <br/>
        {
            this.state.medicines.length?
            (<button className="btn big indigo" onClick={this.submitHandler}>Submit</button>):(<div></div>)
        }
        </div>
        </div>
        </div>
        </form>
        <br/>
        <br/><br/><br/>
        </div>
        </div>
        </React.Fragment>
        
        )
    }
}
export default Prescription;