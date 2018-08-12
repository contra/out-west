import { PureComponent } from 'react'
import { Loop, Stage, World } from 'react-game-kit'
import PropTypes from 'prop-types'
import Player from './Player'

export default class Game extends PureComponent {
  state = {
    players: []
  }
  initialize = () => {
    // TODO: set up map physics
  }
  renderPlayers = () => {
    return this.state.players.map((v, idx) =>
      <Player value={v} key={idx} />
    )
  }
  render() {
    return <Loop>
      <Stage>
        <World onInit={this.initialize}>
          {this.renderPlayers()}
        </World>
      </Stage>
    </Loop>
  }
}
