import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "../../styles/styles";
import EventCard from "./EventCard";
import { AiOutlineCalendar } from "react-icons/ai";

const Events = () => {
  const { allEvents, isLoading } = useSelector((state) => state.events);

  // Filter out expired events
  const currentDate = new Date();
  const activeEvents = allEvents?.filter(event => {
    if (!event || !event.Finish_Date) return false;
    const finishDate = new Date(event.Finish_Date);
    return finishDate > currentDate && event.status === "Running";
  }) || [];

  return (
    <div>
      {!isLoading && (
        <div className={`${styles.section}`}>
          <div className={`${styles.heading}`}>
            <h1>Flash Sale</h1>
          </div>

          <div className="w-full grid">
            {activeEvents.length !== 0 ? (
              <EventCard data={activeEvents[0]} />
            ) : (
              <div className="flex flex-col items-center justify-center py-12 px-4 bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                  <AiOutlineCalendar size={32} className="text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No Offers Available</h3>
                <p className="text-gray-500 text-center max-w-sm">
                  There are currently no offers to display. Check back later for exciting promotions and deals!
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;
