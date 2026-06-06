import { EventDashboardSummary } from "../../components/Events/EventDashboardSummary";
import EventDashboardHeader from "../../components/Events/EventDashboardHeader";
import ContactDashboardSummary from "../../components/People/ContactDashboardSummary"

export default function Page() {
  return (
    //large outer box
    <div className="flex w-screen h-screen">
      {/*left side */}
      <div className="w-3/4 h-full p-2">
      {/* left side inner card */}
        <div className="flex flex-col bg-white rounded-md w-full h-full border-2 border-slate-300" >
          <div className="w-full">
            <EventDashboardHeader />
          </div>
          <div className="bg-slate-50 w-full h-full p-5">
            <EventDashboardSummary />
          </div>
        </div>
      </div>
      {/*right side*/}
      <div className="w-1/4 h-full p-2" >

        {/*right side card */}
        <div className="flex flex-col bg-white rounded-md w-full h-full border-2 border-slate-300">
          {/* top search section */}
          <div className="w-full p-3">
            <div className="flex justify-between mb-3">
              <div className="text-black mb-3">
                <span className="text-2xl font-semibold">Contacts </span>
              </div>
              <div>
                 <button className="p-2 rounded-xl bg-blue-700 hover:bg-blue-800 cursor-pointer active:bg-blue-900 text-sm text-white">+ Add Contact</button>
              </div>
            </div>
            <div>
              <input type="text" className="w-full rounded-xl ring px-2 py-1 bg-slate-50" placeholder="Search Contacts"/>
            </div>
          </div>
          {/*Bottom display of contacts */}
          <div className="h-full w-full bg-slate-50 p-5">
            <div className="py-2">
              <ContactDashboardSummary name="Nick Sinotte" birthday="September 27th, 1990" />
            </div>
            <div className="py-2">
              <ContactDashboardSummary name="Sam Sinotte" birthday="August 18th, 1993" />
            </div>
            <div className="py-2">
              <ContactDashboardSummary name="Kenna Sinotte" birthday="July 2nd, 2019" />
            </div>
          </div>
        </div>
      </div>
    </div>
    
);
}