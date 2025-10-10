import React from "react";
import { Users, Calendar, TrendingUp, CircleStar } from "lucide-react";
import { Card } from "./ui/Card";

const stats = [
  {
    icon: CircleStar,
    label: "Équipes",
    value: "12",
    color: "text-orange-500 dark:text-orange-400",
  },
  {
    icon: Users,
    label: "Joueurs",
    value: "180+",
    color: "text-blue-500 dark:text-blue-400",
  },
  {
    icon: Calendar,
    label: "Matchs/Saison",
    value: "120",
    color: "text-green-500 dark:text-green-400",
  },
  {
    icon: TrendingUp,
    label: "Pays",
    value: "8",
    color: "text-purple-500 dark:text-purple-400",
  },
];

export const Metrics = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-slate-950 transition-colors">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="bg-white dark:bg-slate-900 border-gray-200 dark:border-gray-700 p-6 text-center hover:shadow-lg dark:hover:shadow-orange-400/20 transition-all"
            >
              <stat.icon className={`h-8 w-8 mx-auto mb-3 ${stat.color}`} />
              <p className="font-bold text-4xl text-gray-900 dark:text-white mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-gray-600 dark:text-slate-400 uppercase tracking-wider">
                {stat.label}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
