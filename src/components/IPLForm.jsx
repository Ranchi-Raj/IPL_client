import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import IplBackground from './IplBackground'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { update } from '../features/details/detailSlice'
export default function IplForm(props) {
  const [name, setName] = useState(props.name)
  const [email, setEmail] = useState(props.email)
  const [teamName, setTeamName] = useState('')
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', { name, email, teamName })
  }

  const teamChange = (e) => {
    axios.post('/api/user/create', {name : name, email : email, team : teamName})
    .then(res => {
        const {team } = res.data;
        props.setTeam(team);
        dispatch(update({name : name, email : email, team : teamName}));
        props.setTeamed(true)
    })
    .catch(err => console.log(err));
  }
  return (
    <div className="fixed inset-0 flex items-center justify-center z-10">
        <IplBackground/>
      <div className="w-full max-w-[30%] p-8 rounded-xl bg-white bg-opacity-10 backdrop-blur-xl shadow-lg border border-white border-opacity-30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent opacity-10" />
        <div className="relative z-10">
          <h2 className="text-4xl font-bold mb-6 text-white text-center">IPL Team</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-white text-lg">Name</Label>
              <Input
                id="name"
                type="text"
                readonly
                placeholder="Enter your name"
                value={name}
                // onChange={(e) => setName(e.target.value)}
                className="w-full bg-white bg-opacity-20 text-white placeholder-white placeholder-opacity-50 border-white border-opacity-30 focus:border-orange-500 focus:ring-orange-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white text-lg">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                // onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white bg-opacity-20 text-white placeholder-white placeholder-opacity-50 border-white border-opacity-30 focus:border-orange-500 focus:ring-orange-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="teamName" className="text-white text-lg">Team Name</Label>
              <Select value={teamName} onValueChange={setTeamName}>
                <SelectTrigger id="teamName" className="w-full bg-white bg-opacity-20 text-white border-white border-opacity-30 focus:border-orange-500 focus:ring-orange-500">
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
            </div>
            <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white text-lg py-6" onClick={teamChange}>
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

