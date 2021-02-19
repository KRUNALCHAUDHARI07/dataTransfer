import React, { Component } from 'react';
import axios from 'axios';

export class ServerComponent extends Component {
   constructor(props){
       super(props);

       this.state = {
           data : []
       }
   }
   componentDidMount(){
        fetch('http://localhost:5000/api/members')
        .then(res => res.json())
        .then(jsonData => this.setState( {data : jsonData.data} ))
   }
   
    render(){
        const { data } = this.state
        return(
            <div>
                 <ul>
        {data.map(hit =>
          <li key={hit.id}>
            <a href={hit.name}>{hit.name}</a>
          </li>
        )}
      </ul>
            </div>
        )
    }
      
}

export default ServerComponent
