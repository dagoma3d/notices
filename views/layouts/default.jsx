var React = require('react');

class Layout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
          <meta name="theme-color" content="#ff8200" />
          <meta name="msapplication-navbutton-color" content="#ff8200" />
          <meta name="apple-mobile-web-app-status-bar-style" content="#ff8200" />
          <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:300,400|Roboto+Condensed:400,700&display=swap" />
          <link rel="stylesheet" href="//cdn.plyr.io/3.5.6/plyr.css" />
          <link rel="stylesheet" href="//stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
          <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.min.css" />
          <link rel="stylesheet" href="/css/dagoma.css" />
          <link rel="stylesheet" href="/css/content.css" />
          <link rel="stylesheet" href="/css/grid-24.min.css" />
          <link rel="stylesheet" href="/css/clear-recurrent.css" />
          <link rel="stylesheet" href="/css/new-dagoma.css" />
          <link rel="icon" href="/favicon.png" />
        </head>
        <body>
          <div id="body" className="container row">
            {this.props.children}
          </div>
          <script src="//code.jquery.com/jquery-3.4.1.min.js"></script>
          <script src="//stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
          <script src="//code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>
          <script src="//cdn.plyr.io/3.5.6/plyr.js"></script>
          <script src="/js/dagoma.js"></script>
          <script src="/js/router.js"></script>
          <script src="/js/routing_callback.js"></script>
          <script src="/js/plyr.setup.js"></script>
          <script src="/js/navbar.js"></script>
          <script src="/js/scroll.js"></script>
          <script src="/js/interface-cura.js"></script>
        </body>
      </html>
    );
  }
}

module.exports = Layout;