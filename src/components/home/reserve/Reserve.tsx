import React from 'react';
import ReserveContent from './ReserveContent';
import ReserveForm from './ReserveForm';

const Reserve = () => {
    return (
        <div className="py-24 px-4 md:px-8 reserveBg">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 justify-between items-center gap-4">
                    <ReserveContent />
                    <ReserveForm />
                </div>
            </div>

        </div>
    );
};

export default Reserve;