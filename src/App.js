import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className = "body-wrapper"> 
        <div class = "header">
          <div class = "header-logo">
            <h1>Administration</h1>
            </div>
          <div class = "header-list" >
              <ul>
                <li><a href="#">Edit</a></li>
                <li><a href="#">Comment</a></li>
                <li><a href="#">Assign</a></li>
                <li><a href="#">Cancel</a></li>
              </ul>
          </div>
      </div>
      <table align= "center">
        <tr>
          <td align="right">Tracker:</td>
          <td><input type = "text"></input></td>
        </tr>
        <tr>
          <td align="right">Subject:</td>
          <td><input type = "text" ></input></td>
        </tr>
        <tr>
          <td align="right">Description:</td>
          <td><input type = "text"></input></td>
        </tr>
        <tr>
          <td align="right">Status:</td>
          <td>
            <select name = "status">
                <option value = "Active">Active</option>
                <option value = "Closed">Closed</option>
                <option value = "Resolved">Resolved</option>
            </select>
        </td>
        </tr>
        <tr>
          <td align="right">Priority:</td>
          <td><input type = "text"></input></td>
        </tr>
        <tr>
          <td align="right">Assign:</td>
          <td><input type = "text"></input></td>
        </tr>
        <tr>
          <td align="right">Category:</td>
          <td><input type = "text"></input></td>
        </tr>
        <tr>
          <td align="right">Company name:</td>
          <td><input type = "text"></input></td>
        </tr>
        <tr>
          <td align="right">Contact:</td>
        <td><input type = "text"></input></td>
        </tr>
        <br></br>
          <div align="right">LOG TIME</div>
          <tr>
            <td align="right">Spent time:</td>
            <td><input type = "text"></input></td>hours
            </tr>
          <br></br>
          <tr>
            <td align="right">Activity:</td>
            <td><input type = "text"></input></td>
            </tr>
          <br></br>
         
      </table>
      <p align ="center"> Comment:</p>
      <p><textarea className="text-area" id = "msg" name = "user_message"></textarea></p>
    </div>
  </div>
  );
}

export default App;
