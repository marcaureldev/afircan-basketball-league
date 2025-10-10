'use client';

import React from 'react';
import { Card } from './ui/Card';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { Badge } from './ui/Badge';
import { getTeamById, Match } from '@/lib/data';

interface MatchCardProps {
  match: Match;
  onClick?: () => void;
}

export function MatchCard({ match, onClick }: MatchCardProps) {
  const homeTeam = getTeamById(match.homeTeamId);
  const awayTeam = getTeamById(match.awayTeamId);

  if (!homeTeam || !awayTeam) return null;

  const isLive = match.status === 'live';
  const isFinished = match.status === 'finished';

  const formattedDate = new Date(match.date).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
  });

  return (
    <Card
      className="group cursor-pointer overflow-hidden bg-white dark:bg-slate-950 border-gray-200 dark:border-gray-700 transition-all hover:border-orange-500 dark:hover:border-orange-400 hover:shadow-lg dark:hover:shadow-orange-400/20"
      onClick={onClick}
    >
      {/* Header */}
      <div className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 p-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <Calendar className="h-4 w-4" />
            <span>{formattedDate}</span>
            <Clock className="ml-2 h-4 w-4" />
            <span>{match.time}</span>
          </div>
          {isLive && (
            <Badge variant="destructive" className="animate-pulse">
              <span className="mr-1 inline-block h-2 w-2 rounded-full bg-white" />
              EN DIRECT
            </Badge>
          )}
          {isFinished && (
            <Badge variant="secondary" className="bg-gray-200 dark:bg-gray-700">
              TERMINÉ
            </Badge>
          )}
          {match.status === 'scheduled' && (
            <Badge variant="outline">À VENIR</Badge>
          )}
        </div>
      </div>

      {/* Teams & Scores */}
      <div className="p-6">
        {/* Home Team */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 flex-1">
            <div className="text-3xl transition-transform group-hover:scale-110">
              {homeTeam.logo}
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold tracking-wide text-gray-900 dark:text-white">
                {homeTeam.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{homeTeam.city}</p>
            </div>
          </div>
          {match.homeScore !== null && (
            <div
              className={`text-4xl font-bold ${
                isLive ? 'animate-pulse' : ''
              } ${
                isFinished && match.homeScore > (match.awayScore || 0)
                  ? 'text-orange-500 dark:text-orange-400'
                  : 'text-gray-900 dark:text-white'
              }`}
            >
              {match.homeScore}
            </div>
          )}
        </div>

        {/* VS Divider */}
        <div className="my-4 flex items-center justify-center">
          <div className="h-px flex-1 bg-gray-300 dark:bg-gray-600" />
          <span className="px-4 text-sm text-gray-500 dark:text-gray-400 font-medium">VS</span>
          <div className="h-px flex-1 bg-gray-300 dark:bg-gray-600" />
        </div>

        {/* Away Team */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 flex-1">
            <div className="text-3xl transition-transform group-hover:scale-110">
              {awayTeam.logo}
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold tracking-wide text-gray-900 dark:text-white">
                {awayTeam.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{awayTeam.city}</p>
            </div>
          </div>
          {match.awayScore !== null && (
            <div
              className={`text-4xl font-bold ${
                isLive ? 'animate-pulse' : ''
              } ${
                isFinished && match.awayScore > (match.homeScore || 0)
                  ? 'text-orange-500 dark:text-orange-400'
                  : 'text-gray-900 dark:text-white'
              }`}
            >
              {match.awayScore}
            </div>
          )}
        </div>

        {/* Live Quarter */}
        {isLive && match.quarter && (
          <div className="mt-4 text-center">
            <Badge variant="outline" className="font-bold">
              {match.quarter}
            </Badge>
          </div>
        )}

        {/* Venue */}
        <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400">
          <MapPin className="h-4 w-4" />
          <span>{match.venue}</span>
        </div>
      </div>
    </Card>
  );
}
