import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

const rootStyles = `
@font-face {
  font-family: 'Goma Western';
  font-style: normal;
  font-weight: normal;
  src: local('Goma Western'), url('./static/gomarice_goma_western.woff') format('woff');
}

/* resets */
html, body, #__next {
  height: 100%;
  width: 100%;
  min-height: 100%;
  user-select: none;
  padding: 0;
  margin: 0;
}

/* our actual custom stuff */
body {
  font-family: "Goma Western", Rockwell, "Courier Bold", Courier, Georgia, Times, "Times New Roman", serif;
  line-height: 26px;
  font-size: 22px;
  font-weight: 300;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #cc3226;
  color: white;
}

* {
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
`

export default class Leaderboard extends PureComponent {
  static propTypes = {
    title: PropTypes.string
  }
  render() {
    return <React.Fragment>
      <Head>
        <title>{this.props.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <style global jsx>{rootStyles}</style>
    </React.Fragment>
  }
}
