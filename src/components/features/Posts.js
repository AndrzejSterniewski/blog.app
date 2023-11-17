import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import { getAllPosts } from '../../redux/postsRedux';
import PostCard from '../common/PostCard';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

const Posts = () => {

    const posts = useSelector(getAllPosts);

    return (
        <>
            <section className="d-flex align-items-center justify-content-between flex-wrap">
                <h1>All posts</h1>
                <Button as={Link} to="/post/add" variant="outline-primary">Add Post</Button>
            </section>
            <Row>
                {posts.map(card => <PostCard key={card.id} {...card} />)}
            </Row>
        </>
    )
}

export default Posts;
