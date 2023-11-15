import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import { getAllPosts } from '../../redux/postsRedux';
import PostCard from '../common/PostCard';

const Posts = () => {

    const posts = useSelector(getAllPosts);

    return (
        <>
            <section className="d-flex justify-content-between flex-wrap">
                <h1>All posts</h1>
                <Button href="/post/add" variant="outline-primary">Add Post</Button>
            </section>
            <section className="d-flex justify-content-between">
                {posts.map(card => <PostCard key={card.id} {...card} />)}
            </section>
        </>
    )
}

export default Posts;
