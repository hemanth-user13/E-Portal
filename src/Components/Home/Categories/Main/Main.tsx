import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../../Helpers/Cards";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import DescriptionIcon from '@mui/icons-material/Description';
import AssignmentIcon from '@mui/icons-material/Assignment';
import RateReviewIcon from '@mui/icons-material/RateReview';
import PostAddIcon from '@mui/icons-material/PostAdd';
import WorkIcon from '@mui/icons-material/Work';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DvrIcon from '@mui/icons-material/Dvr';
import AccountTreeIcon from '@mui/icons-material/AccountTree';

const Main = () => {
  const [visibleCards, setVisibleCards] = useState(6);
  const navigate = useNavigate();

  const showMoreCards = () => {
    setVisibleCards(8);
  };

  const handleCardClick = (route: string, openInNewTab: boolean) => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    if (isLoggedIn) {
      if (openInNewTab) {
        window.open(route, "_blank");
      } else {
        navigate(route);
      }
    } else {
      navigate("/e-portal/login");
    }
  };

  return (
    <div className="">
      <div style={{ position: "absolute", left: "280px", top: "90px" }}>
        <p className="text-3xl font-serif">Welcome to the E-Portal Website</p>
        <div className="mr-3">
          <main className="mt-14 grid grid-cols-3 gap-4">
            {visibleCards >= 1 && (
              <Card
                Cardicon={<ManageAccountsIcon />}
                CardButtonName="Go to account"
                OnCardClick={() => handleCardClick("e-portal/UserAccount", true)}
              />
            )}
            {visibleCards >= 2 && (
              <Card
                Cardicon={<DescriptionIcon />}
                CardButtonName="View Tax Reports"
                OnCardClick={() => handleCardClick("/tax", true)}
              />
            )}
            {visibleCards >= 3 && (
              <Card
                Cardicon={<AssignmentIcon />}
                CardButtonName="Check your Attendance"
                OnCardClick={() => handleCardClick("/attendence", true)}
              />
            )}
            {visibleCards >= 4 && (
              <Card
                Cardicon={<RateReviewIcon />}
                CardButtonName="Check the Records"
                OnCardClick={() => handleCardClick("/review", true)}
              />
            )}
            {visibleCards >= 5 && (
              <Card
                Cardicon={<PostAddIcon />}
                CardButtonName="See posts"
                OnCardClick={() => handleCardClick("e-portal/postData", true)}
              />
            )}
            {visibleCards >= 6 && (
              <Card
                Cardicon={<WorkIcon />}
                CardButtonName="Check status"
                OnCardClick={() => handleCardClick("/projects", true)}
              />
            )}
            {visibleCards >= 7 && (
              <Card
                Cardicon={<DvrIcon />}
                CardButtonName="Go to Records"
                OnCardClick={() => handleCardClick("/account", true)}
              />
            )}
            {visibleCards >= 8 && (
              <Card
                Cardicon={<AccountTreeIcon />}
                CardButtonName="Go to Projects"
                OnCardClick={() => handleCardClick("/account", true)}
              />
            )}
          </main>

          {visibleCards < 7 && (
            <div className="mt-6 text-center">
              <button
                onClick={showMoreCards}
                className="ml-[800px] font-medium text-blue-600 dark:text-blue-500 hover:underline bg-transparent border-none cursor-pointer"
              >
                Read more
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Main;
