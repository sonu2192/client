import React ,{Component} from 'react';
import axios from 'axios';
import cookie from 'react-cookies';
import { CSVLink, CSVDownload } from "react-csv";
import background from './background.jpg'
import med from './medicinesImg.jpg'
var back={
    backgroundImage:`url(${background})`,
    backgroundSize:"cover",
}
var backm={
    backgroundImage:`url(${med})`,
    backgroundSize:"100% 100%",
    backgroundRepeat:"no-repeat"
}
var ss={
    backgroundColor:"rgba(255,255,255,0.4)"
}
class ViewMedicine extends Component{
    state={
        patientName:cookie.load('firstName')+cookie.load('lastName'),
        medicinesList:[],
        onlymList:[]
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
   
    render()
    {
        const medList=this.state.medicinesList;
        return(
            <div className="section" style={back}>
                <br/><br/><br/><br/>
            <div className="container">
            <div id="modal1" className="modal grey lighten-2" style={backm}>
                                 <div className="modal-content">
                                   <h4>Prescribed Medicines</h4>
                                   <table>
                                       <tr><th>Type</th><th>Name</th><th>Dosage</th></tr>
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
                                 <CSVLink data={this.state.onlymList} filename={"medicines.csv"}
                                className="btn-small indigo primary"
                                target="_blank">Export</CSVLink>
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