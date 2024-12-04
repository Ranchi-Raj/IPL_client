import { useState, useEffect } from 'react'
import { TeamSelector } from './TeamSelector'
import { useAuth0 } from '@auth0/auth0-react'

export default function TeamButton({ team, logo, onTeamChange }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [open, setOpen] = useState(false)
  const { logout } = useAuth0()

  const handleTeamChange = (newTeam) => {
    onTeamChange(newTeam)
    setIsDropdownOpen(false)
  }

  const handleDropdownClick = (e) => {
    e.stopPropagation() // Prevent the click from closing the dropdown immediately
  }

  return (
    <>
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="relative w-16 h-16 mr-6 ml-auto rounded-full overflow-hidden focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 transition-transform transform hover:scale-110"
        aria-label={`Change team preference (current: ${team})`}
      >
        <img
          src={logo}
          alt={team}
          className="rounded-full scale-300 object-cover w-full h-full"
        />
      </button>
      {isDropdownOpen && (
        <div
          className="fixed inset-0 z-50 flex flex-col"
          onClick={() => setIsDropdownOpen(false)}
        >
          <div 
            className="flex flex-col absolute right-4 top-20 bg-white bg-opacity-20 backdrop-blur-lg rounded-lg shadow-lg p-4 border border-white border-opacity-30"
            onClick={handleDropdownClick}
          >
            <button 
              onClick={() => setOpen(true)}
              className="mb-2 px-4 py-2 text-white bg-orange-500 rounded hover:bg-orange-600 transition-colors"
            >
              Set Team
            </button>
            <button 
              onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
              className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      )}
      {open && (
        <TeamSelector
          currentTeam={team}
          onTeamChange={handleTeamChange}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  )
}

