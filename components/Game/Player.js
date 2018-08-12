import { PureComponent } from 'react'
import { Body } from 'react-game-kit'
import PropTypes from 'prop-types'

export default class Player extends PureComponent {
  static contextTypes = {
    loop: PropTypes.object,
  }
  static propTypes = {
    value: PropTypes.shape({
      name: PropTypes.string.isRequired,
      coordinates: PropTypes.arrayOf(PropTypes.number),
      score: PropTypes.number
    }).isRequired
  }
  componentDidMount() {
    this.context.loop.subscribe(this.update)
  }
  componentWillUnmount() {
    this.context.loop.unsubscribe(this.update)
  }
  update() {
    // todo: tick logic
  }
  render() {
    return <Body args={[0,0,75,75]}>

    </Body>
  }
}
