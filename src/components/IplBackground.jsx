export default function IplBackground() {
    return (
      <div className="opacity-85 inset-0 z-0 ">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-900" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat rotate-45 scale-50" />
        </div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-orange-500 rounded-tl-full opacity-30 blur-3xl" />
        <div className="absolute top-0 left-0 w-1/4 h-1/4 bg-blue-300 rounded-br-full opacity-20 blur-2xl" />
      </div>
    )
  }
  
  