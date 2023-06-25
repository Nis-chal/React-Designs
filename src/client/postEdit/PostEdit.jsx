import React from "react";
import styled from "styled-components";
import { RiImageAddFill } from "react-icons/ri";
import { IoMdResize } from "react-icons/io";
import { FaComment, FaShare } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { AiFillHeart, AiFillEdit } from "react-icons/ai";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";

const Wrapper = styled.div`
  background-color: #000000;
  height: 100dvh;
  width: 100dvw;
  padding-block: 3%;

  .d-none {
    display: none;
  }
  ::-webkit-scrollbar {
    width: 6px;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #6f4315ad;

    border-radius: 10px;
    filter: blur(200px);
  }
  .glassmorphism {
    backdrop-filter: blur(50px);
    background: rgba(255, 255, 255, 0.61);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .card {
    max-width: 500px;
    margin: auto;
    height: 600px;
    padding: 2%;
    border-radius: 25px;
    background-color: #1613136d;
    backdrop-filter: blur(20px);
    box-shadow: inset 1px 1px 1px 2px #3f270caf;

    &.active .card-content {
      transform: rotateY(0.5turn);
    }

    & > .card-content {
      height: 100%;
      width: 100%;
      transition: transform 3s;
      // background: pink;
      transform-style: preserve-3d;

      & > .card-back {
        position: absolute;
        top: 0;
        left: 0;
        backface-visibility: hidden;
        transform-style: preserve-3d;
        transform: rotateY(0.5turn);
        background: #ffffffda;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        height: 100%;
        width: 100%;

        margin: 0;
        padding: 0;
        border-radius: 15px;

        & > .card-body {
          transform: translateZ(6rem);
          font-size: 1.5rem;
          width: 100%;
          height: 100%;
        }
      }

      & > .card-front {
        position: absolute;
        top: 0;
        left: 0;
        /* backface-visibility: hidden; */
        transform-style: preserve-3d;
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;

        background: black;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        padding: 2%;

        border-radius: 15px;
        box-shadow: inset 20px 20px 60px #bebebe,
          inset -20px -20px 60px inset -20px -20px 60px
            rgba(255, 255, 255, 0.61);

        border: 2px solid var(--blue-700);

        .edit-img {
          position: relative;
          transform: translateZ(200px);
          height: 50%;
          padding: 0;
          transition: 2s height ease-in-out;

          & > label {
            font-weight: bold;
            color: black;
          }
          & > img {
            object-fit: cover;
            object-position: center;
            margin: 0 auto;
            padding: 2%;
            border-radius: 15px;
            transition: 2s;
            width: 100%;
            height: 100%;
          }

          & > .icon {
            position: absolute;
            top: 10%;
            right: 5%;
            font-weight: bolder;
            color: white;
            cursor: pointer;
            transition: 2s all ease-in-out;
          }
          & > .icon-l {
            position: absolute;
            top: 10%;
            left: 5%;
            font-weight: bolder;
            color: white;
            cursor: pointer;
            transition: 2s all ease-in-out;
          }

          &.active {
            height: 100%;
            width: 100%;

            & > .fileupload {
              position: absolute;
              top: 5%;
              left: 5%;
            }
            & > .icon {
              position: absolute;
              right: 5%;
              top: 5%;
              z-index: 2;
            }
            & > .icon-l {
              position: absolute;
              left: 5%;
              top: 5%;
              z-index: 2;
            }

            & > img {
              z-index: 2;
              height: 100%;
              width: 100%;

              object-fit: cover;
            }
          }
        }
        & > .btn-submit {
          width: 50%;
          border-radius: 25px;
          height: max-content;
          padding: 2%;
          margin: 0 auto;
          margin-top: auto;
          background-color: #41220b9a;
          color: #ffffffad;
          font-weight: bold;
          border: none;
          transform: translateZ(100px);
          cursor: pointer;

          &.active {
            animation: fade-out 2s ease-out 0s forwards;
          }
        }

        & > .title {
          font-size: 1.5rem;
          text-transform: capitalize;
          color: #6f4315ad;
          transform: translateZ(200px);
          transition: 2s height ease-in-out;
          overflow: hidden;

          &.active {
            animation: fade-out 2s ease-out 0s forwards;
          }
        }
      }
    }
  }
  .input-group {
    display: flex;
    flex-direction: column;
    transform: translateZ(9rem);
    overflow: hidden;
    &.active {
      animation: fade-out 2s ease-out 0s forwards;
    }
    label {
      text-transform: capitalize;
      margin-block: 2px;
      font-weight: bold;
      color: #3f270caf;
    }

    input {
      height: 40px;
      margin-block: 10px;
      padding-left: 5px;
      background-color: transparent;
      border: none;
      border-radius: 25px;
      box-shadow: inset 1px 1px 1px 2px #3f270caf;
      padding-left: 15px;
      color: white;

      &:focus {
        outline: 2px solid #6f4315ad;
        box-shadow: none;
        border: none;
      }
    }
    textarea {
      color: white;
      margin-block: 10px;
      padding: 2%;
      background-color: transparent;
      border: none;
      border-radius: 10px;
      box-shadow: inset 1px 1px 1px 2px #3f270caf;
      padding-left: 15px;
      overflow: hidden;
      overflow-y: auto;

      &:focus {
        box-shadow: none;
        outline: 2px solid #6f4315ad;

        border: none;
      }
    }

    @keyframes fade-out {
      to {
        opacity: 0;
      }
    }
  }
`;

