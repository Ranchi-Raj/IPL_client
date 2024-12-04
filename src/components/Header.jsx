import { themes} from '../styles/theme';
import TeamButton from './TeamButton.jsx';
export function Header({ team , logo, setTeam}) {
  const theme = themes[team];

  return (
    <header style={{
      backgroundColor: theme.colors.primary,
      color: theme.colors.accent,
      padding: '1rem',
      fontFamily: theme.fonts.heading,
    }} className='flex items-center'>
        {/* <div>
          HEllo
        </div> */}
        <h1 className="text-2xl font-bold">{team} Fan Shop Dashboard</h1>
        <TeamButton
        team={team}
        logo={logo}
        onTeamChange={setTeam}
      />  
      </header>
  );
}

