"use client";

const events = [
  { date: "June 30, 2025", location: "Soho Rooftop Bar" },
  { date: "July 5, 2025", location: "Brooklyn Warehouse" },
  { date: "July 10, 2025", location: "Harlem Nights Lounge" },
];

export default function PopUpSchedule() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">🍹 Upcoming Pop-Ups</h2>
      <ul className="space-y-3">
        {events.map((event, i) => (
          <li key={i} className="border border-border rounded-xl p-4">
            <p className="text-lg font-medium">{event.date}</p>
            <p className="text-muted-foreground">{event.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
