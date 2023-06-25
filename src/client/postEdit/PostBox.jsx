import React, { useState, useEffect, useRef } from "react";
import { BsThreeDots } from "react-icons/bs";
import { AiFillHeart, AiFillEdit } from "react-icons/ai";
import { FaComment, FaShare } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import disk from "../../assets/images/disk.png";

import Bookmark from "./Bookmark";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: max-content;

  .video-post {
    background-color: #ffffff;
    font-family: var(--inter-font);
    display: flex;
    flex-direction: column;
    padding-inline: max(25px, 4%);
    padding-block: 2.5%;
    width: 100%;
    border-radius: 25px;

    & > .post-content {
      position: relative;
      & > .post-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 1;
        color: var(--black-color);
        margin-bottom: 7px;

        & > .userInfo {
          display: flex;
          gap: 3%;
          align-items: center;

          & > .username-location {
            display: flex;
            flex-direction: column;
            padding-left: 10px;

            & > .username {
              font-weight: 600;
              white-space: nowrap;
              font-size: 0.7rem;
            }

            & > .location {
              font-size: 0.6rem;
              color: var(--black-500);
            }
          }
        }

        & > .post-edit {
          position: relative;
          & > .icon {
            font-size: 1.1rem;
            cursor: pointer;
          }

          & > .edit-option {
            position: absolute;
            width: 40px;
            height: 80px;
            text-align: center;
            display: flex;
            flex-direction: column;
            gap: 9%;
            justify-content: center;

            bottom: -80px;
            left: -10px;

            & > .icon {
              font-size: 1.5rem;
              margin-inline: auto;
              cursor: pointer;
            }
          }
        }
      }

      & .post-header.absolute {
        position: absolute;
        width: 100%;
        padding-inline: 2%;

        top: 2%;
        left: 2%;
        color: var(--white-color);
      }

      & > .post-image-section {
        & > .post-img {
          width: 100%;
          height: 415px;
          border-radius: 15px;
          aspect-ratio: 1/1;
          object-fit: cover;

          & > .music-img {
            animation: Loading 5s linear infinite;
          }

          & > .music-player {
            width: 100%;

            & > .music {
              width: 100%;
              height: 40px;
            }
          }
        }
      }

      & > .post-description {
        text-align: start;
        padding-left: 2.5%;
        font-size: 0.8rem;
        display: none;
      }

      & > .post-description.absolute {
        display: flex;
        width: 60%;
        position: absolute;
        bottom: 2%;
        left: 2%;
        color: var(--white-color);
      }

      & > .more-less {
        display: none;
      }
    }

    & > .post-option {
      display: flex;
      justify-content: space-between;
      margin: 0;

      align-items: center;
      & > .post-interaction {
        display: flex;
        gap: 4%;

        & > .icon {
          font-size: 1.7rem;
          color: var(--black-300);
        }

        & > .icon.red {
          color: red;
        }
      }
      & > .icon {
        font-size: 1.1rem;
      }

      & > .icon.black {
        font-size: 1.1rem;
        color: black;
      }
    }

    & > .post-description {
      display: flex;

      & > .username {
        color: var(--black-900);
        font-weight: bold;
        font-size: 0.9rem;
      }

      & > .post-desc {
        text-align: start;
        margin-left: 2.5%;
        font-size: 0.8rem;
      }
      & > .more-less {
        color: var(--black-500);
        cursor: pointer;
      }
    }

    .like-count {
      font-size: 0.9rem;
      color: var(--black-900);
    }

    & > .bookmark-icon {
      & > .icon {
        font-size: 0.2rem;
      }
    }

    .view-comments {
      color: var(--black-500);
      font-size: 0.8rem;
      cursor: pointer;
    }
  }
  .comments-section {
    margin-top: 10px;
    border-radius: 25px;
  }
