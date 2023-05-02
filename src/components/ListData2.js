import React, { useState, useEffect } from 'react';

const ListData2 = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    GetData();
  }, []);

  const GetData = async () => {
    let res = await fetch('http://127.0.0.1:4000/list2');
    res = await res.json();
    setData(res);
  };
  const searchHandle = async (event) => {
    let key = event.target.value;
    if (key) {
      let res = await fetch('http://localhost:4000/search/' + key);
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
        <table>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Organ</th>
            <th>city</th>
          </tr>
          {data.length > 0 ? (
            data.map((val, id) => (
              <tr key={val._id}>
                <td>{id + 1}</td>
                <td>{val.firstName}</td>
                <td>{val.email}</td>
                <td>{val.organ}</td>
                <td>{val.city}</td>
              </tr>
            ))
          ) : (
            <h1>Data not Found</h1>
          )}
        </table>
      </center>
    </div>
  );
};

export default ListData2;
