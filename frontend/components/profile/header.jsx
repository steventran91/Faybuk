import React from "react";
import ProfileThumb from "./profile_thumb";
import CoverPhoto from "./cover_photo";


export default ({ user, currentUser }) => (
  <div className="profile-header">
    <CoverPhoto user={user} currentUser={currentUser} />
    <ProfileThumb user={user} currentUser={currentUser} />
  </div>
);
