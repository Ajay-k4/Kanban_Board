export default function groupTickets(tickets, groupBy) {
  if (!groupBy) return tickets;

  return tickets.reduce((acc, ticket) => {
    const key = ticket[groupBy]; // Group by dynamic field (status, priority, or category)
    if (!acc[key]) acc[key] = [];
    acc[key].push(ticket);
    return acc;
  }, {});
}
