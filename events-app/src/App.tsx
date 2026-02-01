import { useEffect, useState, useCallback, useMemo } from "react";
import "./App.css";
import { Link } from "react-router"; 
import { useSort, type SortOption } from "./SortContext";

export interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
}

export default function App() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const { sortBy, setSortBy } = useSort();

  const fetchEvents = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:3001/events");
      if (!response.ok) {
        throw new Error("Failed to fetch events");
      }
      const data = await response.json();
      setEvents(data);
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "An unknown error occurred"
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  const filteredAndSortedEvents = useMemo(() => {
    let result = [...events];

    // Filtering
    if (searchTerm) {
      const lowerSearch = searchTerm.toLowerCase();
      result = result.filter(
        (event) =>
          event.title.toLowerCase().includes(lowerSearch) ||
          event.location.toLowerCase().includes(lowerSearch)
      );
    }

    // Sorting
    result.sort((a, b) => {
      if (sortBy === "date") {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      } else {
        return a.id - b.id;
      }
    });

    return result;
  }, [events, searchTerm, sortBy]);

  return (
    <div className="bg-[#333333] text-[#fcffd6] min-h-screen p-4">
      <div className="mb-4 flex flex-col md:flex-row gap-4 items-center">
        <input
          type="text"
          placeholder="Search events..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          data-testid="search-input"
          className="p-2 rounded border border-gray-600 bg-[#444444] text-white w-full md:w-64"
        />
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as SortOption)}
          data-testid="sort-button"
          className="p-2 rounded border border-gray-600 bg-[#444444] text-white"
        >
          <option value="id">Sort by ID</option>
          <option value="date">Sort by Date</option>
        </select>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : filteredAndSortedEvents.length > 0 ? (
        <div
          data-testid="events-list"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {filteredAndSortedEvents.map((event) => (
            <Link to={`/events/${event.id}`} key={event.id}>
              <div
                data-testid="event-card"
                data-event-id={event.id}
                className="border p-4 rounded-md h-full border-gray-600 hover:border-[#fcffd6] transition-colors"
              >
                <h2 className="text-lg font-bold">{event.title}</h2>
                <p className="text-sm text-gray-400">{event.date}</p>
                <p className="text-sm text-gray-400">{event.location}</p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No events found</p>
      )}
    </div>
  );
}
