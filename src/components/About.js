import User from "./User";
import UserClass from "./UserClass";

const About = () =>{
    return(
        <div>
            <h1>About Us!</h1>
            {/* <User name='balji' location ='bengaluru' connect = 'balurv1997@gmail.com'/> */}
            <UserClass name='balu' location ='chennai' connect = 'balurv@gmail.com'/>
        </div>
    );
}

export default About;