import { PureComponent } from 'react'
import Navigation from '../components/Navigation'
import Head from '../components/Head'

export default class Index extends PureComponent {
  render() {
    return <div className="index-page">
      <Head title="Out West - Play" />
      <Navigation />
      <p className="title">Out West</p>
      <style jsx>{`
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
