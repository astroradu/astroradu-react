import React, {useEffect, useState} from 'react';
import {Box, Button, Fade, Modal, Typography} from "@mui/material";
import {useIsMobile} from '../utils/ScreenUtils';
import {Post} from '../types/post.types';
import EquipmentBox from "../components/post/EquipmentBox";
import ErrorContentMissing from "../components/errors/ErrorContentMissing";
import SpecificationsBox from "../components/post/SpecificationsBox";
import PostWrapper from "../components/post/PostWrapper";
import ImageOfTheDayOverlay from "../components/post/ImageOfTheDayOverlay";
import AstrobinBox from "../components/post/AstrobinBox";
import PostContent from "../components/post/PostContent";
import FullScreenImageViewer from "../components/ImageViewer";
// import FullScreenImageViewer from "../components/ImageViewer";
// import Lightbox from 'react-image-lightbox';


const About: React.FC = () => {

    const isMobile = useIsMobile();
    const [pageData, setPageData] = useState<Post | null>(null);
    const [hasError, setHasError] = useState<boolean>(false);
    const [viewerOpen, setViewerOpen] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${process.env.PUBLIC_URL}/data/portfolio/entries/portfolio_entry_1731666161.json`);
            const data = await response.json();
            setPageData(data);
            if (data == null) {
                setHasError(true)
                console.error('Invalid page data file.');
            }
        };

        fetchData().then(() => {
        });
    }, []);

    const images = [
        {
            original: `${process.env.PUBLIC_URL}/data/images/sh2_188/sh2_188_main.jpg`,
            thumbnail: `${process.env.PUBLIC_URL}/data/images/sh2_188/sh2_188_main.jpg`
        },
        {
            original: `${process.env.PUBLIC_URL}/data/images/sh2_188/sh2_188_main.jpg`,
            thumbnail: `${process.env.PUBLIC_URL}/data/images/sh2_188/sh2_188_main.jpg`
        },
        {
            original: `${process.env.PUBLIC_URL}/data/images/sh2_188/sh2_188_main.jpg`,
            thumbnail: `${process.env.PUBLIC_URL}/data/images/sh2_188/sh2_188_main.jpg`
        },
    ];

    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    if (hasError) {
        return <ErrorContentMissing/>
    }

    if (!isMobile) {
        return <Box>

            {/* Full-screen overlay with fade animation */}

            {/*{viewerOpen && (*/}
            {/*    <Lightbox*/}
            {/*        mainSrc={images[0]}*/}
            {/*        nextSrc={images[(0 + 1) % images.length]}*/}
            {/*        prevSrc={images[(0 + images.length - 1) % images.length]}*/}
            {/*        onCloseRequest={() => setOpen(false)}*/}
            {/*    />*/}
            {/*)}*/}

            {/*<Modal*/}
            {/*    open={viewerOpen}*/}
            {/*    onClose={handleClose}*/}
            {/*    closeAfterTransition*/}
            {/*    aria-labelledby="parent-modal-title"*/}
            {/*    aria-describedby="parent-modal-description"*/}
            {/*>*/}
            {/*    <Fade in={viewerOpen}>*/}
            {/*        <div>*/}
            {/*            <FullScreenImageViewer*/}
            {/*                images={images}*/}
            {/*                onClose={() => setViewerOpen(false)}*/}
            {/*            />*/}
            {/*        </div>*/}
            {/*    </Fade>*/}
            {/*</Modal>*/}

            {pageData?.astrobin?.astrobinIotd != null &&
                <ImageOfTheDayOverlay text={pageData?.astrobin?.astrobinIotd ?? ""}/>}

            <PostWrapper
                post={pageData || null}
            />

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    width: '100%',
                    paddingX: '15%',
                    boxSizing: 'border-box',
                    backgroundColor: '#191919'
                }}
            >

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginTop: '4rem'
                    }}
                >
                    <PostContent
                        sx={{
                            width: '65%',
                            marginRight: '2rem'
                        }}
                        data={pageData}
                        onImageClick={(url) => {
                            setViewerOpen(true)
                        }}
                    />

                    <Box
                        sx={{
                            width: '35%',
                            marginRight: '2rem'
                        }}
                    >
                        <SpecificationsBox specs={pageData?.specs || null}/>

                        <AstrobinBox astrobinContent={pageData?.astrobin || null}/>

                        <EquipmentBox equipment={pageData?.equipment || null}/>

                    </Box>

                </Box>
            </Box>

        </Box>


    } else {
        return <Box/>
    }
}

export default About;
