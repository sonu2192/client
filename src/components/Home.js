import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import slider1 from './slider1.jpg';
import slider2 from './slider2.jpg';
import slider3 from './slider3.jpg';
import parallax1 from './background.jpg';
import parallax2 from './background1.jpg';
import parallax3 from './background2.jpg';
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
           <div className="parallax"><img src={parallax1} alt="not found"/></div>
         </div>
          <div className="section white">
          <div className="row">
                   1st
          </div>
          </div>
          <div className="parallax-container">
                   <div className="parallax"><img src={parallax2} alt="not found"/></div>
            </div>
            <div class="section white">
          <div class="row container">
                2nd
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