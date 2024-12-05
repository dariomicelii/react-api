import { useState } from "react";

function App() {
  // const [addArcticles, setAddArcticle] = useState("Titolo articolo");
  // const [arcticles, setArcticles] = useState([
  //   "Tagli all'edilizia",
  //   "Omicidio su Marte",
  //   "Concerto Stranamore a Pisa",
  // ]);

  // const handleInputChange = (event) => {
  //   setAddArcticle(event.target.value);
  // };

  // const handleFormSubmit = (event) => {
  //   event.preventDefault();
  //   console.log("Aggiungi l'articolo: " + addArcticles);
  //   const newArcticles = [...arcticles, addArcticles];
  //   setArcticles(newArcticles);
  // };
  const [titleField, setTitleField] = useState("");
  const [articleList, setArticleList] = useState([]);

  // CREO OGGETTO PER GESTIRE I CAMPI MULTIPLI
  const [formData, setFormData] = useState({
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

    if (!titleField) return;

    const newArticle = {
      title: titleField,
    };

    setArticleList([...articleList, newArticle]);
    setTitleField("");
  };

  const handleTitleChange = (e) => {
    setTitleField(e.target.value);
  };

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
                  value={titleField}
                  onChange={handleTitleChange}
                  type="text"
                  className="form-control mb-3"
                  id="article-title"
                />

                <label className="form-label" htmlFor="article-title">
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

                <label className="form-label" htmlFor="article-title">
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
                      <h3>{article.title}</h3>
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

      {/* <div className="container">
        <h1>Form</h1>
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            value={addArcticles}
            onChange={handleInputChange}
          />
          <button>Invia</button>
        </form>
        <hr />
        <ul>
          {arcticles.map((arcticle) => (
            <li key={arcticle}>{arcticle}</li>
          ))}
        </ul>
      </div> */}
    </>
  );
}

export default App;
