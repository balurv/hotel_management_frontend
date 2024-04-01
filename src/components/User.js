
const User = ({name, location, connect}) =>{
    return(
        <div className='user'>
            <h1>Person name: {name}</h1>
            <h2>Location: {location} </h2>
            <h3>Connect: {connect} </h3>
        </div>
    )
}

export default User;