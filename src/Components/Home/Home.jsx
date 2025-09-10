import React from 'react'
import PropsProject from '../PropsProject/PropsProject'
import './Home.css'
const Home = () => {
  return (
    <div >
      <img src="https://www.bdtask.com/blog/uploads/how-to-be-a-full-stack-developer.jpg" alt="" className='w-full' />
      <br /> <br />
      <p className='abc'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae exercitationem iste fugiat aliquam, nulla asperiores libero nemo dolore a id corrupti, sapiente excepturi impedit nam.</p>
      <PropsProject name="home" id="home.com" />
    </div>
  )
}

export default Home
