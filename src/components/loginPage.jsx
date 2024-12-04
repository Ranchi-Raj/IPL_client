import { Button } from "@/components/ui/button"
import { useAuth0 } from "@auth0/auth0-react";
import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {update} from '../features/details/detailSlice.js'

export default function LoginPage() {

  const { loginWithRedirect } = useAuth0()
  const {isAuthenticated, user} = useAuth0();
  const dispatch = useDispatch();
  
  // var once = true
  // useEffect(() => {
  //   console.log(user)
  //   console.log("Ander Aaya tha")
  //   if (isAuthenticated && once) {  
  //     // User is authenticated
  //       dispatch(update({
  //         name: user.name,
  //         email: user.email,
  //         team : user.team
  //       }));

  //       once = false
  //   }
  // }, [isAuthenticated]);

  return (
    <div className="min-h-screen w-screen
     flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-700 overflow-hidden">
      {/* Background Image */}
     
      <img
        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9c3773cb-5629-4145-b044-4ef6f9090376/dezxlwr-349fb8f9-71a0-47e7-b996-bb1a03692db8.png/v1/fill/w_1080,h_740/tata_ipl_logo_png_white_by_harshmore7781_dezxlwr-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTE2MyIsInBhdGgiOiJcL2ZcLzljMzc3M2NiLTU2MjktNDE0NS1iMDQ0LTRlZjZmOTA5MDM3NlwvZGV6eGx3ci0zNDlmYjhmOS03MWEwLTQ3ZTctYjk5Ni1iYjFhMDM2OTJkYjgucG5nIiwid2lkdGgiOiI8PTE2OTYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.R5WuLwoBBYSDIE1IvHxFwholHc7ht9QnsQNKk7BJYAw"
        alt="IPL Cricket Stadium"
        className="opacity-15 absolute max-w-full"
      />
      
      {/* Content */}
      <div className="z-10 text-center">
        <h1 className="text-5xl font-bold text-white mb-8 animate-pulse">
          Welcome to IPL Fantasy Store
        </h1>
        <Button onClick={() => loginWithRedirect()} 
          className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-8 rounded-full text-xl shadow-lg transform transition hover:scale-105"
        >
          Get in
        </Button>
      </div>
      <div className="absolute top-4 left-4">
        <img
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9c3773cb-5629-4145-b044-4ef6f9090376/dezxlwr-349fb8f9-71a0-47e7-b996-bb1a03692db8.png/v1/fill/w_1080,h_740/tata_ipl_logo_png_white_by_harshmore7781_dezxlwr-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTE2MyIsInBhdGgiOiJcL2ZcLzljMzc3M2NiLTU2MjktNDE0NS1iMDQ0LTRlZjZmOTA5MDM3NlwvZGV6eGx3ci0zNDlmYjhmOS03MWEwLTQ3ZTctYjk5Ni1iYjFhMDM2OTJkYjgucG5nIiwid2lkdGgiOiI8PTE2OTYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.R5WuLwoBBYSDIE1IvHxFwholHc7ht9QnsQNKk7BJYAw"
          alt="IPL Logo"
          width={100}
          height={100}
        />
      </div>
    </div>
  )
}
