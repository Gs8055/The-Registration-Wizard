export default function Step3({ data }) {
  return (
    <div>
      <h2>Review</h2>

      <p>
        <strong>First Name:</strong> {data.firstName}
      </p>

      <p>
        <strong>Last Name:</strong> {data.lastName}
      </p>

      <p>
        <strong>DOB:</strong> {data.dob}
      </p>

      <p>
        <strong>Email:</strong> {data.email}
      </p>
    </div>
  );
}