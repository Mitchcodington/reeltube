import { Typography,  Stack } from "@mui/material";

const Footer = () => (
    <Stack  textAlign ="center" p={2} sx={{ color:  "black", background: '#eaeaea', top: 0,  }}>
         <Typography variant="body1" sx={{ fontSize:14  }} >
         © 2023 Project By Mitchell Amewieye
        </Typography>

    </Stack>
  )

export default Footer