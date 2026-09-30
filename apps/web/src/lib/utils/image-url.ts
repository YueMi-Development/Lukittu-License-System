import { fileExistsInPublicS3 } from '@/lib/providers/aws-s3';

export const getValidatedImageUrl = async (
  imageUrl: string | null,
): Promise<string | null> => {
  if (!imageUrl) return null;

  try {
    const url = new URL(imageUrl);
    const bucket = process.env.PUBLIC_OBJECT_STORAGE_BUCKET_NAME!;
    const fileKey = url.pathname.replace(/^\//, '');

    const exists = await fileExistsInPublicS3(bucket, fileKey);
    return exists ? imageUrl : null;
  } catch {
    return null;
  }
};
