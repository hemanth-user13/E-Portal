import { ReactNode } from "react";

export interface CardProps {
  Cardicon: ReactNode; 
  CardButtonName: string;
  OnCardClick: () => void;
  route?: string; 
  openInNewTab?: boolean; 
}
