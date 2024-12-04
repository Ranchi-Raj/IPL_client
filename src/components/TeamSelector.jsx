import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { update, resetCart, setAdded } from '../features/details/detailSlice.js'
import axios from 'axios'
export function TeamSelector({ currentTeam, onTeamChange, onClose }) {
  const [selectedTeam, setSelectedTeam] = useState(currentTeam)
  const details = useSelector((state) => state.details.details)
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    onTeamChange(selectedTeam)
    dispatch(update({ name : details.name, email : details.email, team : selectedTeam }))
    dispatch(resetCart())
    // dispatch(setAdded(false))
    axios.patch('/api/user/update', {email : details.email, team : selectedTeam})
    // dispatch(setToDefaultToTrue())
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white bg-opacity-10 backdrop-blur-xl p-6 rounded-lg shadow-lg border border-white border-opacity-20 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-white">Update Team Preference</h2>
        <form onSubmit={handleSubmit}>
          <Select value={selectedTeam} onValueChange={setSelectedTeam}>
            <SelectTrigger className="w-full mb-4 bg-white bg-opacity-20 text-white border-white border-opacity-30 focus:border-orange-500 focus:ring-orange-500">
              <SelectValue placeholder="Select your favorite team" />
            </SelectTrigger>
            <SelectContent className="bg-blue-900 text-white">
              <SelectItem value="MI">Mumbai Indians</SelectItem>
              <SelectItem value="CSK">Chennai Super Kings</SelectItem>
              <SelectItem value="RCB">Royal Challengers Bangalore</SelectItem>
              <SelectItem value="KKR">Kolkata Knight Riders</SelectItem>
              <SelectItem value="SRH">Sunrisers Hyderabad</SelectItem>
              <SelectItem value="DC">Delhi Capitals</SelectItem>
              <SelectItem value="PBKS">Punjab Kings</SelectItem>
              <SelectItem value="RR">Rajasthan Royals</SelectItem>
              <SelectItem value="LSG">Lucknow Super Giants</SelectItem>
              <SelectItem value="GT">Gujarat Titans</SelectItem>
            </SelectContent>
          </Select>
          <div className="flex justify-end space-x-2">
            <Button type="button" variant="outline" onClick={onClose} className="border-white text-black hover:bg-white hover:text-blue-900">
              Cancel
            </Button>
            <Button type="submit" className="bg-orange-500 text-white hover:bg-orange-600">
              Update
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

