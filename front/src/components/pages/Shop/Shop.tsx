import { Suspense } from 'react'
import { Stack, VStack } from '@chakra-ui/layout'
import './Shop.css'
import { useSearchParams, useParams } from 'react-router-dom'
// import SideMenu from '../SideMenu/SideMenu';
import { CartPopup } from './components'
import GetCards from '../subcom/GetCards'
import PagesCounter from '../subcom/PagesCounter'
import { spin } from '../../../shared/styledComponents/Spinner'

export default function Shop() {
  let requestUrl = '/products'
  const params = useParams()
  const [searchParams] = useSearchParams()

  const cat = searchParams.get('category')

  if (cat !== null) {
    requestUrl = '/products/' + cat
  } else if (searchParams.get('type') !== null && searchParams.get('request') !== '') {
    requestUrl = '/search/?request=' + searchParams.get('request')
  } else {
    requestUrl += `?page=${params.page ? params.page : 1}`
  }

  return (
    <Stack spacing={8} direction="row">
      {/*<SideMenu />*/}
      <CartPopup />
      <Suspense fallback={spin}>
        <VStack w={'100%'}>
          <PagesCounter />
          <div className="cards-conteiner">
            <GetCards url={requestUrl} />
          </div>
        </VStack>
      </Suspense>
    </Stack>
  )
}
