import Link from "next/link";
import React, { ReactNode } from "react";

interface Props {
  logo: string
  children?: ReactNode
}

const PageHeader: React.FC<Props> = ({
  logo,
  children,
}) => {
  return (
    <div className="relative w-full flex flex-row items-center gap-8">
      <div className="flex-1 max-w-[120px]">
        <img src={logo} alt="Dwell - Student Living" />
        <h2 className="sr-only">Dwell - Student Living</h2>
      </div>

      <div className="flex flex-row flex-1 w-full">
        {React.Children.map(children, (child) => (
          <div className="child-container w-full">{child}</div>
        ))}
      </div>
    </div>
  );
}

export default PageHeader;
