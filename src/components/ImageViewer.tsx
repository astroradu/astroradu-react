import React, {useRef, useState} from 'react';
import {AppBar, Box, IconButton, Toolbar, Zoom} from '@mui/material';
import {FullscreenExit} from "@mui/icons-material";
import ImageGallery from "react-image-gallery";

interface ImageViewerProps {
    images: { original: string; thumbnail: string }[];
    onClose: () => void;
}

const FullScreenImageViewer: React.FC<ImageViewerProps> = ({images, onClose}) => {

    const [zoomLevel, setZoomLevel] = useState<number>(0);
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
    const [clickPosition, setClickPosition] = useState<{ x: number; y: number } | null>(null);

    const containerRef = useRef<HTMLDivElement | null>(null);


    const zoomLevels = [1, 1.5, 2, 2.5, 3, 5];
    //
    // // Reset zoom
    // const handleResetZoom = () => {
    //     setZoomLevel(0);
    // };
    //
    // Zoom in function
    const handleZoomIn = () => {
        if (zoomLevel <= 5) setZoomLevel((oldValue) => oldValue + 1);
    };


    //
    // // Zoom out function
    // const handleZoomOut = () => {
    //     if (zoomLevel > 0) setZoomLevel((prev) => prev - 1);
    // };
    //
    // Handle image click to zoom in

    const handleZoomInByClick = (event: React.MouseEvent<HTMLImageElement>) => {
        if (zoomLevel === 0) {
            // const imageRect = (event.target as HTMLImageElement).getBoundingClientRect();
            // const clickX = event.clientX - imageRect.left;
            // const clickY = event.clientY - imageRect.top;
            // setClickPosition({x: clickX / imageRect.width, y: clickY / imageRect.height});

            setZoomLevel(2)
        } else {
            setZoomLevel(0)
        }
    };

    function calculateScrollPosition(
        imageWidth: number,
        imageHeight: number,
        clickXFactor: number,
        clickYFactor: number,
        zoomFactor: number
    ): { scrollX: number; scrollY: number } {
        const imageMiddleX = imageWidth / 2;
        const imageMiddleY = imageHeight / 2;

        const clickXPos = clickXFactor * imageWidth - imageMiddleX;
        const clickYPos = clickYFactor * imageHeight - imageMiddleY;


        // -234.5
        // -940.0
        console.log(`sx: ${clickXPos}`)
        return {
            scrollX: -940,
            scrollY: clickYPos * zoomFactor,
        };
    }

    // React.useEffect(() => {
    //     if (zoomLevel > 0 && clickPosition && containerRef.current) {
    //         const container = containerRef.current;
    //
    //         // const zoomFactor = 2;
    //         //
    //         // const imageWidth = container.clientWidth;
    //         // const imageHalf = imageWidth / 2;
    //         // const clickX = clickPosition.x
    //         //
    //         // const zoomedImageWidth = imageWidth * zoomFactor;
    //         // const zoomedImageHalf = zoomedImageWidth / 2;
    //         //
    //         //
    //         // const zoomedClickXTemp = clickX * 2;
    //         //
    //         // // Calculate the new scroll positions
    //         // const scrollX = clickPosition.x * (container.scrollWidth - container.clientWidth);
    //         // const scrollY = clickPosition.y * (container.scrollHeight - container.clientHeight);
    //         //
    //         let pair = calculateScrollPosition(container.clientWidth, container.clientHeight, clickPosition.x, clickPosition.y, 2)
    //
    //
    //         // Scroll to the calculated position
    //         container.scrollTo({
    //             left: pair.scrollX,
    //             top: pair.scrollY,
    //             behavior: 'auto',
    //         });
    //     }
    // }, [zoomLevel, clickPosition]);

    // const handleImageClick = () => {
    //     handleZoomInByClick();
    // };
    //
    // // // Update the current image based on carousel selection
    // const handleImageChange = (index: number) => {
    //     setCurrentImageIndex(index);
    //     handleResetZoom(); // Reset zoom when switching images
    // };

    return (
        <Box
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.9)',
                zIndex: 1000,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            {/* AppBar for the top buttons */}
            <AppBar position="fixed" sx={{top: 0, background: 'rgba(0, 0, 0, 0.7)'}}>
                <Toolbar>
                    {/*<IconButton color="inherit" onClick={handleResetZoom}>*/}
                    {/*    <Restore />*/}
                    {/*</IconButton>*/}
                    {/*<IconButton color="inherit" onClick={handleZoomIn}>*/}
                    {/*    <ZoomIn />*/}
                    {/*</IconButton>*/}
                    {/*<IconButton color="inherit" onClick={handleZoomOut}>*/}
                    {/*    <ZoomOut />*/}
                    {/*</IconButton>*/}
                    <IconButton color="inherit" onClick={onClose} edge="end" sx={{marginLeft: 'auto'}}>
                        <FullscreenExit/>
                    </IconButton>
                </Toolbar>
            </AppBar>

            {/* Image Display Area */}

            <Zoom in={zoomLevels[zoomLevel]>0}
                  style={{ transitionDelay: zoomLevels[zoomLevel]>0 ?
                          '500ms' : '0ms' }}>
                {
                    <Box
                        ref={containerRef}
                        onClick={handleZoomInByClick}
                        sx={{
                            width: '100%',
                            height: 'calc(100% - 120px)',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            // overflow: zoomLevel === 0 ? 'hidden' : 'auto',
                        }}
                    >
                        <img
                            src={images[currentImageIndex].original}
                            alt="Current View"
                            style={{
                                width: 'auto',
                                height: 'auto',
                            }}
                            // style={{
                            //     cursor: zoomLevel < 4 ? 'zoom-in' : 'default',
                            //     maxWidth: `${zoomLevels[zoomLevel] * 100}%`,
                            //     maxHeight: '100%',
                            //     objectFit: 'contain',
                            //     transition: 'transform 0.3s ease-in-out',
                            // }}
                        />
                    </Box>
                }
            </Zoom>

            {/*<Box*/}
            {/*    ref={containerRef}*/}
            {/*    onClick={handleZoomInByClick}*/}
            {/*    sx={{*/}
            {/*        width: '100%',*/}
            {/*        height: 'calc(100% - 120px)',*/}
            {/*        display: 'flex',*/}
            {/*        justifyContent: 'center',*/}
            {/*        alignItems: 'center',*/}
            {/*        overflow: zoomLevel === 0 ? 'hidden' : 'auto',*/}
            {/*    }}*/}
            {/*>*/}
            {/*    <img*/}
            {/*        src={images[currentImageIndex].original}*/}
            {/*        alt="Current View"*/}
            {/*        style={{*/}
            {/*            height: 'auto',*/}
            {/*            maxWidth: `${zoomLevels[zoomLevel] * 100}vw`,*/}
            {/*            maxHeight: `${zoomLevels[zoomLevel] * 100}vh`,*/}
            {/*        }}*/}
            {/*        // style={{*/}
            {/*        //     cursor: zoomLevel < 4 ? 'zoom-in' : 'default',*/}
            {/*        //     maxWidth: `${zoomLevels[zoomLevel] * 100}%`,*/}
            {/*        //     maxHeight: '100%',*/}
            {/*        //     objectFit: 'contain',*/}
            {/*        //     transition: 'transform 0.3s ease-in-out',*/}
            {/*        // }}*/}
            {/*    />*/}
            {/*</Box>*/}

            {/*/!* Image Carousel *!/*/}
            {/*<Box*/}
            {/*    sx={{*/}
            {/*        position: 'fixed',*/}
            {/*        bottom: 0,*/}
            {/*        width: '100%',*/}
            {/*        padding: '10px 0',*/}
            {/*        background: 'rgba(0, 0, 0, 0.8)',*/}
            {/*    }}*/}
            {/*>*/}
            {/*    <ImageGallery*/}
            {/*        items={images}*/}
            {/*        showThumbnails={true}*/}
            {/*        showPlayButton={false}*/}
            {/*        showFullscreenButton={false}*/}
            {/*        showNav={false}*/}
            {/*        onSlide={handleImageChange}*/}
            {/*        additionalClass="carousel"*/}
            {/*    />*/}
            {/*</Box>*/}
        </Box>
    );
};

export default FullScreenImageViewer;