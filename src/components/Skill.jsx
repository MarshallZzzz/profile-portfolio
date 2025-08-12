import React from 'react'

const Skill = ({ imgURL, title}) => {
  return (
    <div className='h-[132px] w-[132px] justify-center items-center'
    >
      <div className="flex h-full flex-col">
        {/* Picture area (fills the top portion) */}
        <div className="relative flex-1 bg-transparent px-3 py-2 flex items-center justify-center ">
          <img
            src={imgURL}
            alt={title}
            className="absolute inset-6 max-h-20 max-w-20"
          />
        </div>

        {/* Title beneath the picture, still inside the hex */}
        <h3 className="px-3 py-2 text-center text-sm font-semibold bg-transparent">
          {title}
        </h3>
      </div>
    </div>
  );
};


export default Skill
