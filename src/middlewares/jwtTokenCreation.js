import jwt from "jsonwebtoken";

const jwtTokenCreation = async (id, role, email, phone) => {
  const token = jwt.sign(
    {
      id: id,
      role: role,
      email: email,
      phone: phone,
    },
    process.env.TOKENKEY
  );
  return token;
};

export default jwtTokenCreation;
