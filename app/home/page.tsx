import { Container, Box, TextField } from "@mui/material";
import { EventDashboardSummary } from "../../components/Events/EventDashboardSummary";
import EventDashboardHeader from "../../components/Events/EventDashboardHeader";

export default function Page() {
  return (
    //large outer box
    <div className="flex w-screen h-screen">
      {/*left side */}
      <div className="w-3/4 h-full p-2">
      {/* left side inner card */}
        <div className="flex flex-col bg-white rounded-md w-full h-full" >
          <div className="w-full">
            <EventDashboardHeader />
          </div>
          <div className="bg-slate-100 w-full h-full p-5">
            <EventDashboardSummary />
          </div>
        </div>
      </div>
      {/*right side*/}
      <div className="w-1/4 h-full p-2" >

        {/*right side inner card */}
        <div className="bg-white rounded-md w-full h-full">

        </div>
      </div>
    </div>
    
);
}