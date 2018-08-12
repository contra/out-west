import { PureComponent } from 'react'
import Navigation from '../components/Navigation'

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

export default class Index extends PureComponent {
  render() {
    return <div className="index-page">
      <Navigation />
      <p className="title">Out West</p>
      <style global jsx>{rootStyles}</style>
      <style global jsx>{`
        .index-page {
          display: flex;
          height: 100%;
          flex-direction: column;
          align-items: center;
          padding: 32px;
        }
        .title {
          font-size: 100px;
          color: white;
          margin-top: 40vh;
        }
      `}</style>
    </div>
  }
}
