import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function PicComponent(props) {
  return (
    <div className="card m-1">
      <img src={props.pic.largeImageURL} className="card-img-top"/>
      <div className="card-body">
        <label>Id: </label>
        <span className="card-text"> {props.pic.id}</span>
      </div>
    </div>
  )
}

export default PicComponent