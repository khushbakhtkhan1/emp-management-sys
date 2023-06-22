import React from 'react'

const Header = ({setIsAdding}) => {
  return (
    <header>
        <h1 style={{textAlign:'center',color:'white'}}>EMPLOYEE MANAGEMENT SYSTEM</h1>
        <div style={{marginTop:'40px',marginBottom:'16px',textAlign:'center'}}>
            <button onClick={()=>setIsAdding(true)} className='round-button'>Add Employee</button>
        </div>
    </header>
  )
}

export default Header