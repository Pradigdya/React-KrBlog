import Main from "../components/Fragments/article-content";
import AuthLayouts from "../components/Layouts/authlayouts";
import articleslist from "../components/Fragments/articlelist";
const HomePage = () => {
  return (
    <AuthLayouts>
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articleslist.map((article) => (
            <Main key={article.id} title={article.title} date={article.date} description={article.description} image={article.image} />
          ))}
        </div>
      </main>
    </AuthLayouts>
  );
};

export default HomePage;
