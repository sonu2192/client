import React,{Component} from 'react';
import slider4 from './slider4.jpg';
import slider3 from './slider3.jpg';
import slider2 from './slider2.jpg';
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
            <div className="carousel">
             <div class="carousel carousel-slider">
              <a class="carousel-item" href="#one!"><img src={slider4}/></a>
              <a class="carousel-item" href="#two!"><img src={slider2}/></a>
              <a class="carousel-item" href="#three!"><img src={slider3}/></a>
            </div>
          </div>
        )
    }
}
export default HomeDoc;