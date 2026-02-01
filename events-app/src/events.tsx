import { useParams } from "react-router";
import { useState, useEffect } from "react";
import type { Event } from "./App";

export default function EventDetails() {
  const { id } = useParams();
  const [event, setEvent] = useState<Event>();

  useEffect(() => {
    async function fetchEvent() {
      try {
        const response = await fetch(`http://localhost:3001/events/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch event");
        }
        const data = await response.json();
        setEvent(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchEvent();
  }, []);

  return (
    <div data-testid="event-details" className="bg-[#333333] text-[#fcffd6] min-h-screen p-4">
      <h1>{event?.title}</h1>
      <p>{event?.description}</p>
      <p>{event?.date}</p>
      <p>{event?.location}</p>
    </div>
  );
}
