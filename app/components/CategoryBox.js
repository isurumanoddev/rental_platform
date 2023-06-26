'use client'
import React from 'react';

function CategoryBox({Icon,label,selected}) {



    return (
        <div

            className={`
        flex 
        flex-col 
        items-center 
        justify-center 
        gap-1.5
        p-3
        border-b-2
        hover:text-neutral-800
        transition
        cursor-pointer
        ${selected ? 'border-b-neutral-800' : 'border-transparent'}
        ${selected ? 'text-neutral-800' : 'text-neutral-500'}
      `}
        >
            <Icon size={22}/>
            <div className="font-medium text-xs text-gray-700">
                {label}
            </div>
        </div>
    );
}

export default CategoryBox;