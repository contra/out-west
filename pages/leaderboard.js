import { PureComponent } from 'react'
import fetch from 'isomorphic-unfetch'
import Head from '../components/Head'

export default class Leaderboard extends PureComponent {
  static getInitialProps = async () => {
    const res = await fetch('https://todo-leaderboard-api.com')
    const data = await res.json()
    return { results: data }
  }
  render() {
    return <div className="leaderboard-page">
      <Head title="Out West - Leaderboard" />
      <p className="title">Leaderboard</p>
      <style jsx>{`
        .leaderboard-page {
          display: flex;
          height: 100%;
          flex-direction: column;
          align-items: center;
          padding: 32px;
        }
        .title {
          font-size: 40px;
          color: white;
        }
      `}</style>
    </div>
  }
}
