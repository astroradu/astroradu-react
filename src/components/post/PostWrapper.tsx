import React from "react";
import {Box} from "@mui/material";
import {Post} from "../../types/post.types";
import PostTitle from "./PostTitle";

const PostWrapper: React.FC<{
    post: Post | null,
}> = ({post}) => {

    if (post?.wrapper == null) {
        return (<Box/>);
    } else {
        return (
            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: 2.2,
                    height: 'auto',
                    cursor: 'pointer'
                }}
            >
                <img
                    src={`${process.env.PUBLIC_URL}/data/images/${post.wrapper}`}
                    alt="High Resolution"
                    style={{
                        position: 'relative',
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center',
                        overflow: 'hidden'
                    }}
                />

                <PostTitle post={post}/>
            </Box>
        );
    }
};

export default PostWrapper;



