import React, { useEffect, useState } from "react";

export const Table = () => {
  const [listData, setListData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      setListData([]);
    }, 1000);
  }, []);

  if (isLoading) {
    return <div>{"Loading..."}</div>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>key</th>
          <th>url</th>
        </tr>
      </thead>
      <tbody>
        {listData.map((item) => (
          <tr>
            <td>{item.key}</td>
            <td>
              <a href={item.url}>{item.url}</a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
