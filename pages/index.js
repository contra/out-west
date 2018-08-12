import { PureComponent } from 'react'
import cn from 'classnames'
import FadeIn from '../components/FadeIn'
import Navigation from '../components/Navigation'
import Head from '../components/Head'
import Game from '../components/Game'

const startDelay = 5000 // time til first wah-wah

export default class Index extends PureComponent {
  state = { started: false, gaming: false }
  componentWillUnmount() {
    if (this.startTimeout) clearTimeout(this.startTimeout)
  }
  setAudio = (e) => {
    this.audio = e
  }
  start = () => {
    this.setState({ started: true })
    this.audio.src = './static/intro.mp3'
    this.startTimeout = setTimeout(this.beginGame, startDelay)
  }
  beginGame = () => {
    this.setState({ gaming: true })
  }
  render() {
    return <div className="index-page">
      <Head title="Out West - Play" />
      <Navigation />
      {/* on start, fade in the title, then fade in the game */}
      { this.state.started && <FadeIn>
        <p className={cn('title', { hide: this.state.gaming })}>Out West</p>
      </FadeIn> }
      { this.state.started
        ? this.start.gaming && <FadeIn><Game /></FadeIn>
        : <button
          className={cn('start', { hide: this.state.started })}
          onClick={this.start}>
            Click to begin
          </button>
      }
      <audio loop autoPlay ref={this.setAudio} />
      <style jsx>{`
        .index-page {
          display: flex;
          height: 100%;
          flex-direction: column;
          align-items: center;
          padding: 32px;
        }
        .start, .title {
          transition: opacity 400ms ease-in-out;
          color: white;
          margin-top: 40vh;
        }
        .start {
          font: inherit;
          background: none;
          border: none;
          outline: none !important;
          padding: 32px;
          letter-spacing: 4px;
          font-size: 30px;
          border: 2px dashed white;
          border-radius: 4px;
        }
        .title {
          font-size: 100px;
        }
        .hide {
          opacity: 0;
        }
      `}</style>
    </div>
  }
}
