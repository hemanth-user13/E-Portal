export interface CardProps {
    Cardname: string;
    CardDetails: string;
    CardButtonName: string;
    OnCardClick: () => void;
    route: string;
    openInNewTab?: boolean; // Optional prop for new tab behavior
  }
  