export function Homepage() {
  return (
    <div className="homepage">
      <h1>Welcome to Zen Student Mentor Portal</h1>
      <ul className="list">
        <li className="list-item">
          This Web App can be used to view the overall data of Mentors and
          Students Information.
        </li>
        <li className="list-item">
          A new mentor and a new student can be added to the database
        </li>
        <li className="list-item">
          For a selected Student mentor can be changed
        </li>
        <li className="list-item">
          For Students without mentors, mentors can be assigned easily.
        </li>
        <li className="list-item">
          For a selected Mentor, list of students assigned can be displayed.
        </li>
      </ul>
    </div>
  );
}
