import React from "react";
import {Box, List, ListItem, Theme, Typography,} from "@mui/material";
import CaptionedImage from "../common/CaptionedImage";
import {SxProps} from "@mui/system/styleFunctionSx";
import {Post} from "../../types/post.types";

const PostContent: React.FC<{
    sx: SxProps<Theme>,
    data: Post | null,
    onImageClick?: (url: string) => void
}> = ({sx, data, onImageClick}) => {

    return <Box
        sx={sx}
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
            {data?.content.map((item, index) => {
                switch (item.type) {
                    case 'header':
                        return (
                            <ListItem
                                key={index + " " + item.type}
                                disablePadding>
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
                            <ListItem
                                key={index + " " + item.type}
                                disablePadding>
                                <Typography
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
                            <ListItem
                                key={index + " " + item.type}
                                disablePadding
                                      sx={{
                                          paddingY: '0.6rem'
                                      }}>
                                <CaptionedImage filename={item.filename ?? ""}
                                                caption={"Negative image of Sharpless 2-188 Planetary Nebula"}
                                                showEnlarge={true}
                                                onClick={(url) => {
                                                    if (onImageClick) {
                                                        onImageClick(url);
                                                    }
                                                }}
                                />

                            </ListItem>
                        );
                    default:
                        return null;
                }
            })}
        </List>
    </Box>
};

export default PostContent;



