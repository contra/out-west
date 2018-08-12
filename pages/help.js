import { PureComponent } from 'react'
import Head from '../components/Head'

export default class Help extends PureComponent {
  render() {
    return <div className="help-page">
      <Head title="Out West - Help" />
      <p className="title">Help</p>
      <style jsx>{`
        .help-page {
          display: flex;
          height: 100%;
          flex-direction: column;
          align-items: center;
          padding: 32px;
        }
        .title {
          font-size: 68px;
          color: white;
        }
      `}</style>
    </div>
  }
}
