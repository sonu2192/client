import React,{Component} from 'react';
import slider4 from './slider4.jpg';
import slider3 from './slider3.jpg';
import slider2 from './slider2.jpg';
import calend from './cal.jpg'
import patient from './patient.jpg';
import backg from "./back2.jpg";
import back3 from "./back3.jpg";
import health from './health.png';
import { Link } from "react-router-dom";
class HomeDoc extends Component{
    componentDidMount()
    {
        const M=window.M;
        var elems = document.querySelectorAll('.carousel');
        var instances = M.Carousel.init(elems, {fullWidth:true,
        });
        //setInterval(function(){
        //    console.log("2");
        //    M.Carousel.getInstance(elems).;
        //},2000);
    }
    render()
    {
        return(
            <React.Fragment>
                <br/><br/>
                <div className="row" style={{"backgroundImage":`url(${back3})`,margin:"0",height:"360px",width:"100%",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
                </div>
                <div>

                <div className="container">
                    <br/>
            <div className="row" style={{padding:"30px"}}>
                
            </div>
            <div className="row">
                <a href="/viewSlots"><div className="post card col s12 l6 center" style={{padding:"20px",cursor:"pointer"}}><img src={calend} width="300px" height="300px" alt=""/></div></a>
                <a href="/FindPatient"><div className="post card col s12 l5 center offset-l1" style={{padding:"20px",cursor:"pointer"}}><img src={patient} width="300px" height="300px" alt=""/></div></a>
            </div>
            </div>
            <br/><br/><br/>
            <div>
            <div className="row white" style={{"backgroundImage":`url(${health})`,margin:"0",height:"360px",width:"100%",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
                </div>
                </div>
            </div>
          </React.Fragment>
        )
    }
}
export default HomeDoc;