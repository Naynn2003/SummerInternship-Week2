import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

function CovidTable() {
  const [covidData, setCovidData] = useState([]);

  useEffect(() => {
    fetch('https://data.covid19india.org/data.json')
      .then(response => response.json())
      .then(data => {
        const statewiseData = data.statewise.slice(1); // Exclude the total data
        setCovidData(statewiseData);
      });
  }, []);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>State Name</th>
          <th>Total Confirmed</th>
          <th>Total Recovered</th>
          <th>Total Deaths</th>
        </tr>
      </thead>
      <tbody>
        {covidData.map(state => (
          <tr key={state.state}>
            <td>{state.state}</td>
            <td>{state.confirmed}</td>
            <td>{state.recovered}</td>
            <td>{state.deaths}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default CovidTable;
