import React from 'react'
import Sidebar from '../sidebar/Sidebar'

const SidebarLayout = ({children}) => {
  return (
    <div className='m-auto flex'>
        <Sidebar />
        { children }
    </div>
  )
}

export default SidebarLayout;