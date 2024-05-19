import NaveBar from '../components/NaveBar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <>
            <NaveBar />
            <Outlet />
        </>
  )
}

export default Layout