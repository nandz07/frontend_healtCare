import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Routers from '../routes/Routers'
import { useLocation } from 'react-router-dom';
import AdminHeaders from '../components/Admin/Shared/AdminHeaders';
import AdminSidebar from '../components/Admin/Shared/AdminSidebar';
import AdminLogin from '../pages/Admin/AdminLogin';

function Layouts() {
  const path = useLocation();
  let dPath = path.pathname.split('/')[1]
  let dSubPath=path.pathname.split('/')[2]
  return (
    <>
      {
        dPath === 'admin' ? (
          dSubPath===undefined || dSubPath === ''?(
            <>
            <AdminLogin />
            </>
          ):(
            <>
            <div className='flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden'>
              {/* <div className='bg-sky-200'>Header</div> */}
              <AdminSidebar />
              <div className='flex-1 flex flex-col'>
                <AdminHeaders />
                <div className='p-4 overflow-y-auto flex-1'><Routers /></div>
              </div>
              {/* <div>Footer</div> */}
            </div>
          </>
          )
          
        ) :
          (
            <>
              <Header />
              <main>
                <Routers />
              </main>
              <Footer />
            </>
          )
      }

    </>
  )
}

export default Layouts