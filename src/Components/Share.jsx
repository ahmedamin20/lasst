import React from 'react';

const ShareButton = (props) => {

    const handleShare = () => {
        const url = `whatsapp://send?text=${encodeURIComponent(props)}`;
        window.open(url, '_blank');
    };

    return (
        <div>
            <button className='btn btn-success' onClick={handleShare}>Share on WhatsApp</button>
        </div>
    );
};

export default ShareButton;
