
import Container from '../components/common/Container';
import PostCard from '../components/common/PostCard';
import Row from 'react-bootstrap/Row';
import { useSelector } from 'react-redux';
import { getPostsCategory } from '../redux/postsRedux';

const CategoryPage = (props) => {

    const singleCategory = useSelector(getPostsCategory);
    
    return (
        <>
            <h1>Category: {props.categories}</h1>
            <Container>
                <Row>
                    {singleCategory.map(card => <PostCard key={card.id} {...card} />)}
                </Row>
            </Container>
        </>
    )
}

export default CategoryPage;