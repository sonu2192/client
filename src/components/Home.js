import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import slider1 from './slider1.jpg';
import slider2 from './slider2.jpg';
import slider3 from './slider3.jpg';
import parallax1 from './background.jpg';
import parallax2 from './background1.jpg';
import parallax3 from './background2.jpg';
import img4 from './back4.jpg';
const pos={
  position:"relative",
  top:"-200px"
}
const pp={
  
}
class Home extends Component{
  constructor(props){
    super(props)
  }
  componentDidMount(){
    var M=window.M;
    var options = {
        fullWidth: true, 
        indicators: true
    };
    var elem = document.querySelector('.carousel');
    var instance = M.Carousel.init(elem, {
      fullWidth:true
    });
      var elems1 = document.querySelectorAll('.parallax');
      var instances1 = M.Parallax.init(elems1, {});
  }

    render(){
    return(
        <React.Fragment>
          <div className="parallax-container">
           <div className="parallax"><img src={img4} alt="not found"/></div>
         </div>
          <div className="section white">
          <div className="container">
          <h4 class="header" style={{color:"#ff6f00"}}>Don't waste your time searching for doctors, we are here for you</h4>
          <p>E-Swasth is a platform which helps patients to find best doctor for their problem and they can also book an appointment online and they can view the prescription uploaded by the doctor online.
            All the required features such as booking an appointment and view the prescription, downloading it and then the payment for the medicine can be done online.
          </p>

          </div>
          </div>
          <div className="parallax-container">
                   <div className="parallax"><img src={parallax2} alt="not found"/></div>
            </div>
            <div class="section white">
          <div class="container">
          <h4 class="header" style={{color:"#ff6f00"}}>Why us?</h4>
          <ul>
            <li><span style={{color:"#ff6f00"}}>></span>         We provide best quality of medicines
              <ul>
                <li><span style={{color:"#ff6f00"}}>></span>         We have verified and saved all the medicines that are best</li>
              </ul>
            </li>
            <li><span style={{color:"#ff6f00"}}>></span>         We are Trustworthy</li>
            <li><span style={{color:"#ff6f00"}}>></span>         Every doctor is verified by our admin and you can choose from various doctors</li>
            <li><span style={{color:"#ff6f00"}}>></span>         We provide best Services</li>
          </ul>
          </div>
          </div>
          <div className="parallax-container">
                   <div className="parallax"><img src={parallax3} alt="not found"/></div>
            </div>
        </React.Fragment>
    );
    }
}
export default Home;