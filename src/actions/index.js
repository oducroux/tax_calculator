const selectUser = (user) => {
  return {
    type: "USER_SELECTED",
    payload: user
  }
}

export default selectUser;
