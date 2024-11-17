import {Box, Typography} from "@mui/material";
import React, {useState} from "react";
import LazyImage from "./LazyImage";

const CaptionedImage: React.FC<{
    filename: string,
    caption: string
    showEnlarge: boolean,
}> = ({filename, caption, showEnlarge}) => {

    return (
        <Box
            sx={{
                cursor: 'pointer'
            }}>
            <LazyImage filename={filename}/>

            <Box
                display="flex"
                justifyContent="space-between"
                width="100%">

                <Typography
                    variant="body2"
                    color="#C0B4A3"
                    sx={{
                        fontStyle: 'normal'
                    }}
                >
                    {caption}
                </Typography>

                {showEnlarge && (
                    <Typography
                        variant="body2"
                        color="#C0B4A3"
                        sx={{
                            fontStyle: 'italic'
                        }}
                    >
                        Click to enlarge
                    </Typography>
                )}

            </Box>

        </Box>
    )
}

export default CaptionedImage;