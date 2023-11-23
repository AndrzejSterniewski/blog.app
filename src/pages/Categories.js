import Container from "../components/common/Container";
import ListGroup from 'react-bootstrap/ListGroup';
import { ListGroupItem } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getAllPosts, getCategories } from "../redux/postsRedux";
import PostCard from "../components/common/PostCard";
import { Link } from "react-router-dom";

const Categories = () => {

    const posts = useSelector(getCategories);

    console.log(posts.categories);

    return (
        <Container>
            <h1>Categories</h1>
            <ListGroup as="ul" style={{ width: '75%' }} className="d-flex m-auto">
                {/* <ListGroup.Item as={Link} variant="outline-info">
                    Cras justo odio
                </ListGroup.Item>
                <ListGroup.Item as={Link}>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item as={Link}>
                    Morbi leo risus
                </ListGroup.Item>
                <ListGroup.Item as={Link}>Porta ac consectetur ac</ListGroup.Item> */}
                {posts.map(post => <ListGroup.Item as={Link} key={post.categories} {...posts}> {post.categories}</ListGroup.Item>)}
            </ListGroup>
            {/* <Button as={Link} to={"/post/edit/" + id} variant="outline-info" className="m-2">Edit</Button> */}
        </Container>


        // {/* <Row>
        //                 {posts.map(card => <PostCard key={card.id} {...card} />)}

        //             </Row> */}
    )
}

export default Categories;