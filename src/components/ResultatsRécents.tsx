"use client";

import { ArrowRight } from "lucide-react";
import React from "react";
import { MatchCard } from "./MatchCard";
import { getRecentMatches } from "@/lib/data";

interface ResultatsRécentsProps {
  onNavigate?: (page: string, id?: string) => void;
}

export const ResultatsRécents = ({ onNavigate }: ResultatsRécentsProps) => {
  const recentMatches = getRecentMatches();

  const handleResultsClick = (matchId: string) => {
    if (onNavigate) {
      onNavigate("match", matchId);
    } else {
      console.log("Navigate to match:", matchId);
    }
  };

  return (
    <section className="container mx-auto px-4 py-16 bg-white dark:bg-slate-950">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-wider text-gray-900 dark:text-white">
          RÉSULTATS RÉCENTS
        </h2>
        <button
          onClick={() => handleResultsClick("matches")}
          className="group flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
        >
          Voir tout
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {recentMatches.map((match) => (
          <MatchCard
            key={match.id}
            match={match}
            onClick={() => handleResultsClick(match.id)}
          />
        ))}
      </div>
    </section>
  );
};
