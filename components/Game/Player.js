import { PureComponent } from 'react'
import { KeyListener, AudioPlayer, Sprite, Body } from 'react-game-kit'
import PropTypes from 'prop-types'
import Matter from 'matter-js'

export default class Player extends PureComponent {
  static contextTypes = {
    loop: PropTypes.object,
  }
  static propTypes = {
    isControllable: PropTypes.bool,
    onStateChange: PropTypes.func,
    value: PropTypes.shape({
      name: PropTypes.string.isRequired,
      coordinates: PropTypes.arrayOf(PropTypes.number),
      score: PropTypes.number
    }).isRequired
  }
  keys = new KeyListener()
  componentDidMount() {
    this.jumpNoise = new AudioPlayer('/static/jump.wav')

    if (this.props.isControllable) {
      this.keyListener.subscribe([
        this.keys.LEFT, this.keys.RIGHT,
        this.keys.UP, this.keys.DOWN,
        this.keys.SPACE, 65
      ])
    }
    this.context.loop.subscribe(this.update)
  }
  componentWillUnmount() {
    this.context.loop.unsubscribe(this.update)
  }
  setPlayerState = (s) => {
    const { isControllable, onStateChange } = this.props
    this.setState(s)
    if (isControllable && onStateChange) onStateChange(s)
  }
  checkKeys = () => {
    const { keys } = this
    if (keys.isDown(65)) return this.punch()
    if (keys.isDown(keys.SPACE)) return this.jump()
    if (keys.isDown(keys.RIGHT)) return this.move('right')
    if (keys.isDown(keys.LEFT)) return this.move('left')
    if (keys.isDown(keys.UP)) return this.move('up')
    if (keys.isDown(keys.DOWN)) return this.move('down')
  }
  jump = () => {
    this.jumpNoise.play()
    this.setPlayerState({ isJumping: true })
    Matter.Body.applyForce(this.body, { x: 0, y: 0 }, { x: 0, y: -0.15 })
    Matter.Body.set(this.body, 'friction', 0.0001)
  }
  punch = () => {
    this.punchNoise.play()
    this.setPlayerState({ isPunching: true })
  }
  update = () => {
    const { body } = this.body
    const { isControllable } = this.props

    // react to key states
    if (isControllable) this.checkKeys()

    // manage jump state
    const velY = parseFloat(body.velocity.y.toFixed(10))
    if (velY === 0) Matter.Body.set(body, 'friction', 0.9999)
  }
  render() {
    return <Body args={[0,0,75,75]} ref={(b) => this.body = b.body}>

    </Body>
  }
}
