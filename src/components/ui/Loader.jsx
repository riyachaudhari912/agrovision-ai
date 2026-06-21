/**
 * Loader Component
 * Shows loading spinner during data fetching.
 */

const Loader = () => {
  return (
    <div className="flex justify-center items-center py-8">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-green-600 border-t-transparent"></div>
    </div>
  );
};

export default Loader;