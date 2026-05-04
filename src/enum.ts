enum UserRoles {
  Admin = "Admin",
  Editor = "Editor",
  Viewer = "Viewer",
}

const canEdit = (role: UserRoles) => {
  if (role === "Admin") {
    return true;
  } else {
    return false;
  }
};

const isEditPermissible = canEdit(UserRoles.Admin);

console.log(isEditPermissible);
