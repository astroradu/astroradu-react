import { useMediaQuery } from '@mui/material';

export const useIsMobile = () => {
    return useMediaQuery("(max-aspect-ratio: 3/4)");
};