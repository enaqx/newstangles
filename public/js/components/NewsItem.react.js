/** 
 * Main Carousel component
 */

var React = require('react');

var NewsItem = React.createClass({

  render: function() {
    return (
      <article className = 'news-item'>
        <div className = 'news-author'>John Smith</div>
        <header className = 'news-header'>News Header</header>
        <figure className = 'news-figure'></figure>
        <ul className = 'news-stats'>News Content</ul>
      </article>
    );
  }

});

module.exports = NewsItem;