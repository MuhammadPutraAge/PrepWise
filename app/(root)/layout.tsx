import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const RootLayout = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default RootLayout;
