import EventCard from "~/components/EventCard";
import { api } from "~/utils/api";
import EventForm from "./Create-Event";
import { useRouter } from "next/navigation"


export default function Main() {
    const router = useRouter()
    
    const eventsQuery = api.event.getEvents.useQuery(undefined,{
        onSuccess: (data)=>{
            console.log("got events")
        }, onError:(error)=>{
            console.log("error getting events")
        }
    });

    
    const events = eventsQuery.data; // Assuming events is an array of event objects
    let eventCards=null

    if (events){
        eventCards = events.map((event, index) => (
            <div className="mx-40 my-5" key={index}>
                <EventCard event={event} />
            </div>
        ));
    }
    
    const handleCreateEvent = () =>{
        router.push('/Create-Event')
    }

    return (
        <div className="">
            <button
                onClick={handleCreateEvent}
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            
            >
                Create Event
            </button>
            {events &&
                <div className="flex flex-wrap gap-4 mt-12">
                    {eventCards}
                </div>
            }
            {!events && <div>Loading ...</div>

            }
        </div>
        
    );
}

  