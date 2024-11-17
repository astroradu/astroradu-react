import React, {useEffect, useState} from 'react';
import {Box} from "@mui/material";
import {useIsMobile} from '../utils/ScreenUtils';
import {Post} from '../types/post.types';
import EquipmentBox from "../components/post/EquipmentBox";
import ErrorContentMissing from "../components/errors/ErrorContentMissing";
import SpecificationsBox from "../components/post/SpecificationsBox";
import PostWrapper from "../components/post/PostWrapper";
import ImageOfTheDayOverlay from "../components/post/ImageOfTheDayOverlay";
import AstrobinBox from "../components/post/AstrobinBox";
import PostContent from "../components/post/PostContent";


const About: React.FC = () => {

    const isMobile = useIsMobile();
    const [pageData, setPageData] = useState<Post | null>(null);
    const [hasError, setHasError] = useState<boolean>(false);

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

    if (hasError) {
        return <ErrorContentMissing/>
    }

    if (!isMobile) {
        return <Box>

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
