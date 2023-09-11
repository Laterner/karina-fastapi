import { Box, VStack, Center, StackDivider, Divider } from '@chakra-ui/layout';
import React from 'react';
import { useSearchParams } from 'react-router-dom';

export default function SideMenu() {
  const [searchParams, setSearchParams] = useSearchParams();

  const buttonStyle = {
    height: 40,
    cursor: 'pointer',
    hover: {
      color: 'blue',
    },
  };

  return (
    <VStack
      divider={<StackDivider borderColor="gray.200" />}
      spacing={4}
      align="stretch"
      w={300}
      h={400}
      shadow={'1px 2px 4px rgba(0, 0, 0, 0.1)'}
      borderRadius={10}
    >
      <Box onClick={() => setSearchParams()}>Категории</Box>
      <Center height="50px">
        <Divider orientation="vertical" />
      </Center>
      <Box className="button_side" onClick={() => setSearchParams({ category: 'phones' })}>
                Телефоны
      </Box>
      <Box className="button_side" onClick={() => setSearchParams({ category: 'notebooks' })}>
                Компьютерные комплектующие
      </Box>
      <Box className="button_side" onClick={() => setSearchParams({ category: 'charger' })}>
                Аксесуары
      </Box>
    </VStack>
  );
}
