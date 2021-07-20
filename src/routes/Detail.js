import React from "react";

function Detail({ match }) {
  const { params } = match;
  console.log(params);
  return <div>Detail {params.id}</div>;
}

export default Detail;
