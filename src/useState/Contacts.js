import React from 'react'

export function Contacts(props){
    return (
       
        <div className = "contacts">
        <div className="contact-card">
            <img src = "https://picsum.photos/id/1/200/300" />
            <h3>{props.name}</h3>
        </div>
<div className="info-group">
    <i className="fas fa-phone"></i>
    <p>{props.phNumber}</p>
</div>
<div className="info-group">
   <i className="fa fa-envelope" aria-hidden="true"></i>
   <p>{props.email}</p>
</div>
</div> 
       
    
    )
}