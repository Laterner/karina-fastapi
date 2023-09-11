import { Box, Stack } from '@chakra-ui/layout';
import { Input, IconButton } from '@chakra-ui/react';
import { useNavigate, Link } from 'react-router-dom';
import { SetStateAction, useState } from 'react';

import { Button, OutlineButton } from '../../../shared/styledComponents/Buttons';

import SearchIcon from './SearchIcon';

export default function HeaderBar() {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/shop?type=search&request=' + value);
  };

  const linkStyle = {
    fontSize: 25,
    textTransform: 'uppercase' as const,
    fontWeight: 'bold',
    fontFamily: 'Ubuntu',
    color: 'white',
    textDecoration: 'none',
  };

  const handleClick = () => {
    handleRedirect();
  };

  const [value, setValue] = useState('');
  const handleChange = (event: { target: { value: SetStateAction<string> } }) => {
    setValue(event.target.value);
  };

  return (
    <Stack
      className="header_bar"
      mb={40}
      spacing={20}
      direction="row"
      display="flex"
      alignItems="center"
      whiteSpace={'nowrap'}
    >
      <Box className="logoStyle" display="flex" justifyContent="center" alignItems="center">
        <Link to="/" style={linkStyle}>
                    Karina Plus
        </Link>
      </Box>
      <div className="right-side-bar">
        <Stack className="search_wrap" marginEnd={20} spacing={10} h={50} direction={'row'}>
          <Input
              className="search_input"
              w={'100%'}
              h={30}
              placeholder="Поиск"
              onChange={handleChange}
              onKeyUp={e => e.key === 'Enter' && handleClick()}
          />
          <IconButton
              aria-label="Search database"
              onClick={handleClick}
              h={36}
              w={36}
              border={'none'}
              borderRadius={5}
              background={'#ff6633'}
              cursor={'pointer'}
              type="submit"
          >
            <SearchIcon />
          </IconButton>
        </Stack>
        <Stack className="info_container" direction={'row'}>
          <OutlineButton>
            <a href="tel:+79634263049"> +7 (963) 426-30-49 </a>
          </OutlineButton>
          <p>Работаем с 12:00 до 18:00</p>
          <Link to="/cart">
            <Button bgcolor={'#ff6633'}>
              <span className='btn-text'>Корзина</span>
              <span className='btn-svg'>
              <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              </span>
            </Button>
          </Link>
        </Stack>
      </div>
    </Stack>
  );
}
