import React,{Component} from 'react';
import Navbar from './components/Navbar.js';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './components/Home';
import ViewMedicine from './components/ViewMedicine';
import FindDoctor from './components/FindDoctor';
import Footer from './components/Footer';
import Login from './components/login';
import PatientRegistration from './components/PatientRegistration';
import ViewDoc from './components/ViewDoc';
import Prescription from './components/prescription';
import PatientView from './components/PatientView';
import TodaySlots from './components/TodaySlots';
import Logout from './components/Logout';
import Account from './components/Account';
import DocHome from './components/DocHome';
import Authenticate from './components/authenticate';
class App extends Component{
  render(){
    //console.log(this.state.Authentication);
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar Authentication />
        <Route exact path='/' component={Login}/>
        <Route path='/Register' component={PatientRegistration}/>
        <Route path='/Home' component={Home}/>
        <Route path='/ViewMed' component={ViewMedicine}/>
        <Route path='/FindDoctor' component={FindDoctor}/>
        <Route path="/doctors/:doc_id" component={ViewDoc}/>
        <Route path='/medicines/ViewMedicine' component={Prescription}/>
        <Route path="/FindPatient"  component={PatientView}/>
        <Route path="/upload/:patient_id" component={Prescription}/>
        <Route path="/viewSlots" component={TodaySlots}/>
        <Route path="/Account" component={Account} />
        <Route path="/Logout" component={Logout}/>
        <Route path="/Auth" component={Authenticate}/>
        <Route path="/DocHome" component={DocHome}/>
        <Footer/>
      </div>
      </BrowserRouter>
    );
    }
}
export default App;
