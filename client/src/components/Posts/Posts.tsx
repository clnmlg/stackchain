// @ts-nocheck
import React from 'react'
import { Grid, CircularProgress } from '@material-ui/core'
import { useSelector } from 'react-redux'
import Post from './Post/Post.jsx'
import styled from './styles'

interface IPost {
    posts: any
}

const Posts = ({ setCurrentId }) => {
    const posts = useSelector<IPost>((state) => state.posts)
    const classes = styled()
    return !posts.length ? (
        <CircularProgress />
    ) : (
        <Grid
            className={classes.container}
            container
            alignItems="stretch"
            spacing={3}
        >
            {posts.map((post) => (
                <Grid key={post._id} item xs={12} sm={6}>
                    <Post post={post} setCurrentId={setCurrentId} />
                </Grid>
            ))}
        </Grid>
    )
}

export default Posts
