import Users from "./Components/card";
import './App.css';
import React, { Component } from 'react'
	
class App extends Component {
  constructor(props){
	super(props)
	this.state = {users_data :[],
                loading : true                
  }
	this.displayUsers = this.displayUsers.bind(this)
  }
    
  displayUsers(){
      document.getElementById("main").style.display='flex';
      const link="https://reqres.in/api/users?page=1";
      fetch(link)
      .then(response => response.json())
      .then((users) => {
        
        this.setState({users_data :users.data,
                        loading: false
        })
      })
      .catch((error) => {
        console.error(error)
      })
  }
    
  render(){
    return (<>
    

        <div className="container-fluid mt-3">
        <div className="row text-center transparency">
          <div className="col-sm-6 justify-content-around h1div">
            <h1>
              <span>L</span>
              <span>e</span>
              <span>t</span>
              <span>s</span>
              <span>G</span>
              <span>r</span>
              <span>o</span>
              <span>w</span>
              <span>M</span>
              <span>o</span>
              <span>r</span>
              <span>e</span>
            </h1>
          </div>

          <div className="col-sm-6 justify-content-around">
            {/* <span></span>
            <span></span>
            <span></span>
            <span></span> */}
            <button
              className="py-1 px-3 mt-sm-4 mb-2 btn btn-outline-primary"
              onClick={this.displayUsers}
            >
              Get Data
            </button>
          </div>
        </div>
      </div>


      <Users loading={this.state.loading} users={this.state.users_data}/>
    </>
    )
  }
}
	
export default App;