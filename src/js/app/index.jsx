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
Titles Section
****************************/
var Titles = React.createClass({
  render: function() {
    return (
      <div className="titles">
        <div className="title">
          <h3>Item</h3>
        </div>
        <div className="title">
          <h3>Url</h3>
        </div>
        <div className="title">
          <h3>Added</h3>
        </div>
      </div>
    )
  }
})

/****************************
Content Section
****************************/
var Content = React.createClass({
  render: function() {
    return (
      <div className="content-container">
        <div className="content">
          <p>Buy new shoes</p>
        </div>
        <div className="content">
          <p>link</p>
        </div>
        <div className="content">
          <p>3/24/2017</p>
        </div>
        <div className="content">
          <i className="fa fa-check-circle"></i>
          <i className="fa fa-times-circle"></i>
          <i className="fa fa-pencil"></i>
        </div>
      </div>
    )
  }
})

/****************************
Main Container Section
****************************/
var MainSection = React.createClass({
  render: function() {
    return (
      <section className="main-container">
        <Titles/>
        <Content/>
      </section>
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
        <MainSection/>
      </div>
    )
  }
});

ReactDOM.render(<Application/>, document.getElementById('container'));
