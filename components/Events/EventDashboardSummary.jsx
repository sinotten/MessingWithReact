import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Divider from '@mui/material/Divider'
import { CalendarToday } from '@mui/icons-material'

export function EventDashboardSummary(){
    return(
        <div>
            <Card sx={{ 
                minWidth: 300,
                maxWidth: 500
             }}>
                <CardContent>
                    <Box className="pb-2">
                        <div className="py-3">
                            <h2>Company Retreat</h2>
                        </div>
                        <div className="flex">
                            <div className="pr-2">
                                <CalendarToday />    
                            </div>    
                            <div>
                                <span>June 14, 2026</span>
                            </div>
                        </div>
                    </Box>
                    <Divider />
                    <Box>
                        <div className="flex w-full justify-between pt-2">
                            <div>
                                <span>Budget</span>
                            </div>
                            <div className="flex ">
                                <div>
                                    <span>$</span>
                                </div>
                                <div>
                                    <span>317.85</span>
                                </div>
                                <span className="px-0.5">/</span>
                                <div>
                                    <span>500.00</span>
                                </div>
                            </div>
                        </div>
                    </Box>
                </CardContent>
            </Card>
        </div>
    )
}