import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

export const RootPage = () => {
  const { key } = useParams();

  const redirectCall = async () => {
    const res = await fetch(`/api/getUrl?key=${key}`);
    const data = await res.json();
    if (data.url) {
      window.location.href = data.url;
    } else {
      window.location.href = `/edit/${key}`;
    }
  };

  useEffect(redirectCall, []);

  return null;
};
