import React from 'react'
import ReactGA from 'react-ga'
import Head from 'next/head'
import Topbar from './topbar'

export default class extends React.Component {
  componentDidMount () {
    ReactGA.initialize('UA-106008527-3')
    ReactGA.pageview(document.location.pathname)
  }

  render () {
    return (
      <div>
        <Head>
          <meta charset='UTF-8' />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0'
          />
          <meta http-equiv='X-UA-Compatible' content='ie=edge' />
          <link
            rel='apple-touch-icon'
            sizes='57x57'
            href='https://arsenal-faviconico-zmwcbetsrw.now.sh/apple-icon-57x57.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='60x60'
            href='https://arsenal-faviconico-zmwcbetsrw.now.sh/apple-icon-60x60.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='72x72'
            href='https://arsenal-faviconico-zmwcbetsrw.now.sh/apple-icon-72x72.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='76x76'
            href='https://arsenal-faviconico-zmwcbetsrw.now.sh/apple-icon-76x76.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='114x114'
            href='https://arsenal-faviconico-zmwcbetsrw.now.sh/apple-icon-114x114.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='120x120'
            href='https://arsenal-faviconico-zmwcbetsrw.now.sh/apple-icon-120x120.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='144x144'
            href='https://arsenal-faviconico-zmwcbetsrw.now.sh/apple-icon-144x144.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='152x152'
            href='https://arsenal-faviconico-zmwcbetsrw.now.sh/apple-icon-152x152.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='https://arsenal-faviconico-zmwcbetsrw.now.sh/apple-icon-180x180.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='192x192'
            href='https://arsenal-faviconico-zmwcbetsrw.now.sh/android-icon-192x192.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='https://arsenal-faviconico-zmwcbetsrw.now.sh/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='96x96'
            href='https://arsenal-faviconico-zmwcbetsrw.now.sh/favicon-96x96.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='https://arsenal-faviconico-zmwcbetsrw.now.sh/favicon-16x16.png'
          />
          <link
            rel='manifest'
            href='https://arsenal-faviconico-zmwcbetsrw.now.sh/manifest.json'
          />
          <meta name='msapplication-TileColor' content='#ffffff' />
          <meta name='msapplication-TileImage' content='/ms-icon-144x144.png' />
          <meta name='theme-color' content='#ffffff' />
          <link
            href='https://fonts.googleapis.com/css?family=Raleway'
            rel='stylesheet'
          />
          <title>TV Arsenal</title>
        </Head>
        <Topbar />
        <main>
          <div className='flex-container'>{this.props.children}</div>
        </main>
        <footer>
          <a href='https://pablo.life'>Pablo Varela</a>
        </footer>
        <style global jsx>{`
          body {
            margin: 0;
            padding: 0;
            color: crimson;
            font-family: Raleway, sanserif;
          }
          *::selection {
            background-color: #79ffe1;
          }
          ul {
            padding: 0;
          }
          main {
            z-index: 2;
            position: relative;
            background-color: white;
            margin-top: 120px;
          }
          .flex-container {
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
          }
          footer {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 1em;
          }
          footer a {
            color: cornflowerblue;
            text-decoration: none;
            font-size: 0.7em;
          }
          footer a:hover {
            text-decoration: underline;
            color: aquamarine;
          }
        `}</style>
      </div>
    )
  }
}
