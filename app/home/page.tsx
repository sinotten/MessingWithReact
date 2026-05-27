import { Container, Box } from "@mui/material";
import { EventDashboardSummary } from "../../components/Events/EventDashboardSummary";

export default function Page() {
  return (
    <div className="pt-5">
      <Container maxWidth="xl">
        <Box sx={{ bgcolor: "white", padding: '10px' }}>
          <EventDashboardSummary />
        </Box>
      </Container>
    </div>
    
);
}