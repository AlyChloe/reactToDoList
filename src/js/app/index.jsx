import ReactDOM from 'react-dom';
import React from 'react';

var Application = React.createClass({
  render: function() {
    return (
      <div className="app-container">
        <header>
          <div className="addItem">
            <input type="text" placeholder="List item..." />
            <p>for</p>
            <input type="text" placeholder="Choose list..." />
            <button>Add</button>
          </div>
        </header>
        <aside>
          <div className="logo"></div>
        </aside>
      </div>
    )
  }
});

ReactDOM.render(<Application/>, document.getElementById('container'));
