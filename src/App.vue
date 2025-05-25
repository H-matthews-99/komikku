<template>
  <div class="app">
    <!-- Header -->
    <header class="header">
      <h1>🌌 Galaksi Komik</h1>
    </header>

    <!-- Main Layout -->
    <div class="main">
      <!-- Sidebar -->
      <aside class="sidebar">
        <nav>
          <router-link to="/">Beranda</router-link>
          <router-link to="/aksi">Aksi</router-link>
          <router-link to="/petualangan">Petualangan</router-link>
          <router-link to="/komedi">Komedi</router-link>
          <router-link to="/drama">Drama</router-link>
          <router-link to="/fantasi">Fantasi</router-link>
          <router-link to="/horor">Horor</router-link>
          <router-link to="/romantis">Romantis</router-link>
          <router-link to="/scifi">Sci-Fi</router-link>
          <router-link to="/tentang">Tentang</router-link>
        </nav>
      </aside>

      <!-- Konten Halaman -->
      <main class="content">
        <router-view />
      </main>
    </div>
  </div>
</template>

<style scoped>
/* Font dan warna dasar */
.app {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f8f7f3;
  color: #333;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Header */
.header {
  background-color: #1e293b;
  color: #facc15;
  text-align: center;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  font-weight: bold;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

/* Layout utama */
.main {
  display: flex;
  flex: 1;
}

/* Sidebar */
.sidebar {
  width: 240px;
  background: linear-gradient(180deg, #334155, #1e293b);
  padding: 1.5rem 1rem;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
}

.sidebar nav {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.sidebar a {
  color: #f1f5f9;
  text-decoration: none;
  font-weight: 500;
  padding: 0.6rem 1rem;
  border-radius: 8px;
  transition: background 0.3s, transform 0.2s;
}

.sidebar a:hover {
  background-color: #475569;
  transform: translateX(5px);
}

.sidebar a.router-link-active {
  background-color: #facc15;
  color: #1e293b;
  font-weight: bold;
}

/* Konten utama */
.content {
  flex: 1;
  padding: 2rem;
  background-color: #fffef9;
  overflow-y: auto;
  box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.05);
  border-left: 1px solid #eee;
  border-top: 1px solid #eee;
  border-radius: 12px 0 0 0;
}

/* Responsive (opsional) */
@media (max-width: 768px) {
  .main {
    flex-direction: column;
  }

  .sidebar {
    width: 100%;
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    padding: 1rem;
  }

  .sidebar nav {
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 0.5rem;
  }

  .content {
    padding: 1rem;
  }
}
</style>
