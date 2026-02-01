# Blueprint Developer Bootcamp: Blueprint Event Tracker

## How This Works: Issue-Driven Development

Your work has been assigned to you via tickets.

1. Open the Issues Tab.
  - You will see a backlog of "Tickets" (e.g., *Setup, Style*, *Hero*).
  - These tickets are your instructions.
2. **Start with "Ticket 1: Setup"**.
  - Claim the ticket, write the code, and close it when you're done.
3. **Work at your own pace.**
  - This curriculum is designed for you to "choose your own adventure." The faster and better you ship, the faster you move to the Intermediate Track.

---

## The Auto-Grader

We have included a test suite (`Playwright`) that acts like a QA engineer. It will check your code for the necessary requirements.

## Quick Start

Once you clone this repo:

`# 1. Install dependencies`  
`npm install`  

`# 2. Run the Grader`  
`npx playwright test`  

**If the tests fail:** Read the error message. It will tell you exactly what is missing.

**If the tests pass:** You are ready to close your current ticket and move to the next.

---

## Requirement: Data Attributes

To allow our tests to grade your creative designs, you must use **Data Attributes** to label your sections. You can style your site however you want, as long as these labels exist.

**Example:**  

If a ticket asks for `data-testid="projects"`, your code **must** include:

`// The Grader finds this:`  
`<section data-section="projects" className="my-cool-grid">`  
  `{/* Your project cards go here */}`  
`</section>`  

---

## Ready?

Head over to the Issues Tab and open Ticket #1.

*Note: This is a self-driven module. Your ability to figure things out, read documentation, and unblock yourself is part of this but don't be afraid to reach out for help. We are here if you need anything. Good luck!*
