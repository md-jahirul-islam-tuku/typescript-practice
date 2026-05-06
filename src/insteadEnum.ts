const UserRoles = {
  Admin: "ADMIN",
  Editor: "Editor",
  Viewer: "VIEWER",
} as const;

// (typeof UserRoles)[keyof typeof UserRoles]) value type হিসেবে ব্যবহার করার জন্য এই পদ্ধতি।


const canEdit = (role: (typeof UserRoles)[keyof typeof UserRoles]) => {
  if (role === UserRoles.Admin) {
    return true;
  } else {
    return false;
  }
};

const isEditPermissible = canEdit(UserRoles.Admin);

console.log(isEditPermissible);
