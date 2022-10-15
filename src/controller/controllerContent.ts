import db from "../../models";

export const purshasedContent = (obj: any) => {
  db.PurshasedContent.create(obj);
  return "Content added successfully";
};

export const getContentUser = async (id: number) => {
  const resp = await db.PurshasedContent.findAll({ where: { UserId: id } });
  return resp;
};
