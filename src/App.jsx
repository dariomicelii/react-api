import { useState, useEffect } from "react";

function App() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = () => {
    fetch("http://localhost:3000/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // CREO OGGETTO PER GESTIRE I CAMPI MULTIPLI
  // const [formData, setFormData] = useState({
  //   title: posts.title,
  //   image: posts.image,
  //   content: posts.content,
  //   category: posts.category,
  // });

  // CREO UNA FUNZIONE UNICA PER GESTIRE L'EVENTO ONCHANGE DEI CAMPI
  // function handleFormData(e) {
  //   setFormData((formData) => ({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   }));
  // }

  // const handleInsertArticleSubmit = (e) => {
  //   e.preventDefault();

  //   if (!formData) return;

  //   const newArticle = {
  //     title: "",
  //     image: "https://static.spin.com/files/2020/12/SC13-1608419365.jpg",
  //     content: "",
  //     category: "",
  //   };

  //   setArticleList([...posts, newArticle]);
  // };

  // const handleTitleChange = (e) => {
  //   setTitleField(e.target.value);
  // };

  const deletePost = (deleteId) => {
    const newPostList = posts.filter((post, id) => id !== deleteId);

    setPosts(newPostList);
  };

  return (
    <>
      <div className="container">
        {/* INSERT ARTICLE POST SECTION */}
        <h1>Rolling Stones Magazine</h1>
        {/* LIST ARTICLE SECTION */}
        <section className="py-4">
          <h2>Post list</h2>
          <div className="row row-cols-3 g-3">
            {posts.length ? (
              posts.map((post, id) => (
                <div key={id} className="col">
                  <div className="card">
                    <button
                      onClick={() => deletePost(id)}
                      type="button"
                      className="btn-close"
                    ></button>
                    <div className="card-body">
                      <h3>{post.title}</h3>
                      <img className="img-fluid" src={post.image} alt="" />
                      <p>{post.content}</p>
                      <hr />
                      <p>{post.category}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-12">
                <h3>Nessun articolo disponibile</h3>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
