import React, { useState } from "react"
import "./Collapse.css"

const Collapse = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div className="collapse-container">
      <div className="collapse-title" onClick={toggle}>
        {title}
        <span className={`arrow ${isOpen ? "open" : ""}`}>▼</span>
      </div>
      {isOpen && <div className="collapse-content">{}</div>}
    </div>
  )
}

export default Collapse
