import React, { useRef } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 10px;
  width: 455px;

  .comment-form {
    border-radius: 7px;
    display: flex;
    align-items: center;
    padding: 2%;

    & > .description {
      width: 100%;
      border: none;
      outline: none;
      background-color: transparent;
      color: var(--black-color);

      &::placeholder {
        color: var(--black-600);
      }
    }

    & > .btn-post {
      min-width: 70px;
      border: none;
      outline: none;
      font-weight: bolder;
      text-transform: capitalize;
      background-color: transparent;
      font-size: 0.7em;
      color: var(--blue-900);
    }
  }
`;

const PostComment = ({ startCommentload, postId }) => {
  const inputRef = useRef("");

  const onSubmit = async (e) => {
    e.preventDefault();
    inputRef.current.value = "";
    startCommentload();
  };

  return (
    <Wrapper>
      <form className="comment-form glassmorphism">
        <img className="profile-pic-sm" src={"user.profilePicture"} alt="" />

        <input
          ref={inputRef}
          type="text"
          className="description"
          placeholder="Enter Description"
        />
        <button type="submit" className="btn-post" onClick={onSubmit}>
          post
        </button>
      </form>
    </Wrapper>
  );
};

export default PostComment;
