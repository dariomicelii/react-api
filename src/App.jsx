import { useState, useEffect } from "react";

function App() {
  const [articleList, setArticleList] = useState([]);

  const fetchArticles = () => {
    fetch("https://localhost:3000/posts")
      .then((res) => res.json())
      .then((data) => {
        setArticleList(data);
      });
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  // CREO OGGETTO PER GESTIRE I CAMPI MULTIPLI
  const [formData, setFormData] = useState({
    title: "",
    image: "https://static.spin.com/files/2020/12/SC13-1608419365.jpg",
    content: "",
    category: "",
  });

  // CREO UNA FUNZIONE UNICA PER GESTIRE L'EVENTO ONCHANGE DEI CAMPI
  function handleFormData(e) {
    setFormData((formData) => ({
      ...formData,
      [e.target.name]: e.target.value,
    }));
  }

  const handleInsertArticleSubmit = (e) => {
    e.preventDefault();

    if (!formData) return;

    const newArticle = {
      title: "",
      image: "https://static.spin.com/files/2020/12/SC13-1608419365.jpg",
      content: "",
      category: "",
    };

    setArticleList([...articleList, newArticle]);
  };

  // const handleTitleChange = (e) => {
  //   setTitleField(e.target.value);
  // };

  const deleteArticle = (deleteIndex) => {
    const newArticleList = articleList.filter(
      (article, articleIndex) => articleIndex !== deleteIndex
    );

    setArticleList(newArticleList);
  };

  return (
    <>
      <div className="container">
        {/* INSERT ARTICLE POST SECTION */}
        <section className="py-4">
          <form onSubmit={handleInsertArticleSubmit}>
            <h2>Insert Form</h2>
            <div className="row">
              <div className="col-3">
                <label className="form-label" htmlFor="article-title">
                  Titolo
                </label>
                <input
                  value={formData.title}
                  name="title"
                  onChange={handleFormData}
                  type="text"
                  className="form-control mb-3"
                  id="article-title"
                />

                <label className="form-label" htmlFor="article-image">
                  Immagine
                </label>
                <input
                  value={formData.image}
                  name="image"
                  onChange={handleFormData}
                  type="image"
                  className="form-control mb-3"
                  id="article-image"
                />

                <label className="form-label" htmlFor="article-content">
                  Contenuto
                </label>
                <input
                  value={formData.content}
                  name="content"
                  onChange={handleFormData}
                  type="text"
                  className="form-control mb-3"
                  id="article-content"
                />

                <label className="form-label" htmlFor="article-title">
                  Categoria
                </label>
                <input
                  value={formData.category}
                  name="category"
                  onChange={handleFormData}
                  type="text"
                  className="form-control mb-3"
                  id="article-content"
                />
              </div>
              <div className="col-12">
                <button className="btn btn-primary">Crea articolo</button>
              </div>
            </div>
          </form>
        </section>
        <hr />
        {/* LIST ARTICLE SECTION */}
        <section className="py-4">
          <h2>Post list</h2>
          <div className="row row-cols-3 g-3">
            {articleList.length ? (
              articleList.map((article, index) => (
                <div key={index} className="col">
                  <div className="card">
                    <button
                      onClick={() => deleteArticle(index)}
                      type="button"
                      className="btn-close"
                    ></button>
                    <div className="card-body">
                      <h3>{formData.title}</h3>
                      <img className="img-fluid" src={formData.image} alt="" />
                      <p>{formData.content}</p>
                      <hr />
                      <p>{formData.category}</p>
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
