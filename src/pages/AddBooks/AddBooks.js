import React from 'react';
import BookModal from './BookModal';

const AddBooks = () => {
    return (
        <div>
            <label
                        
                        htmlFor="book-modal"
                        className="btn btn-primary text-white"
                        
                    >Book Add</label>
                    

                    <BookModal></BookModal>
            


        </div>
    );
};

export default AddBooks;