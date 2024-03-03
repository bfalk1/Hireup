import EventCard from "~/components/EventCard";


export default function Main() {
    const eventCards = Array.from({ length: 10 }, (_, index) => <div className="mx-40 my-5">
    <EventCard key={index}/>
</div>);
    return (
        <div className="flex flex-wrap gap-4 mt-12">
      {eventCards}
    </div>
        
        
    );
  }
  