import { Button } from './ContactListItem.styled';

const DeleteButton = ({ onClick, children }) => {
  return (
    <Button type="button" onClick={onClick}>
      {children}
    </Button>
  );
};

export { DeleteButton };
