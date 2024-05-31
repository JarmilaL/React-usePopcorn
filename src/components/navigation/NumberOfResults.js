export default function NumberOfResults({ moviesCount }) {
  return (
    <p className="num-results">
      Found <strong>{moviesCount}</strong> results
    </p>
  );
}
