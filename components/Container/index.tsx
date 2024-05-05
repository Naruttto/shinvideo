import React, { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mx-auto max-w-[82rem] px-4 md:px-8 xl:px-0 pt-24 pb-16">
      {children}
    </div>
  );
};

export default Container;
