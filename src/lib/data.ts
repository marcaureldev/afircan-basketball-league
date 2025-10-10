// Mock data for African Basketball League

export interface Team {
    id: string;
    name: string;
    city: string;
    country: string;
    logo: string;
    primaryColor: string;
    secondaryColor: string;
    wins: number;
    losses: number;
    streak: string;
    founded: number;
    arena: string;
    coach: string;
  }
  
  export interface Player {
    id: string;
    name: string;
    teamId: string;
    position: string;
    number: number;
    height: string;
    age: number;
    nationality: string;
    photo: string;
    stats: {
      ppg: number;
      rpg: number;
      apg: number;
    };
  }
  
  export interface Match {
    id: string;
    homeTeamId: string;
    awayTeamId: string;
    homeScore: number | null;
    awayScore: number | null;
    date: string;
    time: string;
    venue: string;
    status: 'scheduled' | 'live' | 'finished';
    quarter?: string;
    topPerformers?: {
      playerId: string;
      points: number;
      rebounds: number;
      assists: number;
    }[];
  }
  
  export const teams: Team[] = [
    {
      id: '1',
      name: 'Lagos Legends',
      city: 'Lagos',
      country: 'Nigeria',
      logo: '🦁',
      primaryColor: '#16A34A',
      secondaryColor: '#D4AF37',
      wins: 18,
      losses: 6,
      streak: 'W5',
      founded: 2018,
      arena: 'Teslim Balogun Stadium',
      coach: 'Olumide Johnson',
    },
    {
      id: '2',
      name: 'Cairo Kings',
      city: 'Cairo',
      country: 'Egypt',
      logo: '👑',
      primaryColor: '#DC2626',
      secondaryColor: '#FBBF24',
      wins: 17,
      losses: 7,
      streak: 'W3',
      founded: 2019,
      arena: 'Cairo Stadium',
      coach: 'Ahmed Hassan',
    },
    {
      id: '3',
      name: 'Nairobi Thunder',
      city: 'Nairobi',
      country: 'Kenya',
      logo: '⚡',
      primaryColor: '#003D7A',
      secondaryColor: '#DC2626',
      wins: 16,
      losses: 8,
      streak: 'L1',
      founded: 2017,
      arena: 'Nyayo National Stadium',
      coach: 'James Mwangi',
    },
    {
      id: '4',
      name: 'Johannesburg Giants',
      city: 'Johannesburg',
      country: 'South Africa',
      logo: '⛰️',
      primaryColor: '#D4AF37',
      secondaryColor: '#0a0a0a',
      wins: 15,
      losses: 9,
      streak: 'W2',
      founded: 2018,
      arena: 'Ellis Park Arena',
      coach: 'Trevor Williams',
    },
    {
      id: '5',
      name: 'Accra Warriors',
      city: 'Accra',
      country: 'Ghana',
      logo: '⚔️',
      primaryColor: '#FBBF24',
      secondaryColor: '#16A34A',
      wins: 14,
      losses: 10,
      streak: 'W1',
      founded: 2019,
      arena: 'Accra Sports Stadium',
      coach: 'Kwame Adu',
    },
    {
      id: '6',
      name: 'Dakar Storm',
      city: 'Dakar',
      country: 'Senegal',
      logo: '🌪️',
      primaryColor: '#16A34A',
      secondaryColor: '#FBBF24',
      wins: 13,
      losses: 11,
      streak: 'L2',
      founded: 2020,
      arena: 'Dakar Arena',
      coach: 'Moussa Diop',
    },
    {
      id: '7',
      name: 'Casablanca Phoenix',
      city: 'Casablanca',
      country: 'Morocco',
      logo: '🔥',
      primaryColor: '#DC2626',
      secondaryColor: '#16A34A',
      wins: 12,
      losses: 12,
      streak: 'W1',
      founded: 2019,
      arena: 'Mohammed V Complex',
      coach: 'Youssef Benali',
    },
    {
      id: '8',
      name: 'Luanda Lions',
      city: 'Luanda',
      country: 'Angola',
      logo: '🦁',
      primaryColor: '#DC2626',
      secondaryColor: '#0a0a0a',
      wins: 10,
      losses: 14,
      streak: 'L3',
      founded: 2018,
      arena: 'Cidadela Desportiva',
      coach: 'Carlos Silva',
    },
  ];
  
  export const players: Player[] = [
    // Lagos Legends
    {
      id: 'p1',
      name: 'Chukwu Okonkwo',
      teamId: '1',
      position: 'PG',
      number: 7,
      height: '1.88m',
      age: 26,
      nationality: 'Nigeria',
      photo: '',
      stats: { ppg: 22.5, rpg: 4.2, apg: 8.1 },
    },
    {
      id: 'p2',
      name: 'Emmanuel Adeyemi',
      teamId: '1',
      position: 'SF',
      number: 23,
      height: '2.01m',
      age: 24,
      nationality: 'Nigeria',
      photo: '',
      stats: { ppg: 18.7, rpg: 6.5, apg: 3.2 },
    },
    {
      id: 'p3',
      name: 'Ibrahim Musa',
      teamId: '1',
      position: 'C',
      number: 12,
      height: '2.11m',
      age: 28,
      nationality: 'Nigeria',
      photo: '',
      stats: { ppg: 15.3, rpg: 10.8, apg: 2.1 },
    },
    // Cairo Kings
    {
      id: 'p4',
      name: 'Omar Farouk',
      teamId: '2',
      position: 'SG',
      number: 3,
      height: '1.96m',
      age: 25,
      nationality: 'Egypt',
      photo: '',
      stats: { ppg: 24.1, rpg: 5.3, apg: 4.7 },
    },
    {
      id: 'p5',
      name: 'Ahmed El-Sayed',
      teamId: '2',
      position: 'PF',
      number: 15,
      height: '2.06m',
      age: 27,
      nationality: 'Egypt',
      photo: '',
      stats: { ppg: 17.9, rpg: 9.2, apg: 2.5 },
    },
    // Nairobi Thunder
    {
      id: 'p6',
      name: 'Joseph Kamau',
      teamId: '3',
      position: 'PG',
      number: 1,
      height: '1.85m',
      age: 23,
      nationality: 'Kenya',
      photo: '',
      stats: { ppg: 19.8, rpg: 3.7, apg: 9.4 },
    },
    {
      id: 'p7',
      name: 'David Ochieng',
      teamId: '3',
      position: 'C',
      number: 34,
      height: '2.13m',
      age: 29,
      nationality: 'Kenya',
      photo: '',
      stats: { ppg: 16.5, rpg: 11.3, apg: 1.8 },
    },
    // Johannesburg Giants
    {
      id: 'p8',
      name: 'Thabo Sefolosha',
      teamId: '4',
      position: 'SF',
      number: 21,
      height: '2.00m',
      age: 26,
      nationality: 'South Africa',
      photo: '',
      stats: { ppg: 20.3, rpg: 7.1, apg: 4.2 },
    },
    {
      id: 'p9',
      name: 'Mandla Ndlovu',
      teamId: '4',
      position: 'PF',
      number: 44,
      height: '2.08m',
      age: 30,
      nationality: 'South Africa',
      photo: '',
      stats: { ppg: 18.2, rpg: 8.9, apg: 2.3 },
    },
    // Accra Warriors
    {
      id: 'p10',
      name: 'Kwabena Mensah',
      teamId: '5',
      position: 'SG',
      number: 5,
      height: '1.93m',
      age: 24,
      nationality: 'Ghana',
      photo: '',
      stats: { ppg: 21.7, rpg: 4.8, apg: 5.3 },
    },
  ];
  
  export const matches: Match[] = [
    // Finished matches
    {
      id: 'm1',
      homeTeamId: '1',
      awayTeamId: '2',
      homeScore: 98,
      awayScore: 95,
      date: '2025-10-05',
      time: '19:00',
      venue: 'Teslim Balogun Stadium',
      status: 'finished',
      topPerformers: [
        { playerId: 'p1', points: 28, rebounds: 5, assists: 10 },
        { playerId: 'p4', points: 32, rebounds: 6, assists: 4 },
      ],
    },
    {
      id: 'm2',
      homeTeamId: '3',
      awayTeamId: '4',
      homeScore: 87,
      awayScore: 92,
      date: '2025-10-05',
      time: '20:30',
      venue: 'Nyayo National Stadium',
      status: 'finished',
      topPerformers: [
        { playerId: 'p6', points: 24, rebounds: 4, assists: 11 },
        { playerId: 'p8', points: 27, rebounds: 8, assists: 5 },
      ],
    },
    {
      id: 'm3',
      homeTeamId: '5',
      awayTeamId: '6',
      homeScore: 103,
      awayScore: 99,
      date: '2025-10-06',
      time: '18:00',
      venue: 'Accra Sports Stadium',
      status: 'finished',
      topPerformers: [
        { playerId: 'p10', points: 29, rebounds: 6, assists: 7 },
      ],
    },
    // Live match
    {
      id: 'm4',
      homeTeamId: '2',
      awayTeamId: '3',
      homeScore: 76,
      awayScore: 72,
      date: '2025-10-07',
      time: '19:30',
      venue: 'Cairo Stadium',
      status: 'live',
      quarter: 'Q3 - 5:23',
    },
    // Upcoming matches
    {
      id: 'm5',
      homeTeamId: '1',
      awayTeamId: '4',
      homeScore: null,
      awayScore: null,
      date: '2025-10-08',
      time: '19:00',
      venue: 'Teslim Balogun Stadium',
      status: 'scheduled',
    },
    {
      id: 'm6',
      homeTeamId: '6',
      awayTeamId: '7',
      homeScore: null,
      awayScore: null,
      date: '2025-10-08',
      time: '20:00',
      venue: 'Dakar Arena',
      status: 'scheduled',
    },
    {
      id: 'm7',
      homeTeamId: '5',
      awayTeamId: '8',
      homeScore: null,
      awayScore: null,
      date: '2025-10-09',
      time: '18:30',
      venue: 'Accra Sports Stadium',
      status: 'scheduled',
    },
    {
      id: 'm8',
      homeTeamId: '2',
      awayTeamId: '1',
      homeScore: null,
      awayScore: null,
      date: '2025-10-10',
      time: '20:00',
      venue: 'Cairo Stadium',
      status: 'scheduled',
    },
    {
      id: 'm9',
      homeTeamId: '4',
      awayTeamId: '3',
      homeScore: null,
      awayScore: null,
      date: '2025-10-11',
      time: '19:30',
      venue: 'Ellis Park Arena',
      status: 'scheduled',
    },
    {
      id: 'm10',
      homeTeamId: '7',
      awayTeamId: '5',
      homeScore: null,
      awayScore: null,
      date: '2025-10-12',
      time: '19:00',
      venue: 'Mohammed V Complex',
      status: 'scheduled',
    },
  ];
  
  // Helper functions
  export const getTeamById = (id: string): Team | undefined => {
    return teams.find((team) => team.id === id);
  };
  
  export const getPlayerById = (id: string): Player | undefined => {
    return players.find((player) => player.id === id);
  };
  
  export const getMatchById = (id: string): Match | undefined => {
    return matches.find((match) => match.id === id);
  };
  
  export const getPlayersByTeam = (teamId: string): Player[] => {
    return players.filter((player) => player.teamId === teamId);
  };
  
  export const getMatchesByTeam = (teamId: string): Match[] => {
    return matches.filter(
      (match) => match.homeTeamId === teamId || match.awayTeamId === teamId
    );
  };
  
  export const getTopScorers = (): Player[] => {
    return [...players].sort((a, b) => b.stats.ppg - a.stats.ppg).slice(0, 5);
  };
  
  export const getStandings = () => {
    return [...teams].sort((a, b) => {
      const aWinPct = a.wins / (a.wins + a.losses);
      const bWinPct = b.wins / (b.wins + b.losses);
      return bWinPct - aWinPct;
    });
  };
  
  export const getRecentMatches = (): Match[] => {
    return matches
      .filter((match) => match.status === 'finished')
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 3);
  };
  
  export const getUpcomingMatches = (): Match[] => {
    return matches
      .filter((match) => match.status === 'scheduled')
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  };
  
  export const getLiveMatch = (): Match | undefined => {
    return matches.find((match) => match.status === 'live');
  };
  