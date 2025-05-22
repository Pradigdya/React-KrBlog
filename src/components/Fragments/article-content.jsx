const Main = () => {
  return (
    <main class="max-w-4xl mx-auto px-4 py-8">
      <h2 class="text-xl font-semibold mb-4">Artikel Terbaru</h2>

      <article class="bg-white shadow-sm rounded-lg p-6 mb-6 hover:shadow-md transition">
        <h3 class="text-lg font-bold text-blue-600 hover:underline">
          <a href="#">Judul Artikel</a>
        </h3>
        <p class="text-sm text-gray-500 mb-2">Tanggal Artikel</p>
        <p class="text-gray-700">Ringkasan artikel akan ditampilkan di sini. Gantilah teks ini dengan konten yang sesuai.</p>
      </article>
    </main>
  );
};

export default Main;
