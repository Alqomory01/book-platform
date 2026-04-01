"use client"
import { useUser } from "../../context/UserContext";
export default function Profile(){
     const { user, updateUser } = useUser();

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
    });
  };

    return (
        <main className="px-4 sm:px-8 py-10">
      <h1 className="text-2xl font-bold mb-6">My Profile</h1>
      <form onSubmit={handleSave} className="grid gap-4 max-w-md">
        <input
          name="name"
          defaultValue={user.name}
          className="border px-3 py-2 rounded"
        />
        <textarea
          name="bio"
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