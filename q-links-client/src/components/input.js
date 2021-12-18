import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Input = () => {
  const { key } = useParams();
  const [value, setValue] = useState("");

  const fetchData = async () => {
    const res = await fetch(`/api/getUrl?key=${key}`);
    const data = await res.json();
    if (data.url) {
      setValue(data.url);
    }
    return data.url;
  };

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    await fetch(`/api/createUrl?key=${key}&url=${value}`);
    const url = await fetchData();
    window.location.href = url;
  };

  useEffect(fetchData, []);

  return (
    <form
      onSubmit={onSubmit}
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "100px",
      }}
    >
      <input
        style={{ width: "80%", padding: "10px" }}
        placeholder="Enter a url"
        value={value}
        onChange={onChange}
      />
    </form>
  );
};
