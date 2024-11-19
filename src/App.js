import React, { useState } from "react";
import Header from "./components/Header";
import Column from "./components/Column";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import "./App.css";
import urgentIcon from "./assets/SVG - Urgent Priority colour.jpg";
import highPriorityIcon from "./assets/Img - High Priority.jpg";
import mediumPriorityIcon from "./assets/Img - Medium Priority.jpg";
import lowPriorityIcon from "./assets/Img - Low Priority.jpg";
import noPriorityIcon from "./assets/No-priority.jpg";
import toDoIcon from "./assets/To-do.jpg";
import inProgressIcon from "./assets/in-progress.jpg";
import doneIcon from "./assets/Done.jpg";

const mockTickets = [
  { id: 1, title: "API Connection Wizardry", description: "Establish a seamless connection to the provided API and fetch ticket data effortlessly.", status: "To Do", priority: "High", category: "Feature" },
  { id: 2, title: "Kanban Canvas Creation", description: "Design a clean and interactive Kanban board that captivates the user experience.", status: "To Do", priority: "Medium", category: "Design" },
  { id: 3, title: "Status Segmentation", description: "Implement logic to display tickets categorized by their current status.", status: "To Do", priority: "Low", category: "Functionality" },
  { id: 4, title: "Dynamic User Groups", description: "Enable dynamic ticket grouping based on the assigned user.", status: "In Progress", priority: "Urgent", category: "Feature" },
  { id: 5, title: "Priority Pyramid", description: "Introduce the ability to group tickets by their priority levels, from low to urgent.", status: "In Progress", priority: "High", category: "Functionality" },
  { id: 6, title: "Alphabetical Charm", description: "Implement sorting of tickets in ascending alphabetical order by their titles.", status: "In Progress", priority: "Medium", category: "Improvement" },
  { id: 7, title: "Urgency First Rule", description: "Create a sorting feature to arrange tickets based on priority levels, with urgent tasks leading the pack.", status: "Done", priority: "Urgent", category: "Improvement" },
  { id: 8, title: "Sticky State Saver", description: "Develop functionality to retain the user’s display settings even after a page reload.", status: "Done", priority: "High", category: "Feature" },
  { id: 9, title: "Fluid Kanban Mastery", description: "Ensure the board is responsive, offering a flawless experience on all devices.", status: "Done", priority: "Medium", category: "Improvement" },
];


const icons = {
  Urgent: urgentIcon,
  High: highPriorityIcon,
  Medium: mediumPriorityIcon,
  Low: lowPriorityIcon,
  "No-Priority": noPriorityIcon,
  "To Do": toDoIcon,
  "In Progress": inProgressIcon,
  Done: doneIcon,
};

function App() {
  const [groupBy, setGroupBy] = useState(""); 
  const [sortBy, setSortBy] = useState(""); 
  const [selectedTask, setSelectedTask] = useState(null); 
  const [cards] = useState(mockTickets);

  const handleGroupByChange = (e) => {
    setGroupBy(e.target.value);
    setSortBy(""); 
  };

  const handleSortByChange = (e) => {
    setSortBy(e.target.value);
    setGroupBy(""); 
  };

  const handleTaskClick = (task) => setSelectedTask(task); 
  const handleCloseModal = () => setSelectedTask(null); 

  const processedCards = () => {
    let result = [...cards];

    if (groupBy === "priority" || groupBy === "category") {
      return result.reduce((groups, card) => {
        const key = card[groupBy];
        if (!groups[key]) groups[key] = [];
        groups[key].push(card);
        return groups;
      }, {});
    }

    if (sortBy) {
      result.sort((a, b) => {
        if (sortBy === "priority") {
          const priorityOrder = { Urgent: 1, High: 2, Medium: 3, Low: 4, "No-Priority": 5 };
          return priorityOrder[a.priority] - priorityOrder[b.priority];
        }
        if (sortBy === "title") {
          return a.title.localeCompare(b.title);
        }
        return 0;
      });
    }

    return result;
  };

  const groupedOrSortedCards = processedCards();

  return (
    <div className="App">
      <Header />
      <div className="filters">
        <label>
          Group By:
          <select value={groupBy} onChange={handleGroupByChange}>
            <option value="">None</option>
            <option value="priority">Priority</option>
            <option value="category">Category</option>
          </select>
        </label>
        <label>
          Sort By:
          <select value={sortBy} onChange={handleSortByChange}>
            <option value="">None</option>
            <option value="priority">Priority</option>
            <option value="title">Title</option>
          </select>
        </label>
      </div>
      <div className="board">
        {groupBy
          ? Object.entries(groupedOrSortedCards).map(([group, cards]) => (
              <Column
                key={group}
                title={group}
                cards={cards}
                icon={icons[group] || null}
                handleTaskClick={handleTaskClick}
              />
            ))
          : ["To Do", "In Progress", "Done"].map((status) => (
              <Column
                key={status}
                title={status}
                cards={groupedOrSortedCards.filter((card) => card.status === status)}
                icon={icons[status]}
                handleTaskClick={handleTaskClick}
              />
            ))}
      </div>
      {selectedTask && <Modal task={selectedTask} close={handleCloseModal} />}
      <Footer />
    </div>
  );
}

export default App;