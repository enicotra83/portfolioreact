import './header.css'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
      <input
        className='menu-icon'
        type='checkbox'
        id='menu-icon'
        name='menu-icon'
      />
      <label for='menu-icon'></label>
      <nav className='nav'>
        <ul className='pt-5'>
          <li>
            <Link to='/proyecto'>Work</Link>
          </li>
          <li>
            <Link to='/proyecto'>Studio</Link>
          </li>
          <li>
            <Link to='/proyecto'>News</Link>
          </li>
          <li>
            <Link to='/proyecto'>Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
