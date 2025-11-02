export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Shopping bag shape */}
        <path
          d="M8 12L6 38H34L32 12H8Z"
          fill="currentColor"
          className="text-blue-600"
        />
        
        {/* Bag handles */}
        <path
          d="M12 12V10C12 5.58172 15.5817 2 20 2C24.4183 2 28 5.58172 28 10V12"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="text-blue-600"
          fill="none"
        />
        
        {/* Checkmark inside bag */}
        <path
          d="M14 22L18 26L26 18"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Decorative dots */}
        <circle cx="20" cy="32" r="1.5" fill="white" opacity="0.6" />
        <circle cx="16" cy="30" r="1" fill="white" opacity="0.4" />
        <circle cx="24" cy="30" r="1" fill="white" opacity="0.4" />
      </svg>
      
      <div className="flex flex-col leading-tight">
        <span className="text-2xl font-bold text-gray-900 tracking-tight">
          Daily Choice
        </span>
        <span className="text-xs text-blue-600 font-medium tracking-wider uppercase">
          Your Daily Essentials
        </span>
      </div>
    </div>
  );
}
