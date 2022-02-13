export function mapStateToProps(state) {
  return {
    session_id: state.session_id,
    user_data: state.user_data,
  };
}

export function setSessionId(session_id, user_data) {
  return {
    type: "LOGIN",
    session_id: session_id,
    user_data: user_data,
  };
}

export function removeSessionId() {
  return {
    type: "LOGOUT",
  };
}

export const mapDispatchToProps = {
  setSessionId,
  removeSessionId,
};
