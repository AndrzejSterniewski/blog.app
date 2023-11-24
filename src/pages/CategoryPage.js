import PostCard from '../components/common/PostCard';
import Row from 'react-bootstrap/Row';
import { useSelector } from 'react-redux';
import { getPostsByCategory } from '../redux/categoriesRedux';
import { useParams } from 'react-router';
import { Navigate } from 'react-router-dom';

const CategoryPage = () => {

    const { id } = useParams();

    const singleCategoryPosts = useSelector(state => getPostsByCategory(state, id));

    if (!singleCategoryPosts.length) return <Navigate to='/' />;
    return (
        <>
            <h1>Category: {id}</h1>
            <Row>
                {singleCategoryPosts.map(card => <PostCard key={id} {...card} />)}
            </Row>
            {singleCategoryPosts.length === 0 && (
                <p>No posts in this category...</p>
            )}
        </>
    )
}

export default CategoryPage;