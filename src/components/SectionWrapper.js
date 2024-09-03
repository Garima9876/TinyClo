import React from 'react';

const SectionWrapper = ({ children }) => {
  return (
    <div className="d-flex flex-column vh-100 mt-5">
      <main className="flex-grow-1">
        <div className="container-fluid px-5">{children}</div>
      </main>
    </div>
  );
};

export default SectionWrapper;