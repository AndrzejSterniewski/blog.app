import Container from "../components/common/Container";
import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector } from "react-redux";
import { getAllCategories } from "../redux/categoriesRedux";
import { Link, Navigate } from "react-router-dom";

const Categories = () => {

    const categories = useSelector(getAllCategories);

    if (!categories) return <Navigate to="/" />
    return (
        <Container>
            <h1>Categories</h1>
            <ListGroup as="ul" style={{ width: '75%' }} className="d-flex m-auto">
                {categories.map((category) => (
                    <ListGroup.Item key={category} id={category} className='fs-5'>
                        <Link to={`/category/${category}`}>{category}</Link>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </Container>
    )
}

export default Categories;