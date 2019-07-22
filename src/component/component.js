import React from 'react'
import SubCom from './subComponent'

const Com = ({ func }) => {
  return (
    <div className="container">
      <SubCom testProp="testProp" func={func} />
    </div>
  )
}

export default Com
