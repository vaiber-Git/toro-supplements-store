import {Outlet} from 'react-router-dom'
import DirectoryComponent from '../../components/directory/directory.component'

const Home = () => {

  return (
      <>
        <DirectoryComponent />
        <Outlet />
      </>
  )
}

export default Home; 