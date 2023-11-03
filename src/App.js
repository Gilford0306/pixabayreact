import { useEffect, useState } from 'react';
import axios from 'axios';
import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import PicComponent from './PicComponent';


function App(props) {
  const [url, setUrl] = useState('https://localhost:7112/api/Hits/GetHits');
  const [pics, setPics] = useState([]);
  const [searchStr, setSearchStr] = useState("");
  const [flag, setFlag] = useState(false);

  function parsePics() {
    axios({
      method: 'post',
      url: `${url}?request=${searchStr}`,
      data: null,
    }).then(res => {
      setPics([]);
      setPics(res.data.value);
    })
  }

  useEffect(parsePics, [flag])

  function search() {
    parsePics();
    setFlag(!flag);
  }

  return (
    <div className="container">
      <div className="container-sm d-flex p-0 d-flex justify-content-center">
        <input className="m-1" onChange={e => setSearchStr(e.target.value)} value={searchStr} placeholder="Search pics"></input>
      </div>
      <div className="container-sm d-flex p-0 d-flex justify-content-center">
        <button className="btn btn-primary m-1" onClick={search}>Search</button>
      </div>
      <div className="container-sm d-flex p-3 flex-wrap justify-content-evenly">
        {pics == null ? null : pics.map((pic) => <PicComponent key={pic.id} pic={pic}/>)}
      </div>
    </div>
  );
}

export default App;
