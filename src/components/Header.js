import PropTypes from 'prop-types'
// impt will import pro types
import Button from './Button'
import { useLocation } from "react-router-dom";
//rafce will create the boiler plate for the const header
const Header = ({ title, onAdd, showAdd }) => {
    const location = useLocation()
    return (
        <header className='header'>
            <h1>{title}</h1>
            {location.pathname === '/' && <Button onClick={onAdd} color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} />}
        </header>
    )
}

Header.defaultProps = {
    title: 'Yolo'
}

Header.propTypes = {
    title: PropTypes.string
}

export default Header
