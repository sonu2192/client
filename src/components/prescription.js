import React,{Component} from 'react';
import cookie from 'react-cookies';
import axios from 'axios';
import texture from './texture.jpg'
var cardback={
    backgroundImage:`url(${texture})`,
    backgroundSize:"cover",
    color:"white"
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
        doctorName:cookie.load('firstName')+cookie.load('lastName'),
        date:new Date().getDate()+"-"+(new Date().getMonth()+1)+"-"+new Date().getFullYear()
    }
    componentDidMount()
    {
        axios.get("http://localhost:5000/bookslot/"+this.props.match.params.patient_id)
        .then(res=>{
            this.setState({
                patientName:res.data.patientName
            })
        })
    }
    changeHandler(e,index){
       // console.log(e.target.value);
        this.setState({
            medicine:{
            type:document.getElementById('type'+index).value,
            name:document.getElementById('name'+index).value,
            dosage:document.getElementById('dosage'+index).value
            }
         },function(){
            //console.log(this.state);
            this.state.medicines[index]=this.state.medicine
            this.setState({
                medicines:this.state.medicines
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
                price:''
            }
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
    render(){
       // console.log(this.state.medicine);
        return(
            <React.Fragment>
        <div className="container">
            <br/><br/><br/><br/>
            <form action="">
            <h2 className="header center-align">Enter Prescription</h2>
                  <div className="card horizontal z-depth-3 " style={cardback}>
                  <div className="card-stacked">
                  <div className="card-content">
                      <div className="row">
                  <div className="text-field col s2 ">
                      <input type="text" name="patientName" id="patientName" className="white-text" value={this.state.patientName}/>
                      </div>
                  </div>
        <br/>
        {
            this.state.medicines.map((medicine,index)=>{
                return(
                    <div className="row" key={index}>
                        <span className="text-field col s3">
                        <input type="text" name="type" id={"type"+index} className="white-text" onChange={(e)=>this.changeHandler(e,index)}/>
                        <label htmlFor={"type"+index}>Enter the type of Prescription</label>
                        </span>
                        <span className="text-field col s3">
                        <input type="text" name="name" id={"name"+index} className="white-text" onChange={(e)=>this.changeHandler(e,index)}/>
                        <label htmlFor={"name"+index}>Enter the name of Prescription</label>
                        </span>
                        <span className="text-field col s3">
                        <input type="text" className="white-text" name="dosage" id={"dosage"+index} onChange={(e)=>this.changeHandler(e,index)}/>
                        <label htmlFor={"dosage"+index}>Enter the dosage</label>
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
        </React.Fragment>
        
        )
    }
}
export default Prescription;