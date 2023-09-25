import React from "react";
interface Props {
  params: { id: number };
}

// must get userID at page level
const UserDetailPage = ({ params: { id } }: Props) => {
  return <div>UserDetailPage {id}</div>;
};

export default UserDetailPage;
