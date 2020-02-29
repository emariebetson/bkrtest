import React from "react";
import MakePost from "../components/MakePost";
import ProfileMenu from "../components/ProfileMenu";
import ProfileCreate from "../components/ProfileCreate";
import ProfileContent from "../components/ProfileContent";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Profile() {
    return (
        <>
            <Navbar />
            <ProfileMenu />
            <ProfileCreate/>
            <ProfileContent>
                <MakePost />
      </ProfileContent>
        </>
    );
}

export default Profile;
