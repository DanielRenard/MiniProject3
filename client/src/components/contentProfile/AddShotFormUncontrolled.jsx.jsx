import { useContext, useState } from "react";

export default function AddShotFormUncontrolled() {
  const [userName, setUserName] = useState("");
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [setPiece, setSetPiece] = useState("");
  const [image, setImage] = useState("");
  const [show, setShow] = useState("");
  const [description, setDescription] = useState("");
  const [submitResult, setSubmitResult] = useState("");

  // const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      userName: userName,
      id: id,
      name: name,
      setPiece: setPiece,
      image: image,
      show: show,
      description: description,
    };

    let result = await fetch("http://localhost:8085/api/shots/newshot", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });

    setSubmitResult("Sent");
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="formRow">
            <label>
              User Name
              <input
                type="text"
                value={userName}
                name="userName"
                onChange={(e) => setUserName(e.target.value)}
              />
            </label>
            <label>
              Name
              <input
                type="text"
                value={name}
                name="name"
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label>
              Description
              <input
                type="text"
                value={description}
                name="description"
                onChange={(e) => setDescription(e.target.value)}
              />
            </label>
            <label>
              Image
              <input
                type="text"
                value={image}
                name="image"
                onChange={(e) => setImage(e.target.value)}
              />
            </label>
            <label>
              ID
              <input
                type="text"
                value={id}
                name="id"
                onChange={(e) => setId(e.target.value)}
              />
            </label>
            <label>
              Set Piece
              <input
                type="text"
                value={setPiece}
                name="setPiece"
                onChange={(e) => setSetPiece(e.target.value)}
              />
            </label>
            <label>
              Show
              <input
                type="text"
                value={show}
                name="show"
                onChange={(e) => setShow(e.target.value)}
              />
            </label>
          </div>
          <div className="formRow">
            <button>Submit</button>
            <p>{submitResult}</p>
          </div>
        </form>
      </div>
    </>
  );
}