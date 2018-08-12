import { PureComponent } from 'react'
import { Loop, Stage, World } from 'react-game-kit'
import PropTypes from 'prop-types'
import Player from './Player'

export default class Game extends PureComponent {
  state = {
    players: []
  }
  renderPlayers() {
    return this.state.players.map((v, idx) =>
      <Player value={v} key={idx} />
    )
  }
  render() {
    return <Loop>
      <Stage>
        <World>
          {this.renderPlayers()}
        </World>
      </Stage>
    </Loop>
  }
}
