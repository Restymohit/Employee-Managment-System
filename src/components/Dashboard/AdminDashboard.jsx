import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'
import HeaderLayout from '../common/HeaderLayout';
import FooterLayout from '../common/FooterLayout';


const AdminDashboard = (props) => {
  return (
    <div className='h-screen w-full p-10' >
      <HeaderLayout />
      <Header changeUser={props.changeUser}/>
      <CreateTask/>
      <AllTask/>
      <FooterLayout />
    </div>
  )
}

export default AdminDashboard
