import {Box, Typography} from "@mui/material";
import {formatTimestamp} from "../../utils/Utils";
import React from "react";
import {Post} from "../../types/post.types";

const PostTitle: React.FC<{
    post: Post | null,
}> = ({post}) => {

    if (post == null) {
        return <Box/>
    }

    return (
        <Box
            sx={{
                position: 'absolute',
                width: '100%',
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0,0,0,0.4)',
                paddingY: '30px',
                justifyContent: 'center',
                paddingX: '15%',
            }}
        >
            <Typography
                color="#FFA133"
                variant="h5"
                sx={{
                    marginBottom: '4px',
                    fontWeight: 'bold',
                    letterSpacing: '-1px',
                    paddingLeft: '2rem'
                }}
            >
                {post.title}
            </Typography>

            <Typography
                color="#E3D3BD"
                variant="body1"
                sx={{
                    letterSpacing: '-1px',
                    paddingLeft: '2rem'
                }}
            >
                {formatTimestamp(post.uploadDate)}
            </Typography>
        </Box>
    );
};

export default PostTitle;






