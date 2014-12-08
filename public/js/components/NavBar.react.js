/**
 * Navigation Bar component
 */


var React = require('react');

var NavBar = React.createClass({

  render: function() {
    return (
      <div className = "pure-menu pure-menu-open pure-menu-horizontal">
        <ul>
          <li><a href="#">Home</a></li>
          <li className="pure-menu-selected"><a href="#">Flickr</a></li>
          <li><a href="#">Messenger</a></li>
          <li><a href="#">Sports</a></li>
          <li><a href="#">Finance</a></li>
        </ul>
    </div>
    );
  }

});

module.exports = NavBar;
