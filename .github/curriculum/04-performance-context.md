# Ticket 4: Advanced Hooks and Performance

**Task:** Refactor the application to use `useContext`, `useMemo`, and `useCallback` to handle global state, optimized filtering, and stable data fetching.

### Learning Objectives
In this ticket, you will learn how to:
- **`useContext`**: Create a "Global State" that any component can access, avoiding the need to pass data through many layers of components (Prop Drilling).
- **`useCallback`**: "Freeze" a function so React doesn't recreate it every time the page updates. This is crucial for performance and preventing infinite loops.
- **`useMemo`**: Cache the results of complex logic (like sorting a list). React will remember the result and only recalculate it if the underlying data actually changes.

---

### Step-by-Step Instructions

#### 1. Global Settings with `useContext`
Imagine we want to change the "Sort Order" on the home page, and have it stay the same when we navigate to other pages. Passing that setting manually to every page is tedious.
Instead, we will use a "Context Provider" to store the sort order in a global state.

- **Create the Context:** Create a new file `src/SortContext.tsx`.
  - Use `createContext` to define what our global state looks like.
  - Create a `SortProvider` component. This component will use `useState` to track if we are sorting by "date" or "id".
  - Export a custom hook called `useSort` so other components can easily "plug in" to this global state.
- **Wrap the App:** In `main.tsx`, import your `SortProvider` and wrap it around your `<BrowserRouter>`. This makes the sorting data available everywhere.
- **Add the UI:** In `App.tsx`, use your new `useSort()` hook to get the current sorting method.
  - **Requirement:** Add a `<select>` dropdown with `data-testid="sort-button"`. When it changes, call the function from your context to update the global setting.

#### 2. Stable Data Fetching with `useCallback`
In React, functions inside a component are destroyed and recreated every time the component "renders" (updates). If a `useEffect` depends on a function that keeps changing, it will run forever in an infinite loop!
Instead, we will use `useCallback` to tell React: "Keep this function exactly as it is unless I tell you otherwise."

- **Refactor Fetching:** Look at your `fetchEvents` logic. Move it out of the `useEffect` and wrap it in `useCallback(() => { ... }, [])`.
- **Requirement:** Update your `useEffect` to call this memoized `fetchEvents()` and include `fetchEvents` in the dependency array `[fetchEvents]`.

#### 3. Optimized Filtering with `useMemo`
If we have 1,000 events, we don't want React to re-filter and re-sort the entire list every time the user types a single letter, *unless* that letter actually changes the results.
Instead, we will use `useMemo` to cache the filtered list.

- **Add Search:** Create a `searchTerm` state using `useState`.
- **Requirement:** Add an `<input>` with `data-testid="search-input"`.
- **Requirement:** Create a variable `filteredAndSortedEvents` using `useMemo`. 
  - The logic inside `useMemo` should filter the events by the search term AND sort them based on the global setting from Step 1.
  - The dependency array should be `[events, searchTerm, sortBy]`. This tells React: "Only recalculate this list if the events, the search, or the sort order changes."

---

### Definition of Done:
- `useContext` manages global sort/filter settings.
- `useCallback` is used to memoize the data fetching function.
- `useMemo` efficiently handles the combined filtering and sorting logic.
- Search and sorting functionality work correctly in the UI.
- Running `npx playwright test ticket4.test.ts` passes.
