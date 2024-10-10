import React, { useEffect, useState } from "react";
import Container from "./components/Container";

export default function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await fetch("https://api.quicksell.co/v1/internal/frontend-assignment");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const responseData = await response.json();
        console.log(responseData)
        setData(responseData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchDetails();
  }, []);

  return <Container data={data} />;
}