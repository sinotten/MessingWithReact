import { Box, TextField } from "@mui/material";

export default function EventDashboardHeader(){
    return(
        <div className="bg-white p-3 rounded-t-md">
          <div className="mb-3 text-black">
            <span className="text-3xl">Available Events</span>
          </div>
          <div className="bg-gray-50 w-full h-fit rounded-sm">
            <TextField sx={{ width: "100%" }} label="Search" variant="standard"/>
          </div>
        </div>
    );
}