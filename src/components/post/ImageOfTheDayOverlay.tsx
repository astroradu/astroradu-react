import React from "react";
import {Box, Typography,} from "@mui/material";

const ImageOfTheDayOverlay: React.FC<{text: string}> = ({text}) => {

    return <Box
        sx={{
            width: '100%',
            background: 'linear-gradient(#F3BB46, #F1AD1F)',
            opacity: 0.82,
            paddingY: '20px'
        }}
    >
        <Typography
            color="#FFFFFF"
            variant="h6"
            align="center"
            sx={{
                fontWeight: 'bold',
                letterSpacing: '-1px',
            }}
        >
            {text}
        </Typography>
    </Box>
};

export default ImageOfTheDayOverlay;



