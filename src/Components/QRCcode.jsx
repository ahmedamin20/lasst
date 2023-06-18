import React from 'react';
import QRCode from 'qrcode.react';

const QRCodeGenerator = ({ data }) => {
    return <QRCode value={data} className='mt-5' />;
};

export default QRCodeGenerator;