import React from 'react'

function Card({username, btnText="visit me"}) {
  console.log(username);
  
  return (
    <div className="max-w-sm w-full bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      {/* Image Section */}
      <img
        className="w-full h-48 object-cover"
        src="https://picsum.photos/400/300"
        alt="Card Image"
      />

      {/* Content Section */}
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          {username}
        </h2>
        <p className="text-gray-600 text-sm mb-4">
          This is a simple and responsive card component built with React and
          Tailwind CSS. You can customize it easily.
        </p>

        {/* Button */}
        <button className="px-4 py-2 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 transition-colors duration-200">
          {btnText}
        </button>
      </div>
    </div>
  )
}

export default Card
