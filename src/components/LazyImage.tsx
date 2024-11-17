import {Box} from "@mui/material";
import React, {useState} from "react";

const LazyImage: React.FC<{ filename: string }> = ({filename}) => {

    const [isLargeImageLoaded, setIsLargeImageLoaded] = useState(false);

    return (<Box
        sx={{
            position: 'relative',
            overflow: 'hidden'
        }}
    >
        <img
            src={`${process.env.PUBLIC_URL}/${filename}_small.jpg`}
            alt="Placeholder"
            style={{
                width: '100%',
                height: 'auto',
                filter: isLargeImageLoaded ? 'blur(0px)' : 'blur(10px)',
                transition: 'filter 0.5s ease',
                borderRadius: '6px'
            }}
        />

        <img
            src={`${process.env.PUBLIC_URL}/${filename}_large.jpg`}
            alt="High Resolution"
            style={{
                position: 'absolute',
                width: '100%',
                height: 'auto',
                opacity: isLargeImageLoaded ? 1 : 0,
                transition: 'opacity 0.5s ease',
                borderRadius: '6px'
            }}
            onLoad={() => setIsLargeImageLoaded(true)}
        />
    </Box>)
}

export default LazyImage;