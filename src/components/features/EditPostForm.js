import { useDispatch, useSelector } from 'react-redux';
import { editPost } from '../../redux/postsRedux';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router';
import { getPostById } from '../../redux/postsRedux';
import PostForm from './PostForm';

const EditPostForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = post => {
        dispatch(editPost({ ...post, id }));
        navigate('/')
    };

    const { id } = useParams();

    const post = useSelector(state => getPostById(state, id));

    return (
        <PostForm action={handleSubmit} actionText="Edit post" title={post.title} author={post.author} published={post.published} description={post.description} content={post.content} />
    )
};

export default EditPostForm;