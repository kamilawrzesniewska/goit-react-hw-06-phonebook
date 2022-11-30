import PropTypes from 'prop-types';


export const PhoneItem = ({ name, number,toDelete,id }) => {
    return (
        <li>
            <p> {name}: {number}</p>
            <button onClick={() =>toDelete(id) }>Delete</button>
        </li>
    )
}

PhoneItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired
}


