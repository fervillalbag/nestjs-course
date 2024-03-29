import { v4 as uuid } from 'uuid';

export const fileNamer = (req: Request, file: Express.Multer.File, cb) => {
  if (!file) return cb(new Error('File is empty'));

  const fileExtension = file.mimetype.split('/')[1];
  const fileName = `${uuid()}.${fileExtension}`;

  cb(null, fileName);
};
