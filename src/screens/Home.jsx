import { useEffect, useState } from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
const Home = () => {
  const [food, setFood] = useState();
  useEffect(() => {
    const getFoodItems = async () => {
      const _foodItems = await fetch("http://localhost:3001/food", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await _foodItems.json();
      setFood(json?.data);
    };
    getFoodItems();
  }, []);
  return (
    <div>
      <Navbar />
      {food?.map((foodItem) => {
        return (
          <>
            <div>{foodItem.CategoryName}</div>
            <br />
          </>
        );
      })}
      {/* <Card /> */}
    </div>
  );
};


export default Home;


