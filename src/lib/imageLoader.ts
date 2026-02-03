export default function imageLoader({ src }: { src: string }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  // Remove any leading slash to avoid double slashes
  const cleanSrc = src.startsWith('/') ? src.slice(1) : src;
  const path = `${basePath}/${cleanSrc}`;
  // Ensure the final URL starts with / for relative paths
  return path.startsWith('/') ? path : `/${path}`;
}
