import ReactDOM from 'react-dom';
import React from 'react';

/****************************
Header Section
****************************/
var Header = React.createClass({
  render: function() {
    return (
      <header>
        <div className="logo">
          <i className="fa fa-lightbulb-o" aria-hidden="true"></i>
        </div>
        <div className="addItem">
          <input type="text" placeholder="List item..." />
          <p>for</p>
          <input type="text" placeholder="Choose list..." />
          <button>Add</button>
        </div>
      </header>
    )
  }
})

/****************************
Aside Section
****************************/
var Aside = React.createClass({
  render: function() {
    return (
      <aside>
        <h3>Lists</h3>
        <i className="fa fa-plus-circle" aria-hidden="true"></i>
      </aside>
    )
  }
})

/****************************
Application
****************************/
var Application = React.createClass({
  render: function() {
    return (
      <div className="app-container">
        <Header/>
        <Aside/>
      </div>
    )
  }
});

ReactDOM.render(<Application/>, document.getElementById('container'));
