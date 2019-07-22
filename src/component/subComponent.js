import React from 'react'

const SubCom = ({ func }) => {
  return (
    <div className="subContainer" onClick={() => func()}>
      Sub Component
    </div>
  )
}

export default SubCom
