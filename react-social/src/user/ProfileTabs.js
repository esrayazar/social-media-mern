import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import DefaultProfile from '../images/profilepic.jpg'

class ProfileTabs extends Component {
  render() {
      const {following, followers} =this.props
    return (
      <div>
         <div className="row">
             <div className="col-md-4">
                 <h3 className="text-primary"> Followers</h3>
                 <hr/>
                 {followers.map((person, i) =>
                      <div key={i}> 
                        <div className="row">
                            <div>
                                <Link to={`/user/${person._id}`}>
                                    <img className="float-left mr-2"
                                    height="30px"
                                     onError= {i =>(i.target.src =`${DefaultProfile}`)}
                                    src={`${process.env.REACT_APP_API_URL}/user/photo/${person._id}`}
                                    alt={person.name}
                                    />
                                    <div className="lead">
                                        {person.name}
                                    </div>
                                </Link>
                                <p style={{clear: 'both'}}>
                                    {person.about}
                                </p>
                            </div>
                        </div>
                     </div>
                 )}
             </div>
            
         </div>
         
      </div>
    )
  }
}

export default ProfileTabs