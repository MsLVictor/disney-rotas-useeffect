import { Box, CircularProgress } from "@mui/material";


export function Loading(){
    
    return (
        <Box sx={{ display: "flex", justifyContent: "center", padding: "2rem" }}>
            <CircularProgress />
        </Box>
    )
}
