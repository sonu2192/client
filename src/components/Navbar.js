import React,{Component} from 'react';
import {NavLink,Link} from 'react-router-dom';
import cookie from 'react-cookies';
import logo from './logo.png'
var st={
    position:"fixed",
    top:"0px",
    backgroundColor:"rgba(0,0,0,0.6)",
    zIndex:"2",
}
var im={
    position:"absolute",
    top:"-10px",
    zIndex:"2",
    left:"20px"
}
class Navbar extends Component{
    componentDidMount(){
        console.log("Hello");
        const M=window.M;
        var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems,{});

    var elems1 = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems1,{
        coverTrigger:false,
        hover:true
    });
    }
    render(){
        console.log(cookie.load('type'));
        console.log(cookie.load('Authenthication'));
        if((cookie.load('type')==='patient'&&cookie.load('Authenthication')==='true')){
            const initials=(cookie.load('firstName')[0]+cookie.load('lastName')[0]).toUpperCase();
    return(
        <div>
        <nav className="nav-wrapper" style={st}>
            <div className="container">
            <img src={logo} style={im} className="left hide-on-small-only" height="100px" width="168px" alt="Not Found"/> <Link to="" className="brand-logo">E-Swasth</Link>
                <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                <ul className="right hide-on-med-and-down">
                    <li><NavLink to="/Home">Home</NavLink></li>
                    <li><NavLink to="/FindDoctor">Find Doctor</NavLink></li>
                    <li><NavLink to="/ViewMed">View Medicine</NavLink></li>
                    <li> <a className='dropdown-trigger btn-floating red darken-1 center-align z-depth-0' href='#' data-target='dropdown1'>{initials}</a></li>
                </ul>
            </div>
            <ul id="slide-out" className="sidenav">
                 <li><div className="user-view">
                   <div className="background">
                   </div>
                   <a href="#user"><div className="circle indigo center-align valign-wrapper"><i className="material-icons">person</i></div></a>
                   <span className="black-text">{cookie.load('firstName')+cookie.load('lastName')}</span>
                 </div></li>
                 <li><div className="divider"></div></li>
                 <li><a className="subheader">Navigate to</a></li>
                 <li><NavLink to="/Home">Home</NavLink></li>
                    <li><NavLink to="/FindDoctor">Find Doctor</NavLink></li>
                    <li><NavLink to="/ViewMed">View Medicine</NavLink></li>
                    <li><NavLink to="">Logout</NavLink></li>
            </ul>
            <ul id='dropdown1' className='dropdown-content' >
             <li className="white-text "><Link to="/Account">Account</Link></li>
             <li className="white-text"><Link to="/Logout">Logout</Link></li>
           </ul>
        </nav>
        </div>
        )
    }
    else if((cookie.load('type')==='doctor'&&cookie.load('Authenthication')==='true'))
    {
        const initials=((cookie.load('firstName')[0]+cookie.load('lastName')[0])).toUpperCase();
        return(
             <div>
        <nav className="nav-wrapper" style={st}>
            <div className="container">
            <img src={logo} style={im} className="left hide-on-small-only" height="100px" width="168px" alt="Not Found"/><Link to="" className="brand-logo">E-Swasth</Link>
                <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                <ul className="right hide-on-med-and-down">
                    <li><NavLink to="/Home">Home</NavLink></li>
                    <li><NavLink to="/viewSlots">View Todays Slots</NavLink></li>
                    <li><NavLink to="/FindPatient">Find Patient</NavLink></li>
                    <li> <a className='dropdown-trigger btn-floating red darken-1 center-align z-depth-0' href='#' data-target='dropdown1'>{initials}</a></li>
                </ul>
            </div>
            <ul id="slide-out" className="sidenav">
                 <li><div className="user-view">
                   <div className="background">
                   </div>
                   <a href="#user"><div className="circle indigo center-align valign-wrapper"><i className="material-icons">person</i></div></a>
                   <span className="black-text">{cookie.load('firstName')+cookie.load('lastName')}</span>
                 </div></li>
                 <li><div className="divider"></div></li>
                 <li><a className="subheader">Navigate to</a></li>
                 <li><NavLink to="/Home">Home</NavLink></li>
                    <li><NavLink to="/FindDoctor">View Today's Slots</NavLink></li>
                    <li><NavLink to="">Logout</NavLink></li>
            </ul>
            <ul id='dropdown1' className='dropdown-content' >
             <li className="white-text "><Link to="/Account">Account</Link></li>
             <li className="white-text"><Link to="/Logout">Logout</Link></li>
           </ul>
        </nav>
        </div>
        )
    }
    else
    {
        return(
            <div>
            <nav className="nav-wrapper" style={st}>
            <div className="container">
            <img src={logo} style={im} className="left" height="100px" width="168px" alt="Not Found"/><span className="brand-logo">E-Swasth</span></div>
                </nav>
               
            </div>
        )
    }
    }
}
export default Navbar;