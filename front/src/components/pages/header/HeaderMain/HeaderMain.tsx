import './HeaderMain.css'
import HeaderMenu from '../HeaderMenu/HeaderMenu'
import HeaderBar from '../HeaderBar/HeaderBar'
import { useState } from 'react'

export default function HeaderMain() {
  const [auth, setAuth] = useState(true)

  return (
    <div className="header_bar">
      <HeaderMenu auth={auth} />
      <HeaderBar />
    </div>
  )
}
