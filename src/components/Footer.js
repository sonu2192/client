import React from 'react';
import {Link} from 'react-router-dom';
const Footer=()=>{
    return(
            <footer className="page-footer grey darken-3">
                <div className="container">
                    <div className="row">
                        <div className="col s12 m6 left-align">
                        <h5>About Us</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, ipsa praesentium. A laboriosam magni reiciendis itaque ex facilis beatae, sunt neque quisquam ut quibusdam. Pariatur ipsa vel veniam animi maiores?
                            </p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quis nostrum est doloribus minima voluptatum quod, consequuntur necessitatibus quaerat. Ipsa totam deleniti delectus aliquam accusamus odio optio quos perspiciatis iste.
                            </p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, ratione. Voluptate sit, voluptatem harum illo qui dolorum eligendi totam explicabo. Maxime cumque nostrum est inventore reprehenderit quaerat sapiente delectus corrupti!
                            </p>
                        </div>
                        <div className="col s12 m4 offset-m2">
                            <h5>Connect</h5>
                            <ul>
                                <li><Link to="#" className="grey-text text-lighten-3">Facebook</Link></li>
                                <li><Link to="#" className="grey-text text-lighten-3">Twitter</Link></li>
                                <li><Link to="#" className="grey-text text-lighten-3">Linked In</Link></li>
                                <li><Link to="#" className="grey-text text-lighten-3">Instagram</Link></li>
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