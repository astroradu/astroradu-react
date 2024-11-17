import React from "react";
import {Box, Typography, Link} from "@mui/material";
import {PostAstrobinInfo} from "../../types/postAstrobinInfo.types";

const AstrobinBox: React.FC<{
    astrobinContent: PostAstrobinInfo | null,
}> = ({astrobinContent}) => {

    if (astrobinContent == null) {
        return <Box/>
    }

    return (
        <Box
            sx={{
                width: '100%',
                height: 'auto',
                backgroundColor: '#171717',
                borderRadius: '8px',
                border: '1px solid #222222',
                padding: '24px',
                marginBottom: '12px',
            }}
        >

            <Typography
                color="#FFA133"
                variant="body1"
                sx={{marginBottom: 2}}
            >
                Astrobin
            </Typography>

            <Box
                sx={{
                    width: '100%',
                    height: 'auto',
                    display: 'flex',
                    alignItems: 'start',
                    justifyContent: 'start'
                }}
            >
                <img
                    alt="Placeholder"
                    style={{
                        width: 18,
                        height: 18,
                        marginRight: 5,
                        marginTop: '4px'
                    }}
                    src={`${process.env.PUBLIC_URL}/icons/Astrobin.svg`}
                />

                <Link
                    variant="body1"
                    color="#C0B4A3"
                    sx={{
                        marginLeft: '0.6rem',
                        marginTop: '2px',
                        width: '100%',
                        height: 'auto'
                    }}
                    href={astrobinContent.astrobinUrl}
                    underline="always"
                >
                    {astrobinContent.astrobinTitle}
                </Link>
            </Box>
        </Box>
    );
};

export default AstrobinBox;



