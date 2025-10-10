"use client";

import { getLiveMatch, getUpcomingMatches } from "@/lib/data";
import React from "react";
import { MatchCard } from "./MatchCard";
import { Calendar } from "lucide-react";

interface LiveMatchCardProps {
  onNavigate?: (page: string, id?: string) => void;
}

export const LiveMatchCard = ({ onNavigate }: LiveMatchCardProps) => {
  const liveMatch = getLiveMatch();
  const upcomingMatches = getUpcomingMatches().slice(0, 1);
  const nextMatch = upcomingMatches[0];

  const handleMatchClick = (matchId: string) => {
    if (onNavigate) {
      onNavigate("match", matchId);
    } else {
      console.log("Navigate to match:", matchId);
    }
  };

  return (
    <section className="container mx-auto px-4 py-16 bg-white dark:bg-slate-950">
      {liveMatch ? (
        <div>
          <div className="mb-6 flex items-center gap-2">
            <div className="h-3 w-3 animate-pulse rounded-full bg-red-500 dark:bg-red-400"></div>
            <h2 className="text-3xl font-bold tracking-wider text-gray-900 dark:text-white">
              MATCH EN DIRECT
            </h2>
          </div>
          <MatchCard
            match={liveMatch}
            onClick={() => handleMatchClick(liveMatch.id)}
          />
        </div>
      ) : nextMatch ? (
        <div>
          <div className="mb-6 flex items-center gap-2">
            <Calendar className="h-6 w-6 text-orange-500 dark:text-orange-400" />
            <h2 className="text-3xl font-bold tracking-wider text-gray-900 dark:text-white">
              PROCHAIN MATCH
            </h2>
          </div>
          <MatchCard
            match={nextMatch}
            onClick={() => handleMatchClick(nextMatch.id)}
          />
        </div>
      ) : null}
    </section>
  );
};
