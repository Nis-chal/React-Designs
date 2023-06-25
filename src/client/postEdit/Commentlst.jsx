import React, { useEffect, useState } from "react";
import Comment from "./Comment";
import axios from "axios";
import { useAppContext } from "../../../context/appContext";

const Commentlst = React.memo(() => {
  const [comments, setComments] = useState([]);

  return (
    <div>
      <div className="comments-section ">
        {comments.map((item) => {
          return <Comment item={item} key={item._id} />;
        })}
      </div>
    </div>
  );
});

export default Commentlst;
