import React, { useState } from 'react'

export const ComponentWithHooks = () => {
  const [isClicked, setIsClicked] = useState(false)
  return (
    <div>
      <div>Hello</div>
      <button data-testid="button" onClick={() => setIsClicked(!isClicked)}>
        button
      </button>
      {isClicked && (
        <div className="clicked" data-testid="clicked">
          {' '}
          I am clicked{' '}
        </div>
      )}
    </div>
  )
}
