import React from 'react'
import "./MidSection.css"
function MidSection() {
  return (
    <div className='MidSection'>
    <div >
        <div className="top-section">
         <img src="https://github.githubassets.com/assets/illu-copilot-editor-6474457a5b19.png" alt="body1" />
        </div>
    </div>

    <div className="mid-section">
        <div className='mid-section-part1'>
            <p>GitHub Actions automates your build, test, and deployment workflow with simple and secure CI/CD.</p>
            <p>Discover GitHub Actions </p>
        </div>
        <div className='mid-section-part2'>
            <img src="https://github.githubassets.com/assets/illu-actions-2-c5178134f381.png?width=783&format=webpll" alt="image" />
        </div>
    </div>
    </div>
  )
}

export default MidSection