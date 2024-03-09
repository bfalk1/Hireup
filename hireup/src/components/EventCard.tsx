interface Event {
    id: number;
    title: string;
    theme: string;
    description: string;
    shortDescription: string;
    startDate: Date; // Change to DateTime if you're using a specific date type
    endDate: Date;   // Change to DateTime if you're using a specific date type
    tags: string;
    companies: string;
    applicants?: Applicant[];
}

interface Applicant{
    id: number;
  eventId: number;

}


interface EventCardProps {
    event: Event;
}

import Link from "next/link";


const EventCard: React.FC<EventCardProps> = ({ event }) => {
    const eventId = 1

    return (
      <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800" id="defaultTab" data-tabs-toggle="#defaultTabContent" role="tablist">
          <li className="me-2">
            <button id="about-tab" data-tabs-target="#about" type="button" role="tab" aria-controls="about" aria-selected="true" className="inline-block p-4 text-blue-600 rounded-ss-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-blue-500">About</button>
          </li>
          <li className="me-2">
            <button id="services-tab" data-tabs-target="#services" type="button" role="tab" aria-controls="services" aria-selected="false" className="inline-block p-4 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300">Services</button>
          </li>
          <li className="me-2">
            <button id="statistics-tab" data-tabs-target="#statistics" type="button" role="tab" aria-controls="statistics" aria-selected="false" className="inline-block p-4 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300">Facts</button>
          </li>
        </ul>
        <div id="defaultTabContent">
          <div className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="about" role="tabpanel" aria-labelledby="about-tab">
            <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">{event.title}</h2>
            <p className="mb-3 text-gray-500 dark:text-gray-400">{event.description}</p>
            
            <Link href={`/Event/${eventId}`} className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700">
              Learn more
              <svg className=" w-2.5 h-2.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
              </svg>
            </Link>
          </div>
          <div className="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="services" role="tabpanel" aria-labelledby="services-tab">
            {/* Content for Services tab */}
          </div>
          <div className="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="statistics" role="tabpanel" aria-labelledby="statistics-tab">
            {/* Content for Statistics tab */}
          </div>
        </div>
      </div>
    );
  }
  
  export default EventCard;