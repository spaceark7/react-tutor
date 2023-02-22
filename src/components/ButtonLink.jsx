import { Link } from 'react-router-dom'

const ButtonLink = ({ href, title }) => {
  return <Link to={href}>{title}</Link>
}

export default ButtonLink
