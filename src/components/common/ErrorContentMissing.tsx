import React from "react";
import {Box, Typography} from "@mui/material";
import {Equipment} from "../../types/equipment.types";

const ErrorContentMissing: React.FC = () => {
    return (
        <Box
            sx={{
                width: '100%',
                height: '100%',
                paddingTop: '10rem'
            }}
        >
            <Typography
                color="#FFA133"
                variant="h5"
                sx={{marginBottom: 2}}
            >
                We couldn't find any content here. xD
            </Typography>
        </Box>
    );
};

export default ErrorContentMissing;