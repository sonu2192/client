import React ,{Component} from 'react';
import cookie from 'react-cookies';
class Logout extends Component
{
    componentDidMount()
    {
        cookie.remove('Authenthication',{path:'/'});
        cookie.remove('firstName',{path:'/'});
        cookie.remove('lastName',{path:'/'});
        cookie.remove('type',{path:'/'});
        cookie.remove('username',{path:'/'});
        alert('Log out');
        window.location.replace("http://localhost:3000/");
    }
    render()
    {
        return(
            <div></div>
        )
    }
}
export default Logout;