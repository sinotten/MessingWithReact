import { Box, TextField } from "@mui/material";

export default function EventDashboardHeader(){
  return(
        <div className="bg-white p-3 rounded-t-md">
          <div className="mb-3 text-black">
            <span className="text-3xl">Available Events</span>
          </div>
          <div className="bg-gray-50 w-full h-fit rounded-xl border">
            <input 
              style={{ width: "100%", borderRadius: 10 }} 
              className="py-1 px-3" 
              label="Search"              
              />
          </div>
        </div>
    );
}