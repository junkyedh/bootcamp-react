import React from "react";
import { Navigate, useParams } from "react-router-dom";

export default function Detail() {
  const { id } = useParams();

  return <div>Detail {id}</div>;
}
