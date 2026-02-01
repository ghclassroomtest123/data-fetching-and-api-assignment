# Ticket 1: Project Setup

**Task:** Initialize your React project and setup the fake backend.

### Instructions

1. **Initialize Vite:**
   - Open your terminal in this repository.
   - Run the command to create a new Vite project named `events-app` using the `react-ts` template.
   - `cd events-app` and install the base dependencies.

2. **Install Tools:**
   - You will need `tailwindcss`, `@tailwindcss/vite`, and `json-server`. 
   - Install these in your project.

3. **Configure Tailwind:**
   - Add the Tailwind plugin to your Vite configuration.
   - Import Tailwind into your global CSS file.

4. **Setup the Fake Backend (JSON Server):**
   - **What is JSON?** JSON (JavaScript Object Notation) is a lightweight format for storing and transporting data. It's organized into key-value pairs (like a JavaScript object) and arrays.
   - **The db.json structure:** `json-server` needs a file (usually `db.json`) where each top-level key represents a "resource" (like an API endpoint).
   - **Your Task:** Create a `db.json` file in the **root** of your repository. 
   - It must contain an `events` array.
   - Each event object should have: `id`, `title`, `date`, `location`, and `description`.
   - **Example structure for posts:**
     ```json
     {
       "posts": [
         { "id": "1", "title": "Hello World" }
       ]
     }
     ```
   - Populate your `events` array with at least 5 unique events.

5. **Scripts:**
   - Add a script to your app's `package.json` under scripts to run `json-server`. It should watch `db.json` and run on port `3001`.
   ```
    "server": "npx json-server db.json --port 3001"
   ```
   - This starts our backend on port 3001 using the json file we created.

**Definition of Done:**

- You have a folder named `events-app`.
- You have a `db.json` file in the root with at least 5 events.
- Your Vite project is running.
- Running `npx playwright test ticket1.test.ts` passes.
