# Ticket 2: Fetching Data

**Task:** Fetch the list of events from your fake backend and display them.

### Understanding the Tools

To get data from a server in React, we use two main things:

1.  **`fetch()`**: A built-in browser function used to make network requests. It returns a "Promise" that resolves to the response from the server. You'll need to convert that response to JSON using `.json()`.
2.  **`useEffect()`**: A React Hook that lets you synchronize a component with an external system (like an API). Since fetching data is a "side effect," we wrap our fetch call inside `useEffect` so it runs when the component mounts.

**Why use an Effect?** 
If we want data to load as soon as the component appears on the screen (not just when a user clicks a button), we use `useEffect`. This "synchronizes" your local state with the data living on your server.

### Instructions

1. **The Fetch Logic:**
   - Inside your main component, use `useEffect` to trigger a fetch request to `http://localhost:3001/events`.
   - This will help [Mozilla Fetch Docs](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
   - Store the returned data in a state variable (using `useState`).

2. **Handling the Lifecycle:**
   - **Loading:** Create a state to track if the data is still loading. Show a "Loading..." message while waiting.
   - **Error:** Create a state to catch any errors (e.g., if the server is down). Show an error message if the fetch fails.

3. **Displaying the Data:**
   - Map through your events state to render the list.
   - **Requirement:** Use these data attributes for the auto-grader:
     - The container for the list: `data-testid="events-list"`
     - Each event item: `data-testid="event-card"`
     - Each event item must also have a `data-event-id` attribute with the event's ID.

**Definition of Done:**

- Events are successfully fetched and displayed.
- Loading and error states are visible when appropriate.
- The required `data-testid` attributes are implemented.
- Running `npx playwright test ticket2.test.ts` passes.
