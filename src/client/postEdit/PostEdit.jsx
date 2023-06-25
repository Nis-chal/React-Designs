import React from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  .input-group {
    display: flex;
    flex-direction: column;
    transform: translateZ(9rem);
    label {
      text-transform: capitalize;
      margin-block: 2px;
      font-weight: bold;
      color: black;
    }

    input {
      height: 40px;
      margin-block: 10px;
      padding-left: 5px;
      background-color: transparent;
      border: none;
      border-radius: 25px;
      box-shadow: inset 1px 1px 1px 2px #e7e7e7;
      padding-left: 15px;

      &:focus {
        outline: 2px solid var(--blue-700);
        border: none;
      }
    }
  }
`;
const PostEdit = () => {
  const info = {
    title: "",
    content: "",
    file: "",
    createAt: "",
  };
  const [formvalue, setFormValue] = React.useState(info);

  const handleChange = (e) => {
    setFormValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Wrapper>
      <div className="input-group">
        <label htmlFor="">'title</label>
        <input
          type={"text"}
          name={"location"}
          placeholder="Enter Description"
          value={formvalue.location}
          onChange={handleChange}
        />
      </div>
    </Wrapper>
  );
};

export default PostEdit;
