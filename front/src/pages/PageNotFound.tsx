import { Box, Center } from '@chakra-ui/layout';

export default function PageNotFound() {
  const styles = {
    err: {
      fontSize: '72px',
    },
    mes: {},
  };
  return (
    <Box>
      <Center>
        <h1 style={styles.err}>404</h1>
      </Center>
      <Center>
        <h3>Стариница не найдена</h3>
      </Center>
    </Box>
  );
}
