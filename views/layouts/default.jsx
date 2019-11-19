const React = require('react');

function Layout(props) {
  const { title, children, t } = props;
  return (
    <html>
      <head>
        <title>{title ? t(title) : t("Notices de montage et d'utilisation")}</title>
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
          <section className="top-lang row">
            <div className="wrap row">
              <div style={{ display: "inline-block", float: "left" }}>
                <a href="//www.dagoma3d.com" target="_blank"><img src='/favicon.png' style={{ height: "18px", top: "2px", position: "relative" }} /></a> | <a href="/"><i className="fa fa-home"></i></a>
              </div>
              <div style={{ display: "inline-block", float: "right" }}>
                <a className="user-locale" data-id='en' href='#'>en</a> | <a className="user-locale" data-id='fr' href='#'>fr</a>
              </div>
            </div>
          </section>
          {children}
        </div>
        <script src="//code.jquery.com/jquery-3.4.1.min.js"></script>
        <script src="//stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
        <script src="//code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>
        <script src="//cdn.plyr.io/3.5.6/plyr.js"></script>
        <script src="/js/dagoma.js"></script>
        <script src="/js/plyr.setup.js"></script>
        <script src="/js/navbar.js"></script>
        <script src="/js/scroll.js"></script>
        <script src="/js/interface-cura.js"></script>
        <script src="/js/moving-top.js"></script>
        <script src="/js/cookie.js"></script>
      </body>
    </html>
  );
}

module.exports = Layout;