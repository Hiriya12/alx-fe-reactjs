function UserProfile() {
    return (
      <div className="bg-gray-100 p-8 max-w-sm x-auto, my-20 rounded-lg shadow-lg sm:p-4 md:p-8 sm:max-w-xs md:max-w-sm">
        <img className="rounded-full w-36 h-36 mx-auto sm:h-24 ,sm:w-24, md:w-36, md:h-36"
        src="https://via.placeholder.com/150" alt="User" />
        <h1 className="text-xl  text-blue-800 my-4 sm:text-lg md:text-xl,text-sm">John Doe</h1>
        <p className="text-gray-600 text-base">Developer at Example Co. Loves to write code and explore new technologies.</p>
      </div>
    );
  }
  
  export default UserProfile;