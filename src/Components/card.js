import React from 'react'
const Users = ({loading,users}) => {
    return loading ? (
          <div id="main">
            <img src="https://lh4.googleusercontent.com/proxy/tfa-w80LVQvhS6F1hAmT2-Owz6qL9y-C3pZDqag4m9qYvc0ydhQyynWSFa6EJWH1ISjDdXe3fv6Ssh-KrpLXCH4p9ACzHH2il9DK8Uh_FZ0jIX-K3LR0JdU9SeOEBe_dCgYwVYeGcEixhJsLRJfqf2afQn_PrLDgRfEO0oRJqZY=s0-d" alt="Loading..." className="loader"/>
          </div>
        ) :
        (
          <div className='row justify-content-center' id="main">  
          {users.map(user =>
                      <div className="col-sm-12 col-md-6 col-lg-4">
                        <div className="my-3 card">
                          <img src={user.avatar} alt={user.avatar} className="avatar"></img>
                          <h4 className="py-1">ID: {user.id}</h4>
                          <h3 className="name">{user.first_name} {user.last_name}</h3>
                          <p className="email">{user.email}</p>
                        </div>
                      </div>
            )
          }
          </div>
        )
}

export default Users