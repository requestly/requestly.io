export default function sortPostsFunction(a, b) {
  return new Date(b.metadata.date) - new Date(a.metadata.date);
}
