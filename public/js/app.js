/**
 * News Tangles front-end entry
 */

var React = require('react');
window.React = React;


var NavBar = require('./components/NavBar.react');
var NewsItem = require('./components/NewsItem.react');


var App = React.createClass ({

  render: function () {
    return (
      <div>
        <NavBar />
        <NewsItem />
      </div>
    )
  }

});


React.render(
  <App />,
  document.getElementById('app')
);
