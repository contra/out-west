import { PureComponent } from 'react'
import fetch from 'isomorphic-unfetch'

export default class Leaderboard extends PureComponent {
  static getInitialProps = async () => {
    const res = await fetch('https://todo-leaderboard-api.com')
    const data = await res.json()
    return { results: data }
  }
  render() {
    return <div className="leaderboard-page">
      <p>TODO</p>
    </div>
  }
}
