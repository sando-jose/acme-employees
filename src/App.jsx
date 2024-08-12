import React, { useEffect, useState } from "react";

const App = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/v1/employees");
        if (!response.ok) {
          throw new Error("Network response:error");
        }
        const { rows } = await response.json();
        setEmployees(rows);
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };

    fetchEmployees();
  }, []);

  //still not displaying
  return <></>;
};

export default App;
