# Interactive Kanban Board

## Overview
This project is an interactive **Kanban Board Application** built with React.js. It dynamically fetches data from the provided API and allows users to organize and view tickets in multiple ways.

The application is responsive, visually aligned with the provided design specifications, and includes features like grouping and sorting of tickets.

## Features
- **Dynamic Data Handling**: Fetches and displays tickets using the provided API.
- **Grouping Options**: Users can group tickets by:
  - **Status**
  - **User**
  - **Priority**
- **Sorting Options**:
  - Sort by **Priority** (descending).
  - Sort by **Title** (ascending).
- **Persistent State**: Saves the user's selected view even after a page reload.
- **Priority Levels**: Tickets are categorized into five priority levels:
  - **Urgent (4)**
  - **High (3)**
  - **Medium (2)**
  - **Low (1)**
  - **No Priority (0)**
- **Responsive Design**: Ensures a seamless experience across devices.
- **Custom Styling**: UI is built with pure CSS for a pixel-perfect design.
## Installation Steps

Follow these steps to set up and run the Interactive Kanban Board Application:

1. **Clone the Repository**  
   Use the following command to clone the repository:  
   ```bash
   git clone https://github.com/Ajay-k4/Kanban_Board.git
   cd  Kanban_Board
   npm install 
   npm start 
   http://localhost:3000
