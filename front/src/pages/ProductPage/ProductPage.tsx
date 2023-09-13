import { Box, Stack } from '@chakra-ui/layout';
import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

import NoImage from '../../no_image.png';
import { ProductPageDataItem, Button } from '../../shared/styledComponents/Buttons';
import {fetchData, useApiData} from "../../components/api/API";
import PageNotFound from "../PageNotFound";
import {spin} from "../../shared/styledComponents/Spinner";
import axios from "axios";

type ProductPageParams = {
    productId: string;
};

const url = '/product/';

export default function ProductPage() {
  const { productId } = useParams<ProductPageParams>();
  const [isLoading, setLoading] = useState(true)
  const [isError, setError] = useState(false)

  const product = useApiData(`${url + productId}`, 'GET')

  const productDataItems = ['Артикул', 'Штрих-код', 'Наличие', 'Вес'];
  const productDataValues = ['174206', '2000000001982', '172', '16 кг'];

  const renderContent = () => {
    if (isLoading) {
      return <>{spin}</>;
    } else if (isError) {
      return <PageNotFound />;
    } else if (product) {
      return (
          <>
            <Box w="100%">one s {productId} page</Box><Box w="100%">
            <h3>{product.name}</h3>
          </Box><Stack direction={'row'}>
            <Box background={'red'} boxSize={350}>
              <img src={NoImage} alt="img not load"/>
            </Box>
            <Box w={'calc(100% - 400px)'} p={20}>
              <Box h={'calc(100% - 20px)'}>
                {productDataItems.map((el, idx) => (
                    <ProductPageDataItem key={idx}>
                      <ProductPageDataItem>
                        {el}:
                        <span>
                    <p/>
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
    } else {
      return null;
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (product) {
        setError(false)
      } else {
        setError(true)
      }
      setLoading(false);
    }, 500)
    return () => {
      clearTimeout(timer)
    }
  }, [product]);

  return (
      <>{renderContent()}</>
  );
}
