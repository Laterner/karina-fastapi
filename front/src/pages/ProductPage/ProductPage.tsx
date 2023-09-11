import { Box, Stack } from '@chakra-ui/layout';
import React from 'react';
import { useParams } from 'react-router-dom';

import NoImage from '../subcom/no_image.png';
import { ProductPageDataItem, Button } from '../../shared/styledComponents/Buttons';

type ProductPageParams = {
    productId: string;
};

export default function ProductPage() {
  const { productId } = useParams<ProductPageParams>();

  const productDataItems = ['Артикул', 'Штрих-код', 'Наличие', 'Вес'];
  const productDataValues = ['174206', '2000000001982', '172', '16 кг'];

  return (
    <>
      <Box w="100%">one s {productId} page</Box>
      <Box w="100%">
        <h3>256GB microSDXC UHS-I Class10 U3 V30 (SB256GBSDCCTV) SMARTBUY</h3>
      </Box>
      <Stack direction={'row'}>
        <Box background={'red'} boxSize={350}>
          <img src={NoImage} alt="img not load" />
        </Box>

        <Box w={'calc(100% - 400px)'} p={20}>
          <Box h={'calc(100% - 20px)'}>
            {productDataItems.map((el, idx) => (
              <ProductPageDataItem key={idx}>
                <ProductPageDataItem>
                  {el}:
                  <span>
                    <p />
                  </span>
                </ProductPageDataItem>
                {productDataValues[idx]}
              </ProductPageDataItem>
            ))}
          </Box>
          <Stack direction={'row'}>
            <Button bgcolor={'#ff6633'}> Добавить в корзину </Button>
            <Button bgcolor={'#ff0000'}> Купить </Button>
          </Stack>
        </Box>
      </Stack>
    </>
  );
}
