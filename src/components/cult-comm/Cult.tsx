
import PeopleCard from '../people_card/peoplecard';
import { CultDB } from '@/assets/culturaldata/CultDB';
import { Separator } from '@/components/ui/separator';

const Cult = () => {
  return (
    <div className="w-full flex flex-wrap items-center justify-center p-4">

      <div className="flex justify-center items-center flex-col w-full lg:w-[90%]">
        <h1 className="lg:text-5xl lg:mt-5 lg:mb-10 text-3xl mt-2 font-Casino">Cultural Committee</h1>
        <Separator className='py-0.5 bg-slate-300 w-full lg:w-[90vw]' />
      </div>

      <div className='mt-[2rem] people-card-row flex flex-wrap gap-4 lg:gap-[10rem] justify-center lg:flex-row flex-col'>
        {CultDB.map((person) => (
          <PeopleCard
            key={person.name}
            name={person.name}
            image={person.image}
            team={person.team}
            linkedin={person.linkedin}
            insta={person.insta}
          />
        ))}
      </div>
    </div>
  );
};

export default Cult;
