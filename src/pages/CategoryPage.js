
import Container from "../components/common/Container";

const CategoryPage = (props) => {
    return (
        <Container>
            <h1>Category: {props.categories}</h1>
        </Container>
    )
}

export default CategoryPage;