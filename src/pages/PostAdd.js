import AddPostForm from "../components/features/AddPostForm";

import styles from './PostAdd.module.scss';

const PostAdd = () => {
    return (
        <div className={styles.container}>
        <h1>Add post</h1>
        <AddPostForm />
        </div>
    )
}

export default PostAdd;