import { Box, TextField } from "@mui/material";

export default function EventDashboardHeader(){
  return(
        <div className="bg-white p-3 rounded-t-md">
          <div className="flex justify-between items-center">
            <div className="mb-2 text-black">
              <span className="text-3xl font-semibold">Available Events</span>
            </div>
            <div className="h-full content-center mb-3 text-white">
              <button className="p-3 rounded-xl bg-blue-700 hover:bg-blue-800 cursor-pointer font-semibold active:bg-blue-900">+ Add Event</button>
            </div>
          </div>
          <div className="bg-gray-50 w-full h-fit rounded-xl border">
            <input 
              style={{ width: "100%", borderRadius: 10 }} 
              className="py-1 px-3" 
              label="Search"      
              placeholder="Search Events..."        
              />
          </div>
        </div>
    );
}