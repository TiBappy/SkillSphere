"use client";
import { authClient } from "@/lib/auth-client";
import React, { useState } from "react";

const ProfilePage = () => {
  const { data, isLoading } = authClient.useSession();
  const user = data?.user;

  const [open, setOpen] = useState(false);

  const [profileData, setProfileData] = useState({
    name: user?.name || "John Doe",
    email: user?.email || "john@example.com",
    role: "Student",
    image:
      user?.image ||
      "https://img.daisyui.com/images/profile/demo/spiderperson@192.webp",
    enrolledCourses: 5,
    completedCourses: 2,
  });

  if (isLoading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  // Handle update
  const handleUpdate = (e) => {
    e.preventDefault();

    const form = e.target;

    const updatedData = {
      ...profileData,
      name: form.name.value,
      email: form.email.value,
      image: form.image.value,
    };

    setProfileData(updatedData);
    setOpen(false);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="text-center mb-10">
        <p className="text-3xl font-semibold">
          <span className="text-[#FF9500]">My</span> Profile
        </p>
      </div>

      {/* Profile Card */}
      <div className="bg-base-100 shadow-lg rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex items-center gap-6 flex-col md:flex-row">
          {/* Avatar */}
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={profileData.image} alt="user" />
            </div>
          </div>

          {/* Info */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-semibold">{profileData.name}</h2>
            <p className="text-gray-500">{profileData.email}</p>
            <span className="badge badge-warning mt-2">
              {profileData.role}
            </span>
          </div>
        </div>

        {/* Edit Button */}
        <button
          onClick={() => setOpen(true)}
          className="btn bg-[#FF9500] text-white hover:scale-105 transition"
        >
          Edit Profile
        </button>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="bg-base-100 shadow-lg rounded-xl p-6 text-center">
          <p className="text-gray-500">Enrolled Courses</p>
          <h3 className="text-3xl font-bold text-[#FF9500]">
            {profileData.enrolledCourses}
          </h3>
        </div>

        <div className="bg-base-100 shadow-lg rounded-xl p-6 text-center">
          <p className="text-gray-500">Completed Courses</p>
          <h3 className="text-3xl font-bold text-green-500">
            {profileData.completedCourses}
          </h3>
        </div>
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
          <div className="bg-base-100 rounded-2xl shadow-lg w-full max-w-md p-6">
            <h3 className="text-xl font-semibold mb-4 text-center">
              Update Profile
            </h3>

            <form onSubmit={handleUpdate} className="space-y-4">
              <input
                name="name"
                defaultValue={profileData.name}
                placeholder="Name"
                className="input input-bordered w-full"
                required
              />

              <input
                name="email"
                defaultValue={profileData.email}
                placeholder="Email"
                className="input input-bordered w-full"
                required
              />

              <input
                name="image"
                defaultValue={profileData.image}
                placeholder="Image URL"
                className="input input-bordered w-full"
              />

              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="btn"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="btn bg-[#FF9500] text-white"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;