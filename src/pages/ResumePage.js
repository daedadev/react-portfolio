import React, { useEffect } from "react";

function ResumePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <iframe title="resume" src="/Software Resume.pdf"></iframe>
    </div>
  );
}

export default ResumePage;
