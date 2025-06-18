import React, { useEffect, useState } from 'react'

const Header = (props) => {
  const [username, setUsername] = useState("");
  const data = props.data;
  useEffect(() => {
    if (!data) {
      setUsername('admin');
    } else {
      setUsername(data.firstname);
    }
  }, [])



  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '');
    props.changeUser('');
    //window.location.reload();
  }
  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>Hello <br /><span className='text-3xl font-semibild'>{!data?"Admin":data.firstname} 👋</span></h1>
      <button onClick={logOutUser} className='bg-red-600 hover:bg-red-700 text-lg font-medium text-white px-5 py-2 rounded-sm'>Log Out</button>
    </div>
  )
}

export default Header
