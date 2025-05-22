const Main = ({ image, title, date, description }) => {
  return (
    <article className="bg-white shadow-sm rounded-lg overflow-hidden hover:shadow-md transition">
      <img src={image} alt="Gambar Artikel" class="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold text-blue-600 hover:underline">
          <a href="#">{title}</a>
        </h3>
        <p className="text-sm text-gray-500 mb-2">{date}</p>
        <p className="text-gray-700 text-sm">{description}</p>
      </div>
    </article>
  );
};

export default Main;
