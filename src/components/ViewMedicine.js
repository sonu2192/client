import React ,{Component} from 'react';
import axios from 'axios';
import cookie from 'react-cookies';
import { CSVLink, CSVDownload } from "react-csv";
import background from './background.jpg';
import med from './medicinesImg.jpg';
var back={
    backgroundImage:`url(${background})`,
    backgroundSize:"cover",
}
var backm={
    border:"0px",
    padding:"0px"
}
var ss={
    backgroundColor:"rgba(255,255,255,0.4)"
}
class ViewMedicine extends Component{
    state={
        patientName:cookie.load('firstName')+" "+cookie.load("lastName"),
        medicinesList:[],
        onlymList:[],
        medCost:[],
    }
    componentDidMount(){
        const M=window.M;
        var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems,{preventScrolling:false});
        axios.post("http://localhost:5000/medicines/medicineList",this.state)
        .then(res=>{
            this.setState({
                medicinesList:res.data
            })
            console.log(res.data);
        })
        .catch(err=>{
            alert(err);
        })
    }
    listfunc(e,list){
        //console.log("this is"+list.doctor);
        this.setState({
            onlymList:list.medicineList
        })
    }
   addToCart(e,list)
   {
       axios.post("http://localhost:5000/medicines/convert")
       .then(res=>{
           console.log(list);
           console.log(res.data);
           var p=list.map(obj=>{
               return res.data.filter(ob=>{
                   return ob.name==obj.name
               })
           })
         this.setState({
             medCost:p
         },
         function(){
         axios.post("http://localhost:5000/medicines/calculateCost",this.state)
         .then(res=>{
             cookie.save('cost',res.data,{path:'/'});
             window.location.replace('http://localhost:8080');
         })
        }
         )
       })
   }
    render()
    {
        const medList=this.state.medicinesList;
        return(
            <div className="section" style={back}>
                <br/><br/><br/><br/>
            <div className="container">
            <div id="modal1" className="modal grey lighten-2" style={backm}>
                <div className="modal-header indigo center white-text" style={{height:"50px"}}><h5 style={{lineHeight:"50px"}}>Prescribed Medicines</h5></div>
                                 <div className="modal-content">
                                   <table>
                                       <thead><tr><th>Type</th><th>Name</th><th>Dosage</th></tr></thead>   
                                   {
                                       this.state.onlymList.map(medicine=>{
                                           return(
                                               <tr><td>{medicine.type}</td><td>{medicine.name}</td><td>{medicine.dosage}</td></tr> 
                                           )
                                       })
                                   }
                                   </table>   
                                 </div>
                                 <div className="modal-footer grey lighten-2">
                                 <div className="btn-small white" onClick={(e)=>{this.addToCart(e,this.state.onlymList)}}><i className="material-icons black-text">shopping_cart</i></div>
                                 <CSVLink data={this.state.onlymList} filename={"medicines.csv"}
                                className="btn-small white"
                                target="_blank"><i className="material-icons black-text">arrow_downward</i></CSVLink>
                                   <a href="#!" className="modal-close waves-effect waves-green btn-flat">Close</a>
                                 </div>
                                 </div>
                {
                    medList.length?(medList.map(list=>{
                        //console.log(list);
                        return(
                            
                            <div className="post card " key={list._id} style={ss}>
                                
                                <div className="card-content">
                                           <span className="card-title">Medicines</span>
                                           <button data-target="modal1" onClick={(e)=>{this.listfunc(e,list)}} className="btn right indigo modal-trigger">View Medicines</button>
                                           <p>Issued By:{"  Dr."+list.doctor}</p>        
                                           <p>Issued on:{" "+list.date}</p>
                                </div>
                            </div>
                        )
                    })
                    ):(<div>No Medicines Yet</div>)
                }
            </div>
            </div>
        )
    }
}
export default ViewMedicine;