function About() {
  const members = [
    { id: 1, name: "Charles Lin", nim: "241130269" },
    { id: 2, name: "Stanley Sun", nim: "241130212" },
    { id: 3, name: "Leon yaputra", nim: "241130251 " },
    { id: 4, name: "Leonardo Muliangga", nim: "241130726 " },
  ];

  return (
    <div className="p-8 bg-gradient-to-br w-full from-gray-900 to-gray-800 min-h-screen text-white">
      <h1 className="text-4xl font-bold mb-4 flex flex-row items-center ">
        <ion-icon
          onClick={() => window.history.back()}
          name="arrow-back-outline"
        ></ion-icon>
        Tentang Kami
      </h1>
      <p className="text-gray-300 mb-8">
        Aplikasi Cuaca Sederhana - Proyek Tugas Kuliah
      </p>

      <div className="bg-gray-700 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Deskripsi Proyek</h2>
        <p className="text-gray-300">
          Aplikasi ini dibuat sebagai tugas kuliah untuk mempelajari React,
          Komponen React Js dan JSX State dan Props Lifecycle dan Hooks Routing
          dengan React Router State Management. Menggunakan OpenWeatherMap API
          untuk menampilkan data cuaca real-time berdasarkan nama kota.
        </p>
      </div>

      <div className="bg-gray-700 rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-6">Anggota Kelompok</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {members.map((member) => (
            <div key={member.id} className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-400">
                {member.name}
              </h3>
              <p className="text-sm text-gray-400">{member.nim}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
