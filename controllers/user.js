export const listUser = (req, res) => {
  //code body
  res.json({ message: "This is GET Users" });
};

export const readUser = (req, res) => {
  //code body
  res.json({ message: "This is GET User" });
};

export const postUser = (req, res) => {
  //code body
  res.json({ message: "This is POST user" });
};

export const updateRoleUser = (req, res) => {
  // console.log(req.params.id)
  const { id } = req.params;
  console.log(id);
  res.json({ message: "This is Update Role User" });
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  res.json({ message: `This is DELETE user ${id}` });
};
