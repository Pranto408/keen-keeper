"use client";
import { createContext, useContext, useState } from "react";

const TimelineContext = createContext();

export const TimelineProvider = ({ children }) => {
  const [timeline, setTimeline] = useState([]);

  const addEntry = (friend, type) => {
    setTimeline((prev) => [
      {
        id: Date.now(),
        friendId: friend.id,
        friendName: friend.name,
        friendPicture: friend.picture,
        type,
        date: new Date().toISOString(),
      },
      ...prev,
    ]);
  };

  return (
    <TimelineContext.Provider value={{ timeline, addEntry }}>
      {children}
    </TimelineContext.Provider>
  );
};

export const useTimeline = () => useContext(TimelineContext);
