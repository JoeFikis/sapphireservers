import React from 'react'
import './Plans.css'

function Plans() {
  return (
    <div>
        <div className="plans-container">
            <div className="plans-wrapper">
                <div className="plans">
                    <div className="plan-1">
                        <h1>X Small</h1>
                        <div className="specs1">
                            <h2>Core</h2>
                            <h2>Ram</h2>
                            <h2>Storage</h2>
                        </div>
                        <div className="btn">
                            <button>
                                <a href="/">View More</a>
                            </button>
                        </div>
                    </div>
                    <div className="plan-2">
                        <h1>Small</h1>
                        <div className="specs2">
                            <h2>Core</h2>
                            <h2>Ram</h2>
                            <h2>Storage</h2>
                        </div>
                        <div className="btn">
                            <button>
                                <a href="/">View More</a>
                            </button>
                        </div>
                    </div>
                    <div className="plan-3">
                        <h1>Medium</h1>
                        <div className="specs3">
                            <h2>Core</h2>
                            <h2>Ram</h2>
                            <h2>Storage</h2>
                        </div>
                        <div className="btn">
                            <button>
                                <a href="/">View More</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Plans