import { useState } from 'react';
import Card from '../../../Helpers/Cards';
// import Posts from '../Posts/Posts';

const Main = () => {

  const cardData = [
    { Cardname: 'Account', CardDetails: 'View and manage your account.', CardButtonName: 'Go to account' },
    { Cardname: 'Tax', CardDetails: 'View Tax related Documents', CardButtonName: 'View Reports' },
    { Cardname: 'Attendance', CardDetails: 'View Your Attendance', CardButtonName: 'Check your Attendance' },
    { Cardname: 'Review', CardDetails: 'Review Your Records', CardButtonName: 'Check the Records' },
    { Cardname: 'Post', CardDetails: 'Check the recent posts', CardButtonName: 'See posts' },
    { Cardname: 'Projects', CardDetails: 'Check the project status', CardButtonName: 'Check status' },
    { Cardname: 'Hemanth', CardDetails: 'Check the recent posts', CardButtonName: 'See posts' },
    { Cardname: 'Projects', CardDetails: 'Check the project status', CardButtonName: 'Check status' },
  ];

  const [visibleCards, setVisibleCards] = useState(6); 

  const showMoreCards = () => {
    setVisibleCards(cardData.length);
  };

  return (
    <div>
        <div className="" style={{ position: 'absolute', left: '280px', top: '90px' }}>
      <p className="text-3xl font-serif">Welcome to the E-Portal Website</p>
      <div className="mr-3">
        <main className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cardData.slice(0, visibleCards).map((card, index) => (
              <Card
                key={index}
                Cardname={card.Cardname}
                CardDetails={card.CardDetails}
                CardButtonName={card.CardButtonName}

              />
            ))}
          </div>
          <div>
           
          </div>

          {visibleCards < cardData.length && (
            <div className="mt-6 text-center">
              <div onClick={showMoreCards}>
              <a href="#" className="ml-[800px] font-medium text-blue-600 dark:text-blue-500 hover:underline">Read more</a>
              </div>
            </div>
          )}
        </main>
      </div>
    </div >
    
   
    </div>
  );
};

export default Main;
