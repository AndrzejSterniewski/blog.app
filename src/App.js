import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import SinglePost from './pages/SinglePost';
import PostAdd from './pages/PostAdd';
import PostEdit from './pages/PostEdit';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Header from './views/Header';
import Footer from './views/Footer';
import { Container } from 'react-bootstrap';
import Categories from './pages/Categories';
import CategoryPage from './pages/CategoryPage';

function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<SinglePost />} />
        <Route path="/post/add" element={<PostAdd />} />
        <Route path="/post/edit/:id" element={<PostEdit />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/category/:id" element={<CategoryPage />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
