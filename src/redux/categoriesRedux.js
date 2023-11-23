// selectors
export const getAllCategories = state => state.categories;
export const getPostsByCategory = ({ posts }, id) => posts.filter(post => post.category === id);

const categoriesReducer = (statePart = [], action) => {
    switch (action.type) {
        default:
            return statePart;
    };
};

export default categoriesReducer;