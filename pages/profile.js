import Meta from "../components/meta";
import Header from "../components/header";
import ProfileSection from "../components/profileSection";
import WatchListSection from "../components/watchListSection";
import { api } from "../components/api";
import { connect } from "react-redux";
import React, { useState, useEffect } from "react";

import { mapStateToProps } from "../components/redux";

const Profile = ( {session_id, user_data } ) => {
  return (
    <>
      <Meta title="BNCC x tiket Movies" desc="Lorem ipsum" />
      <Header />
      <ProfileSection 
              session_id={session_id}
              user_data={user_data} />
      <WatchListSection 
              session_id={session_id}
              user_data={user_data}/>
    </>
  );
}

export default connect(mapStateToProps)(Profile);
