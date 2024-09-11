import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import Card from "../../../Helpers/Cards";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';


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
   <>
    <div>
      <div style={{ position: "absolute", left: "280px", top: "90px" }}>
        <p className="text-3xl font-serif">Welcome to the E-Portal Website</p>
        <div className="mr-3">
          <main className="mt-6 grid grid-cols-3 gap-4">
            {visibleCards >= 1 && (
              <Card
                Cardname="Account"
                CardDetails="View and manage your account"
                CardButtonName="Go to account"
                route="e-portal/UserAccount"
                openInNewTab={true}
                OnCardClick={() =>
                  handleCardClick("e-portal/UserAccount", true)
                }
              />
            )}
            {visibleCards >= 2 && (
              <Card
                Cardname="Tax"
                CardDetails="View Tax related Documents"
                CardButtonName="View Reports"
                route="/tax"
                openInNewTab={true} 
                OnCardClick={() => handleCardClick("/tax", true)}
              />
            )}
            {visibleCards >= 3 && (
              <Card
                Cardname="Attendance"
                CardDetails="View Your Attendance"
                CardButtonName="Check your Attendance"
                route="/attendence"
                openInNewTab={true}
                OnCardClick={() => handleCardClick("/attendence", false)}
              />
            )}
            {visibleCards >= 4 && (
              <Card
                Cardname="Review"
                CardDetails="Review Your Records"
                CardButtonName="Check the Records"
                route="/review"
                openInNewTab={true}
                OnCardClick={() => handleCardClick("/review", true)}
              />
            )}
            {visibleCards >= 5 && (
              <Card
                Cardname="Post"
                CardDetails="Check the recent posts"
                CardButtonName="See posts"
                route="e-portal/posts"
                openInNewTab={false}
                OnCardClick={() => handleCardClick("e-portal/postData", true)}
              />
            )}
            {visibleCards >= 6 && (
              <Card
                Cardname="Projects"
                CardDetails="Check the project status"
                CardButtonName="Check status"
                route="/projects"
                openInNewTab={true}
                OnCardClick={() => handleCardClick("/projects", true)}
              />
            )}
            {visibleCards >= 7 && (
              <Card
                Cardname="Hemanth"
                CardDetails="View and manage your account"
                CardButtonName="Go to account"
                route="/account"
                openInNewTab={false}
                OnCardClick={() => handleCardClick("/account", false)}
              />
            )}
          </main>

          {visibleCards < 7 && (
            <div className="mt-6 text-center">
              <a
                href="#"
                onClick={showMoreCards}
                className="ml-[800px] font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Read more
              </a>
            </div>
          )}
        </div>
      
      </div>
     
    </div>
   </>
  );
};

export default Main;
