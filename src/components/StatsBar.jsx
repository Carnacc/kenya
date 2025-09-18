"use client"
import React from "react"
import { FaHourglass, FaUsers, FaMedal, FaBuilding } from "react-icons/fa"
import "../css/StatsBar.css"

const StatsBar = () => {
  const stats = [
    {
      icon: <FaHourglass className="stats-icon" />,
      number: "10+",
      label: "Anni",
    },
    {
      icon: <FaUsers className="stats-icon" />,
      number: "300+",
      label: "Clienti",
    },
    {
      icon: <FaMedal className="stats-icon" />,
      number: "15+",
      label: "Premi",
    },
    {
      icon: <FaBuilding className="stats-icon" />,
      number: "1500",
      label: "Progetti",
    },
  ]

  return (
    <div className="stats-bar">
      <div className="stats-container">
        {stats.map((stat, index) => (
          <React.Fragment key={index}>
            <div className="stat-item">
              <div className="stat-content">
                <div className="stat-icon-container">{stat.icon}</div>
                <div className="stat-text-container">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              </div>
            </div>
            {index < stats.length - 1 && <div className="stat-divider"></div>}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default StatsBar
