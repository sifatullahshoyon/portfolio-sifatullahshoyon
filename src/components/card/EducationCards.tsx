"use client";

import { useState, useEffect } from "react";
import { Calendar, Trophy, type LucideIcon } from "lucide-react";

interface AchievementData {
  gpa: string;
  subject: string;
}

interface EducationCardsProps {
  title: string;
  subtitle: string;
  year: string;
  period: string;
  description: string;
  icon: LucideIcon;
  height?: string;
  delay: number;
  achievements: AchievementData;
  subjects: string[];
}

export default function EducationCards({
  title,
  subtitle,
  year,
  period,
  description,
  icon: Icon,
  height,
  delay,
  achievements,
  subjects,
}: EducationCardsProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`w-full md:w-72 ${height} bg-gradient-to-b from-[#1a0c2e] to-[#160a26] rounded-2xl shadow-lg overflow-hidden transition-all duration-500 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${
        isHovered
          ? "transform scale-[1.02] shadow-xl shadow-purple-900/20"
          : "shadow-md shadow-black/30"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-full flex flex-col p-6 border border-purple-900/20 rounded-2xl">
        <div className="mb-6 flex justify-between items-center">
          <div
            className={`p-3 rounded-xl bg-purple-900/20 text-purple-400 transition-all duration-300 ${
              isHovered ? "bg-purple-900/30 text-purple-300" : ""
            }`}
          >
            <Icon size={24} />
          </div>

          <div className="h-px w-16 bg-gradient-to-r from-transparent via-purple-800/30 to-transparent"></div>
        </div>
        {/* End Icon */}

        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>

        <h4 className="text-purple-400 text-sm mb-4">{subtitle}</h4>

        <div className="flex justify-between items-center mb-4">
          <h6 className="text-sm">{year}</h6>
          <div className="flex items-center text-xs text-[#A4A4A4] mt-1">
            <Calendar className="mr-1 h-3 w-3" />
            <span>{period}</span>
          </div>
        </div>
        {/* End  Semester & Year */}

        <p className="text-[#A4A4A4] text-sm leading-relaxed flex-grow mb-4">
          {description}
        </p>

        <div className="flex items-center text-sm mb-2.5">
          <Trophy className="h-4 w-4 mr-2 text-yellow-500" />
          <h6 className="text-sm">Key Achievements</h6>
        </div>
        {/* End Achievements */}

        <div className="flex gap-2">
          <p className="text-xs bg-purple-900/30 text-purple-300 rounded-full py-1 px-2">
            GPA: {achievements?.gpa}
          </p>
          <p className="text-xs bg-purple-900/30 text-purple-300 rounded-full py-1 px-2">
            Subject: {achievements?.subject}
          </p>
        </div>
        {/* End GPA & Subject  */}

        <div className="mt-6 pt-4 border-t border-purple-900/20">
          <div className="flex justify-between items-center">
            <div className="flex flex-wrap gap-2">
              {subjects?.map((subject, index) => (
                <span
                  key={index}
                  className="text-xs px-2 py-1 rounded bg-purple-900/30 text-purple-300"
                >
                  {subject}
                </span>
              ))}
            </div>
          </div>
        </div>
        {/* End Subjects */}
      </div>
    </div>
  );
}
