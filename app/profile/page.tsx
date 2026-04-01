"use client"
import { useUser } from "../../context/UserContext";
import { useState } from "react";
import Image from "next/image";
export default function Profile(){
     const { user, updateUser } = useUser();
     const [preview, setPreview] = useState<string | null>(user?.image || null);

  if (!user) {
    return <p>Please login to view your profile.</p>;
  }

  const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    updateUser({
      ...user,
      name: formData.get("name") as string,
      bio: formData.get("bio") as string,
      image: preview || user.image,
    });
  };
   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreview(url);
    }
   }
    return (
        <main className="px-4 sm:px-8 py-10">
      <h1 className="text-2xl font-bold mb-6">My Profile</h1>
      <form onSubmit={handleSave} className="grid gap-4 max-w-md">
        {preview && (
          <Image
            src={preview}
            alt="Profile Preview"
            width={100}
            height={100}
            className="rounded-full object-cover"
          />
        )}
         {/* Upload field */}
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="border px-3 py-2 rounded"
        />
        <input
          name="name"
          placeholder="Enter your full name"
          defaultValue={user.name}
          className="border px-3 py-2 rounded"
        />
        <textarea
          name="bio"
          placeholder="enter your bio"
          defaultValue={user.bio}
          className="border px-3 py-2 rounded"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Save Changes
        </button>
      </form>
    </main>
    )
}