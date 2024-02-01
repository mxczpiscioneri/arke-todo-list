import React from "react";

const Header: React.FC = () => {
  return (
    <header data-testid="header" className="pb-4">
      <h1 className="text-2xl font-bold text-blue-chill-800">My Task List</h1>
    </header>
  );
};

export default Header;
