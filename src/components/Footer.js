import React from 'react';
import {Link} from 'react-router-dom';
const Footer=()=>{
    return(
            <footer className="page-footer grey darken-3" style={{margin:"0px"}}>
                <div className="container">
                    <div className="row">
                        <div className="col s12 m6" style={{textAlign:"justify"}}>
                        <h5>About Us</h5>
                        <p>E-Swasth is a platform which helps patients to find best doctor for their problem and they can also book an appointment online and they can view the prescription uploaded by the doctor online.
                            </p>
                            <p>Good health is basic need of an individual for productive performance but there is no proper concern and awareness of health care among people in this modern world many are as busy in their own life such they don’t even have time to look for good doctor and consult Him/her. As modern problems require Modern solutions, we decided to reduce the gap between Patients and Doctors by Blending Tech into Health care. Here comes E-Swath for all such busy people to find doctor they need by just a click away and book appointments when they needed.
                            </p>
                            <p>The main idea behind developing this Web Application is to keeps the record of patients’, doctors and hospitals. The main Objective of the project is to increase transparency in medical field between patients and doctors. Through the web application, the doctor can upload the prescription and files.
                            </p>
                        </div>
                        <div className="col s12 m4 offset-m2">
                            <h5>Connect</h5>
                            <ul>
                                <li><a href="https://m.facebook.com/story.php?story_fbid=101244141366997&substory_index=0&id=101243671367044" className="grey-text text-lighten-3">Facebook</a></li>
                                <li><a href="https://www.instagram.com/p/B5lLWJOA8YY/?utm_source=ig_web_copy_link
" className="grey-text text-lighten-3">Instagram</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright grey darken-4">
                    <div className="container center-align">&copy; 2019 E-Swasth</div>
                </div>
            </footer>
    )
}
export default Footer;