import React from "react";
import { Separator } from "@/components/ui/separator";
import "./card.css"; // Import the CSS file for styling
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface EventCardProps {
  title: string;
  img: string;
  startDate: string;
  endDate?: string;
  registerUrl: string;
  description: string;
  rules: string[];
  regdate: string;
  organizers1?: string;
  organizers1Photo?: string;
  organizers2?: string;
  organizers2Photo?: string;
}

const EventCard: React.FC<EventCardProps> = ({
  title,
  img,
  startDate,
  endDate,
  registerUrl,
  description,
  rules,
  regdate,
  organizers1,
  organizers1Photo,
  organizers2,
  organizers2Photo,
}) => {
  // const [expanded, setExpanded] = useState(true);

  const handleRegisterClick = () => {
    window.location.href = registerUrl;
  };
  const handlDate = () => {
    if (endDate) {
      return `${startDate} - ${endDate}`;
    } else {
      return `On ${startDate}`;
    }
  };
  const handleOrganizers = () => {
    if (organizers1) {
      return (
        <>
        <div className="font-bold lg:text-xl text-sm"> Organizers</div>
              <div className="lg:w-full w-[80vw] m-[auto] flex lg:flex-row flex-col gap-5">
                <Card className="hover:shadow-lg hover:shadow-accent2">
                  <CardContent className="flex items-center gap-x-3 p-3 ">
                    <Avatar className="lg:w-20 lg:h-20">
                      <AvatarImage src={organizers1Photo} />
                    </Avatar>
                    <h1 className="lg:text-2xl">{organizers1}</h1>
                  </CardContent>
                </Card>
                <Card className=" hover:shadow-lg hover:shadow-accent2">
                  <CardContent className="flex items-center gap-x-3 p-3">
                    <Avatar className="lg:w-20 lg:h-20">
                      <AvatarImage src={organizers2Photo} />
                    </Avatar>
                    <h1 className="lg:text-2xl">{organizers2}</h1>
                  </CardContent>
                </Card>
              </div>
        </>
      )
    } else {
      return (<></>);
    }
  };
  const renderRulesList = () => {
    return (
      <ul className="list-disc ml-6">
        <ScrollArea className="lg:w-full w-[80vw] rounded-md border border-slate-700 lg:h-96 h-56 lg:text-xl p-4 ">
          {rules.map((rule) => (
            <div className="p-3">
              {rule}
              <Separator className="mt-4" />
            </div>
          ))}
        </ScrollArea>
      </ul>
    );
  };

  return (
    <article
      className={`event-card flex lg:flex-row gap-5 mb-20 lg:p-8 border-accent1 border-2 rounded-lg lg:w-[90%] transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-accent2 ${
         "lg:h-auto" 
      } event__card`}
    >
      <div className="image-container">
        <img
          src={img}
          alt={`Event: ${title}`}
          className="event-image lg:w-[16rem] rounded-md transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-accent1"
        />
      </div>
      <div className={`event-details-container w-[80%] h-auto`}>
        <header className="event-title text-3xl mb-3 font-bold font-Rialto">
          <h1 className="event-title">{title}</h1>
        </header>
        <div className="event-details">
          <Separator className=" bg-accent2" />
          <p className="event-dates lg:text-2xl mb-3">{handlDate()}</p>
          <p className="event-description text-justify lg:text-lg">
            {description}
          </p>

          <Dialog>
            <DialogTrigger>
              <Button variant="link" className="lg:mt-5 lg:text-xl lg:px-0 ">
                More
              </Button>
            </DialogTrigger>
            <DialogContent className="transition-transform transform shadow-accent1 lg:shadow-none lg:hover:scale-105 lg:hover:shadow-lg lg:hover:shadow-accent1 w-max">
              {handleOrganizers()}
              <div className="expanded-content mt-4 lg:text-lg text-sm text-justify">
                <div className=" font-bold lg:text-xl text-sm pb-2"> Rules</div>
                <p>{renderRulesList()}</p>
                <div className=" font-bold lg:text-xl text-sm lg:mt-2 mt-5">
                  {" "}
                  Registration date
                </div>
                <p>{regdate}</p>
              </div>
            </DialogContent>
          </Dialog>

          <div className="flex flex-row justify-end mt-[2vh] mb-[1vh]">
            <Button
              className="register-button lg:px-10 lg:py-7 lg:text-xl hover:shadow-md hover:shadow-accent2"
              onClick={handleRegisterClick}
              variant="ghost1"
            >
              Register
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default EventCard;
