import { styled } from 'styled-components';
import Logout from '../features/authentication/Logout';
import { useNavigate } from 'react-router-dom';
import ButtonIcon from './ButtonIcon';
import { HiOutlineUser } from 'react-icons/hi2';
import DarkModeToggle from './DarkModeToggle';

const StyledHeaderMenu = styled.div`
  display: flex;
  gap: 1.6rem;
  align-items: center;
`;

function HeaderMenu() {
  const navigate = useNavigate();

  return (
    <StyledHeaderMenu>
      <ButtonIcon onClick={() => navigate('/account')}>
        <HiOutlineUser />
      </ButtonIcon>
      <DarkModeToggle />
      <Logout />
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
