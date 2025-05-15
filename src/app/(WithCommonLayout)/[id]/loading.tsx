const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-[60vh] bg-background">
    <div className="relative w-16 h-16">
      <div className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
      <div className="absolute inset-3 rounded-full bg-background"></div>
    </div>
    <span className="ml-4 text-primary text-lg font-semibold animate-pulse">
      Loading...
    </span>
  </div>
);

export default LoadingSpinner;
