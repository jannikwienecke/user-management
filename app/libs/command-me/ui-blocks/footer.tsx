export const Footer = () => {
  return (
    <div className="flex flex-row justify-end border-t-[1px] border-gray-300  px-4 py-3 text-right sm:px-6">
      <button type="submit" className="flex flex-row items-center text-xs">
        <div>Save Changes</div>
        <div>
          <kbd
            className="ml-1.5
		    inline-flex items-center rounded-md bg-gray-300 bg-opacity-60 px-2 py-0.5 text-sm font-medium text-gray-800
		  "
          >
            ⌘
          </kbd>

          <kbd
            className="ml-0.5
		    inline-flex items-center rounded-md bg-gray-300 bg-opacity-60 px-2 py-0.5 text-sm font-medium text-gray-800
		  "
          >
            ↵
          </kbd>
        </div>
      </button>
    </div>
  );
};
