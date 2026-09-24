"use client";

// Funcionalidad que implemente una nueva página para crear un nuevo plan. La estructura del formulario debe ser la siguiente: Titulo, descripción, foto de la portada del plan, nombre del plan, direccion, precio estimado, duracion en minutos, descripcion del plan, recomendaciones y dos botones: uno de cancelar y otro de publicar plan.
import { useState } from "react";
import { useRouter } from "next/navigation";
import { getSession } from "@/services/session";

export default function NewPlanPage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [coverPhoto, setCoverPhoto] = useState<File | null>(null);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [estimatedPrice, setEstimatedPrice] = useState("");
  const [duration, setDuration] = useState("");
  const [recommendations, setRecommendations] = useState("");

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const session = getSession();
    if (!session.id) {
      router.push("/auth/login");
      return;
    }
  }
  return (
    <div className="flex-1 bg-slate-50 px-20 py-6">
      <h1 className="text-2xl font-bold mb-4">Crear un nuevo plan</h1>
      <h2>
        Organiza, invita a tus amigos o abre plazas para que otros miembros se
        sumen a vivir momentos únicos.
      </h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Título
          </label>
          <input
            type="text"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Descripción
          </label>
          <textarea
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Foto de portada
          </label>
          <input
            type="file"
            className="mt-1 block w-full"
            onChange={(e) =>
              setCoverPhoto(e.target.files ? e.target.files[0] : null)
            }
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Nombre del plan
          </label>
          <input
            type="text"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Dirección
          </label>
          <input
            type="text"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Precio estimado
          </label>
          <input
            type="number"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            value={estimatedPrice}
            onChange={(e) => setEstimatedPrice(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Duración (minutos)
          </label>
          <input
            type="number"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Descripción del plan
          </label>
          <textarea
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-70₀">
            Recomendaciones
          </label>
          <textarea
            className="mt-1 block w-full border border-gray-3₀ rounded-md shadow-sm focus:ring-blue-5₀ focus:border-blue-5₀"
            value={recommendations}
            onChange={(e) => setRecommendations(e.target.value)}
          />
        </div>
        <div className="flex justify-end space-x-4 mt-6">
          <button
            type="button"
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
            onClick={() => router.back()}
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            Publicar plan
          </button>
        </div>
      </form>
    </div>
  );
}
