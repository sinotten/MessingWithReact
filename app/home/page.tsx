import { EventDashboardSummary } from "../../components/Events/EventDashboardSummary";
import EventDashboardHeader from "../../components/Events/EventDashboardHeader";

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
            <div className="text-black mb-3">
              <span className="text-2xl font-semibold">Contacts </span>
            </div>
            <div>
              <input type="text" className="w-full rounded-xl ring px-2 py-1 bg-slate-50" placeholder="Search Contacts"/>
            </div>
          </div>
          {/*Bottom display of contacts */}
          <div className="h-full w-full bg-slate-50 p-5">

            {/* contact card */}
            <div className="border border-slate-400 border-solid w-full h-fit bg-white rounded-sm shadow-md">
              <div className="flex">
                {/*profile image */}
                <div className="py-2 px-4 w-fit h-full">
                  <div className="w-10 h-10 rounded-full border border-black">
                    {/*profile image here */}
                  </div>
                </div>

                {/*information section*/}
                <div className="h-full w-full mt-auto mb-auto">
                  <div className="w-fit h-fit">
                    <div>
                      <span>test mctesterson</span>
                    </div>
                    <div>
                      <span>September 27th, 1990</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
);
}