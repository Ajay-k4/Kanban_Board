export default function sortTickets(tickets, sortBy) {
  return tickets.slice().sort((a, b) => {
    if (sortBy === "priority") {
      const priorities = { Urgent: 1, High: 2, Medium: 3, Low: 4, "No-Priority": 5 };
      return priorities[a.priority] - priorities[b.priority];
    } else if (sortBy === "title") {
      return a.title.localeCompare(b.title); // Sort alphabetically by title
    }
    return 0; // No sorting
  });
}
