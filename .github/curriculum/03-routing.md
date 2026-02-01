# Ticket 3: Dynamic Routing

**Task:** Implement dynamic routing to show details for a specific event.

### Navigating the v7 Docs
React Router v7 documentation is split into different versions. Since we are building a standard React app, you should focus on the **Declarative** components and **Hooks**. Avoid the "Framework" or "Data Router" sections for now, as they require a different project structure.
Use this link to navigate the correct docs: [React Router v7 Declarative Docs](https://reactrouter.com/start/declarative/routing)

### Instructions

1. **Setup Routing:**
   - Install `react-router`.
   - Wrap your application in a `<BrowserRouter>`.
   - Use `<Routes>` and `<Route>` to define your paths. You'll need:
     - `/` for your main events list.
     - `/events/:id` for the details page (where `:id` is a dynamic parameter).

2. **Navigation:**
   - Use the `<Link>` component to navigate between pages without reloading the browser.

3. **Fetching Details:**
   - On the details page, use the `useParams` hook to grab the `id` from the URL.
   - Use that `id` to fetch the specific event data from your backend (e.g., `fetch('.../events/' + id)`).
   - **Requirement:** The main container for the event details must have `data-testid="event-details"`.

**Definition of Done:**
- Clicking a card navigates to a unique URL.
- The details page fetches and displays the correct event.
- Running `npx playwright test ticket3.test.ts` passes.