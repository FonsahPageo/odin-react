const todos = [
  { task: "Mow the yard", id: crypto.randomUUID() },
  { task: "Work on Odin Projects", id: crypto.randomUUID() },
  { task: "Feed the cat", id: crypto.randomUUID() },
];

export function TodoList() {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.task}</li>
      ))}
    </ul>
  );
}

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
export function MonthList() {
  return (
    <ul>
      {months.map((month, index) => (
        <li key={index}>{month}</li>
      ))}
    </ul>
  );
}
