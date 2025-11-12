import { NextResponse } from 'next/server'

let tareas = [
  { id: 1, title: 'Comprar leche', completed: false },
  { id: 2, title: 'Comprar pan', completed: false },
]

// GET devuelve la lista de tareas
export async function GET() {
  return NextResponse.json(tareas)
}

// POST agrega una nueva tarea desde un formulario HTML
export async function POST(request: Request) {
  const formData = await request.formData()
  const title = formData.get('title') as string

  const nuevaTarea = {
    id: tareas.length + 1,
    title,
    completed: false,
  }

  tareas.push(nuevaTarea)
  return NextResponse.json(nuevaTarea)
}
