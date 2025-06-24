import React from 'react'
import Header from '../other/Header'
import TaskListNumber from '../other/TaskListNumber'
import TaskList from '../TaskList/TaskList'
import HeaderLayout from '../common/HeaderLayout'
import FooterLayout from '../common/FooterLayout'

const EmployeeDashboard = (props) => {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
      <HeaderLayout />
      <Header changeUser={props.changeUser} data={props.data} />
      <TaskListNumber data={props.data} />
      <TaskList data={props.data} />
      <FooterLayout />
    </div>
  )
}

export default EmployeeDashboard
