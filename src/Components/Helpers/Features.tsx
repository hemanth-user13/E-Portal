import React from 'react';

interface FeatureProps {
    name: string;
    icon: string;
}

const Features: React.FC<FeatureProps> = ({ icon, name }) => {
    return (
        <div className='relative flex items-center gap-2 max-w-28 bg-violet-500 text-white px-4 py-2 rounded-lg'>
            <img src={icon} alt={name} className="w-6 h-6" />
            {name}
        </div>
    );
};

export default Features;
