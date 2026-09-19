import React from 'react'

export default function authorization() {
  return (
    <div className='card-container'>
        <main className='main'>
        <h1 className='title'>Authorization</h1>
        <div className='input-container'>
      <input className='input' type="text" placeholder='aloprivetgmail.com' />
</div>
     <div className='input-container'>
    <input className='input' type="password" placeholder='Password' />
    </div>
    <button className='button' type="submit">Login</button>
    <div>
    <a className='link' href= 'https://www.youtube.com'>Forgot Password?</a>
    </div>
</main>
    </div>
  )
}
