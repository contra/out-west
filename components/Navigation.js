import { PureComponent } from 'react'
import Link from 'next/link'

export default class Navigation extends PureComponent {
  render() {
    return <div className="navigation-component">
      <Link href="/"><a>Play</a></Link>
      <Link href="/leaderboard"><a>Leaderboard</a></Link>
      <Link href="/help"><a>Help</a></Link>
      <style jsx>{`
        .navigation-component {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-shrink: 0;
          color: white;
        }
        a {
          color: inherit !important;
          text-decoration: none;
          margin-right: 16px;
        }
        a:last-child {
          margin-right: 0;
        }
      `}</style>
    </div>
  }
}
