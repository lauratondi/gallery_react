// import React, { useState } from "react";
// import { app } from "./firebase";

// export const NewAlbumForm = () => {
//   const [title, setTitle] = useState("");

//   const onTitleChange = (e) => {
//     setTitle(e.target.value);
//   };

//   const onAlbumCreate = () => {
//     if (!title) {
//       return;
//     }
//     // @ts-ignore
//     db.collection("galleries").doc(title).set({
//       title: title,
//     });
//     setTitle("");
//   };

//   return (
//     <>
//       <input value={title} onChange={onTitleChange} type="text" />
//       <button onClick={onAlbumCreate}>Create album</button>
//     </>
//   );
// };
