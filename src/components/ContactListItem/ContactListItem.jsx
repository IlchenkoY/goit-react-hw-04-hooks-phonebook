import PropTypes from 'prop-types';
import { DeleteButton } from './DeleteButton';
import { ReactComponent as DeleteIcon } from '../../icons/1485477104-basket_78591.svg';

const ContactListItem = ({ id, name, number, onClick }) => {
  return (
    <>
      {name}: {number}
      <DeleteButton onClick={() => onClick(id)}>
        <DeleteIcon width="25" height="25" />
      </DeleteButton>
    </>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export { ContactListItem };
