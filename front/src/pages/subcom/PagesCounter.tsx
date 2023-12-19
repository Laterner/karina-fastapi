import { useNavigate } from 'react-router-dom'
import { Stack } from '@chakra-ui/layout'
import { useApiData } from '../../components/api/API'
import './pageCounter.css'
import { Pagination } from 'antd'
import { useState } from 'react'

export default function PagesCounter() {
  const productsCount = Math.ceil(useApiData('/products_count', 'GET') / 12)
  const [page, setPage] = useState(1)
  const navigate = useNavigate()

  const reloadCards = (page: number) => {
    setPage(page)
    navigate(`/shop/${page}`)
  }

  return (
    <Stack spacing={8} direction="row">
      <Pagination
        current={page}
        onChange={reloadCards}
        total={productsCount}
        showSizeChanger={false}
      />
    </Stack>
  )
}
