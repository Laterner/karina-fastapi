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
      <Stack className="search_wrap" w={'calc(100% - 200px)'} spacing={10} h={50} direction={'row'}>
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
      <OutlineButton>
        <a href="tel:+79634263049"> +7 (963) 426-30-49 </a>
      </OutlineButton>
      <p>Работаем с 12:00 до 18:00</p>
      <Link to="/cart">
        <Button bgcolor={'#ff6633'}>Корзина</Button>
      </Link>
    </Stack>
  );
}
