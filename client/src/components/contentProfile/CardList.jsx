import { useState } from "react";
import Card from "./Card";
import AddShotFormUncontrolled from "./AddShotFormUncontrolled.jsx";
import axios from "axios";
import React from "react";
import { useEffect } from "react";

function CardList() {
  // const [userName, setUserName] = useState("");
  // const [id, setId] = useState("");
  // const [name, setName] = useState("");
  // const [setPiece, setSetPiece] = useState("");
  // const [image, setImage] = useState("");
  // const [show, setShow] = useState("");
  // const [description, setDescription] = useState("");
  const [currentShots, setCurrentShots] = useState([]);

  // const data = {
  //   userName: userName,
  //   id: id,
  //   name: name,
  //   setpiece: setPiece,
  //   image: image,
  //   show: show,
  //   description: description,
  // };

  // const shots  = axios("http://localhost:8085/api/shots", {
  //   method: "GET",
  //   body: JSON.stringify(data),
  //   headers: { "Content-Type": "application/json" },
  // })
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log(data);
  //   });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8085/api/shots");
        // Sets up the data to currentShots
        console.log(response.data.data);
        setCurrentShots(response.data.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
        // Just console logging to catch potential errors
      }
    };

    fetchData(); //calling the function
  }, []);

  const handleAddShot = (newShot) => {
    console.log(newShot);
    newShot.id = currentShots.length + 1; // unreliable but succinct
    //copy
    //modify
    //update state
    let newShots = [...currentShots, newShot];
    setCurrentShots(newShots);
  };

  const handleDelete = (idToDelete) => {
    let newShots = currentShots.filter((index) => index != idToDelete);
    setCurrentShots(newShots);
  };

  const shotItemsComponent = currentShots.map((shot, index) => (
    <Card
      key={index}
      shotId={index}
      userName={shot.userName}
      name={shot.name}
      image={shot.image}
      id={shot.id}
      setPiece={shot.setPiece}
      description={shot.description}
      shot={shot.show}
      onDeleteEvent={(shotID) => {
        handleDelete(shotID);
      }}
    />
  ));

  return (
    <>
      <div className="gridWrapper">
        <AddShotFormUncontrolled onAddShot={handleAddShot} />
        {shotItemsComponent}
      </div>
    </>
  );
}

export default CardList;