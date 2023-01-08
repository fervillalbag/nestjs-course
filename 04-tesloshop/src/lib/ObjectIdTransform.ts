import { ObjectId } from 'mongodb';

export const StringToObjectID = (id: string) => {
  return new ObjectId(id) as any;
};
