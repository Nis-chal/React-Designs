import React, { useState } from "react";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";

const Bookmark = React.memo(({ saved, postid }) => {
  const [bookmarked, Setbookmark] = useState(false);


  const togglesave = (e) => {
    e.preventDefault();

    if (bookmarked) {
      Setbookmark(false);
    } else {
      Setbookmark(true);
    }
  };
  return (
    <div className="bookmark-icon">
      {bookmarked ? (
        <BsFillBookmarkFill className="icon black" onClick={togglesave} />
      ) : (
        <BsBookmark className="icon" onClick={togglesave} />
      )}
    </div>
  );
});

export default Bookmark;
