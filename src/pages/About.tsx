import React, {useEffect, useState} from 'react';
import {Box, List, ListItem, Typography} from "@mui/material";
import {useIsMobile} from '../utils/ScreenUtils';
import CaptionedImage from "../components/CaptionedImage";
import { PortfolioEntry } from '../types/portfolioEntry.types';
import EquipmentBox from "../components/portfolio/EquipmentBox";
import ErrorContentMissing from "../components/common/ErrorContentMissing";


const About: React.FC = () => {

    const isMobile = useIsMobile();
    const [pageData, setPageData] = useState<PortfolioEntry | null>(null);
    const [hasError, setHasError] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${process.env.PUBLIC_URL}/data/portfolio/entries/portfolio_entry_1731666161.json`);
            const data = await response.json();
            setPageData(data);
            if(data == null){
                setHasError(true)
                console.error('Invalid page data file.');
            }
        };

        fetchData().then(() => {
        });
    }, []);

    if(hasError){
        return <ErrorContentMissing/>
    }

    if (!isMobile) {
        return <Box
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
                <Box
                    sx={{
                        width: '65%',
                        marginRight: '2rem'
                    }}
                >
                    <List
                        disablePadding
                          sx={{
                              '& > *': {
                                  marginBottom: '1.5rem',
                                  paddingLeft: '1rem'
                              }
                          }}
                    >
                        {pageData?.content.map((item, index) => {
                            switch (item.type) {
                                case 'header':
                                    return (
                                        <ListItem disablePadding>
                                            <Typography
                                                key={index}
                                                color="#C0B4A3"
                                                variant="h5"
                                                sx={{
                                                    fontWeight: 'bold',
                                                    marginBottom: '1rem'
                                                }}
                                            >
                                                {item.text}
                                            </Typography>
                                        </ListItem>
                                    );
                                case 'paragraph':
                                    return (
                                        <ListItem disablePadding>
                                            <Typography
                                                key={index}
                                                variant="body1"
                                                color="#C0B4A3"
                                                sx={{
                                                    lineHeight: 1.8
                                                }}
                                            >
                                                {item.text}
                                            </Typography>
                                        </ListItem>
                                    );
                                case 'image':
                                    return (
                                        <ListItem disablePadding
                                                  sx={{
                                                      paddingY: '0.6rem'
                                                  }}>
                                            <CaptionedImage filename={item.filename ?? ""}
                                                            caption={"Negative image of Sharpless 2-188 Planetary Nebula"}
                                                            showEnlarge={true}/>

                                        </ListItem>
                                    );
                                default:
                                    return null;
                            }
                        })}
                    </List>
                </Box>

                <Box
                    sx={{
                        width: '35%',
                        marginRight: '2rem'
                    }}
                >
                    <EquipmentBox equipment={pageData?.equipment || null}/>
                </Box>

            </Box>
        </Box>
    } else {
        return <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
                paddingX: '15%',
                boxSizing: 'border-box',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'space-between',
                }}
            >
                <Box
                    sx={{
                        width: '60%',
                        marginRight: '10px',
                    }}
                >
                    <List>
                        {Array.isArray(pageData) && pageData.map((item: any, index: number) => {
                            switch (item.type) {
                                case 'header':
                                    return (
                                        <ListItem>
                                            <Typography
                                                key={index}
                                                variant="h4"
                                                sx={{marginBottom: 2, fontWeight: 'bold'}}
                                            >
                                                {item.text}
                                            </Typography>
                                        </ListItem>
                                    );
                                case 'paragraph':
                                    return (
                                        <ListItem>
                                            <Typography
                                                key={index}
                                                variant="body1"
                                                sx={{marginBottom: 2}}
                                            >
                                                {item.text}
                                            </Typography>
                                        </ListItem>
                                    );
                                case 'image':
                                    return (
                                        <ListItem>
                                            <img
                                                src={`${process.env.PUBLIC_URL}/${item.filename}`}
                                                alt="Content"
                                                style={{width: '100%', height: 'auto'}}
                                            />
                                        </ListItem>
                                    );
                                default:
                                    return null;
                            }
                        })}
                    </List>
                </Box>
                <Box
                    sx={{
                        width: '40%',
                        height: 200,
                        backgroundColor: 'aquamarine'
                    }}
                >
                </Box>
            </Box>
        </Box>
    }
}


export default About;
