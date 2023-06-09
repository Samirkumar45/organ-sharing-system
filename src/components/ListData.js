import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';

const ListData = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    GetData();
  }, []);

  const GetData = async () => {
    let res = await fetch('http://127.0.0.1:4000/list');
    res = await res.json();
    setData(res);
  };
  const searchHandle = async (event) => {
    let key = event.target.value;
    if (key) {
      let res = await fetch('http://127.0.0.1:4000/search/' + key);
      res = await res.json();
      if (res) {
        setData(res);
      }
    } else {
      GetData();
    }
  };
  return (
    <div>
      <center>
        <br />
        <input
          type='text'
          placeholder='Search Organ'
          className='searchbox'
          onChange={searchHandle}
        ></input>
        <br />
        <br />
        <br />
        {/* <table>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>ContactNumber</th>
            <th>website</th>
            <th>city</th>
            <th>address</th>
          </tr>
          {data.length > 0 ? (
            data.map((val, id) => (
              <tr key={val._id}>
                <td>{id + 1}</td>
                <td>{val.Name}</td>
                <td>{val.ContactNumber}</td>
                <td>{val.website}</td>
                <td>{val.city}</td>
                <td>{val.address}</td>
                {/* <td><button>Request</button></td> */}
        {/* </tr> */}
        {/* )) */}
        {/* ) : ( */}
        {/* <h1>Data not Found</h1> */}
        {/* )} */}
        {/* </table> */}
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>ContactNumber</th>
              <th>website</th>
              <th>city</th>
              <th>address</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((val, id) => (
                <tr key={val._id}>
                  <td>{id + 1}</td>
                  <td>{val.Name}</td>
                  <td>{val.ContactNumber}</td>
                  <td>{val.website}</td>
                  <td>{val.city}</td>
                  <td>{val.address}</td>
                </tr>
              ))
            ) : (
              <h1>Data not Found</h1>
            )}  
          </tbody>
        </Table>
      </center>
    </div>
  );
};

export default ListData;