const CardBack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;

  .video-post {
    display: flex;
    flex-direction: column;
    padding-inline: max(25px, 4%);
    padding-block: 2.5%;
    width: 100%;
    border-radius: 25px;

    & > .post-content {
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

          & > .profile-pic-sm {
            border-radius: 50px;
            width: 30px;
            height: 30px;
          }

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

      & > .post-image-section {
        & > .post-img {
          width: 100%;
          height: 100%;
          border-radius: 15px;
          aspect-ratio: 1/1;
          object-fit: cover;
        }
      }

      & > .post-description {
        text-align: start;
        padding-left: 2.5%;
        font-size: 0.8rem;
        display: none;
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
  }
`;
const PostEdit = () => {
  const uploadState = {
    location: "New York",
    postfile: "",
    description: "Lorem ipsum dolor sit amet.",
    username: "John Doe",

    blobUrl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
    createAt: Date.now(),
    profilePic:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
  };
  const [value, setValue] = React.useState({ fullscreen: false });
  const [upload, setUpload] = React.useState(uploadState);

  const initialState = {
    success: true,
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

  const [postState, SetPost] = React.useState(initialState);

  const toggleEdit = () => {
    SetPost((prev) => {
      if (prev.isoption) {
        return {
          ...prev,
          success: !prev.success,
          isoption: false,
        };
      }
      return {
        ...prev,
        success: !prev.success,
      };
    });
  };
  const toggleOption = () => {
    if (postState.isoption) {
      SetPost({ ...postState, isoption: false });
    } else {
      SetPost({ ...postState, isoption: true });
    }
  };

  const togglefullscreen = () => {
    setValue({ ...value, fullscreen: !value.fullscreen });
  };

  const handleChange = (e) => {
    setUpload((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onFileSelection = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.target.files && e.target.files[0]) {
      let file = e.target.files[0];
      let blobURL = URL.createObjectURL(file);
      if (file.type.match("image.*")) {
        setUpload({
          ...upload,
          postfile: file,
          filetype: e.target.files[0].type,
          blobUrl: blobURL,
        });
      }
    }
  };

  const toggleLike = (e) => {
    e.preventDefault();
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

  const [bookmarked, Setbookmark] = React.useState(false);

  const togglesave = (e) => {
    e.preventDefault();

    if (bookmarked) {
      Setbookmark(false);
    } else {
      Setbookmark(true);
    }
  };

  return (
    <Wrapper>
      <div className={postState?.success ? "card active" : "card"}>
        <div className="card-content">
          <div className="card-front">
            <p className={`${value.fullscreen && "active"} title `}>
              Edit Post
            </p>
            <div className={`${value.fullscreen && "active"} input-group`}>
              <input
                type={"text"}
                id="location"
                name={"location"}
                placeholder="Enter Location"
                value={upload.location}
                onChange={handleChange}
              />
            </div>

            <div className={`${value.fullscreen && "active"} edit-img `}>
              <img src={upload.blobUrl} alt="" />
              <div className="fileupload"></div>
              <input
                type="file"
                name="postfile"
                className="uploadfile d-none"
                id="postfile"
                onChange={onFileSelection}
                accept="image/*"
              />
              <label htmlFor="postfile" className="icon-l">
                <RiImageAddFill className="icon" />
              </label>
              <IoMdResize className="icon" onClick={togglefullscreen} />
            </div>
            <div className={`${value.fullscreen && "active"} input-group`}>
              <textarea
                cols="30"
                rows="4"
                type={"text"}
                id="description"
                name={"description"}
                placeholder="Enter Description"
                value={upload.description}
                onChange={handleChange}
                style={{ resize: "none" }}
              ></textarea>
            </div>
            <button
              className={`${value.fullscreen && "active"} btn-submit`}
              onClick={toggleEdit}
            >
              Save
            </button>
          </div>

          <div className="card-back">
            <p className="card-body">
              <CardBack>
                <div className={"video-post "}>
                  <div className="post-content">
                    {/* absolute */}
                    <div className="post-header ">
                      <div className="userInfo">
                        <img
                          src={upload?.profilePic}
                          alt=""
                          className="profile-pic-sm"
                        />
                        <div className="username-location">
                          <span className="username">{upload?.username}</span>
                          <p className="location">{upload?.location}</p>
                        </div>
                      </div>
                      <div className="post-edit">
                        <BsThreeDots className="icon" onClick={toggleOption} />

                        <div
                          className={
                            postState.isoption
                              ? "edit-option glassmorphism"
                              : "d-none"
                          }
                        >
                          <AiFillEdit className="icon" onClick={toggleEdit} />
                          <MdDelete className="icon" />
                        </div>
                      </div>
                    </div>
                    <div className="post-image-section">
                      <img
                        onDoubleClick={toggleLike}
                        className="post-img"
                        src={upload?.blobUrl}
                        alt=""
                      />
                    </div>
                    {/* absolute */}
                    <span className="post-description ">
                      {postState.isReadMore
                        ? upload?.description
                        : upload?.description?.substring(0, 100)}
                    </span>
                    <span className="more-less">
                      {postState.isReadMore ? "...less" : "...more"}
                    </span>
                  </div>

                  <div className="post-option">
                    <div className="post-interaction">
                      <AiFillHeart
                        className={`${
                          postState.liked ? "icon red" : "icon"
                        } like-btn`}
                        onClick={toggleLike}
                      />

                      <FaComment className="icon comment-btn" />
                      <FaShare className="icon" />
                    </div>

                    <div className="bookmark-icon">
                      {bookmarked ? (
                        <BsFillBookmarkFill
                          className="icon black"
                          onClick={togglesave}
                        />
                      ) : (
                        <BsBookmark className="icon" onClick={togglesave} />
                      )}
                    </div>
                  </div>
                  <div className="like-count">{postState?.likecount} likes</div>

                  <div className="post-description">
                    <span className="username">{upload?.username}</span>
                    <span className="post-desc ">{upload.description}</span>
                  </div>
                </div>
              </CardBack>
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default PostEdit;
