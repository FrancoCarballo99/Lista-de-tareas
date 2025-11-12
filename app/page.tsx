// Esta función se ejecuta en el servidor (SSR)
async function obtenerTareas() {
  const res = await fetch('http://localhost:3000/api/tareas', {
    cache: 'no-store', // Evita que use caché (importante para SSR dinámico)
  })
  return res.json()
}

export default async function Home() {
  const tareas = await obtenerTareas()

  return (
    <main style={{ padding: 20, fontFamily: 'sans-serif' }}>
      <h1>📝 Lista de Tareas</h1>

      {/* Formulario para agregar nueva tarea */}
      <form
        action="/api/tareas"
        method="POST"
        style={{ marginBottom: 20 }}
      >
        <input
          name="title"
          placeholder="Nueva tarea..."
          style={{ padding: 8, marginRight: 10 }}
          required
        />
        <button type="submit">Agregar</button>
      </form>

      {/* Lista de tareas renderizada desde SSR */}
      <ul>
        {tareas.map((t: any) => (
          <li key={t.id}>
            <input type="checkbox" defaultChecked={t.completed} /> {t.title}
          </li>
        ))}
      </ul>
    </main>
  )
}