`;

const PostBox = React.memo(
  ({ item, onedit, filetype, preview, description, location }) => {
    const loadComment = useRef(false);

    const stopCommentload = () => {
      loadComment.current = false;
      console.log("stopComentload");
    };

    const startCommentload = () => {
      loadComment.current = true;
      console.log("startComentload");
    };

    const {
      userid,

      _id,

      postfile,

      createdAt,
    } = item;

    const doc = {
      uri: postfile,
    };

    const initialState = {
      liked: false,
      bookmarked: false,
      isReadMore: false,
      isoption: false,
      isDelete: false,
      isComment: false,
      isPost: false,
      likecount: 0,
      commentcount: 0,
    };

    const [postState, SetPost] = useState(initialState);
    const toggleedit = () => {
      SetPost({
        ...postState,
        isComment: false,
        isReadMore: false,
        isPost: false,
        isoption: false,
      });
      onedit();
    };

    const vidRef = useRef(null);
    const onentry = () => {
      vidRef.current.play();
    };

    const onleave = () => {
      vidRef.current.pause();
    };

    const toggleLike = (e) => {
      e.preventDefault();
      const postid = item._id;
      if (postState.liked) {
        SetPost({
          ...postState,
          liked: false,
          likecount: postState.likecount - 1,
        });
      } else {
        SetPost({
          ...postState,
          liked: true,
          likecount: postState.likecount + 1,
        });
      }
    };

    const togglesave = (e) => {
      e.preventDefault();
      const postid = item._id;
      if (postState.bookmarked) {
        SetPost({ ...postState, bookmarked: false });
      } else {
        SetPost({ ...postState, bookmarked: true });
      }
    };

    const toggleOption = () => {
      if (postState.isoption) {
        SetPost({ ...postState, isoption: false });
      } else {
        SetPost({ ...postState, isoption: true });
      }
    };

    const deletePost = () => {
      if (postState.isDelete) {
        SetPost({ ...postState, isDelete: false });
      } else {
        SetPost({ ...postState, isDelete: true });
      }
    };

    const toggleComment = (e) => {
      if (postState.isComment) {
        SetPost({ ...postState, isComment: false });
        loadComment.current = false;
      } else {
        SetPost({ ...postState, isComment: true });
        loadComment.current = true;
      }
    };

    const toggleReadMore = (e) => {
      if (postState.isReadMore) {
        SetPost({ ...postState, isReadMore: false });
      } else {
        SetPost({ ...postState, isReadMore: true });
      }
    };

    const togglepostBar = () => {
      SetPost({ ...postState, isPost: !postState.isPost });
    };

    const desc =
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, culpa, tenetur repudiandae dolor cupiditate perferendis, mollitia placeat sit ad dolore quasi dolores corporis iste autem eius numquam quia nostrum delectus!";
    return (
    <Wrapper>
        <div className={!postState.isDelete ? "video-post " : "d-none"}>
          <div className="post-content">
            {/* absolute */}
            <div className="post-header ">
              <div className="userInfo">
                <img
                  src={userid?.profilePicture}
                  alt=""
                  className="profile-pic-sm"
                />
                <div className="username-location">
                  <span className="username">{userid?.username}</span>
                  <p className="location">{location}</p>
                </div>
              </div>
              <div className="post-edit">
                <BsThreeDots className="icon" onClick={toggleOption} />

                <div
                  className={
                    postState.isoption ? "edit-option glassmorphism" : "d-none"
                  }
                >
                  <AiFillEdit className="icon" onClick={toggleedit} />
                  <MdDelete className="icon" onClick={deletePost} />
                </div>
              </div>
            </div>
            <div className="post-image-section">
              {filetype?.substring(0, filetype.indexOf("/")) === "image" ? (
                <img
                  onDoubleClick={toggleLike}
                  className="post-img"
                  src={preview}
                  alt=""
                />
              ) : (
                ""
              )}

              {filetype?.substring(0, filetype.indexOf("/")) === "video" ? (
                <video
                  className="post-img"
                  muted
                  loop
                  ref={vidRef}
                  controls={true}
                  onMouseEnter={onentry}
                  onMouseLeave={onleave}
                >
                  <source type="video/mp4" src={preview} />
                </video>
              ) : (
                ""
              )}

              {filetype?.substring(0, filetype.indexOf("/")) === "audio" ? (
                <div
                  className="post-img"
                  onMouseEnter={onentry}
                  onMouseLeave={onleave}
                >
                  <img src={disk} alt="" className="music-img" />
                  <audio
                    className="music-player"
                    loop
                    ref={vidRef}
                    controls={true}
                  >
                    <source className="music" type={filetype} src={preview} />
                  </audio>
                </div>
              ) : (
                ""
              )}
            </div>
            {/* absolute */}
            <span className="post-description ">
              {postState.isReadMore ? description : desc?.substring(0, 100)}
            </span>
            <span className="more-less">
              {postState.isReadMore ? "...less" : "...more"}
            </span>
          </div>

          <div className="post-option">
            <div className="post-interaction">
              <AiFillHeart
                className={`${postState.liked ? "icon red" : "icon"} like-btn`}
                onClick={toggleLike}
              />

              <FaComment className="icon comment-btn" onClick={togglepostBar} />
              <FaShare className="icon" />
            </div>

            <Bookmark saved={item.saved} postid={item._id} />
          </div>
          <div className="like-count">{postState.likecount} likes</div>

          <div className="post-description">
            <span className="username">{userid?.username}</span>
            <span className="post-desc ">
              {description?.substring(0, postState.isReadMore ? 600 : 100)}
            </span>
            <span className="more-less" onClick={toggleReadMore}>
              {description?.split(" ").length > 9
                ? postState.isReadMore
                  ? "...less"
                  : "...more"
                : null}
            </span>
          </div>
          <span className="view-comments" onClick={toggleComment}>
            {postState.isComment ? "close all comments" : "view all comments"}
          </span>
        </div>
      </Wrapper>
    );
  }
);

export default PostBox;
