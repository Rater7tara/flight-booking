import React from 'react';

const BookHotelForm = () => {


        const handleSearchHotel = event => {
            event.preventDefault();
            const form = event.target;
            const checkIn = form.checkIn.value;
            const checkOut = form.checkOut.value;
            const city = form.city.value;
            const rooms = form.rooms.value;
            const adults = form.adults.value;
            const children = form.children.value;
            
            console.log(checkIn, checkOut, city, rooms, adults, children);

            form.reset();

    };



    return (
        <div className=" p-10 md:flex justify-center ">

            <form className='form md:w-2/4 sm:w-full bg-slate-300 px-8 py-4  rounded-lg' onSubmit={handleSearchHotel}>
                <h2 className="text-4xl font-extrabold text-center mt-2 mb-2">Add User</h2>
                {/* form first name row */}
                <div className="md:flex mb-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">First Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="city" placeholder="First Name" required className="input input-bordered w-full" />
                        </label>
                    </div>
                    {/* form last name row */}
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Last Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rooms" placeholder="Last Name" required className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>


                {/* form checkIn row */}
                <div className="md:flex mb-6">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">User checkIn</span>
                        </label>
                        <label className="input-group">
                            <input type="checkIn" name="checkIn" placeholder="checkIn" required className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>

                {/* {form children row} */}
                <div className="md:flex mb-6">
                    <div className="form-control md:w-1/3">
                        <label className="label">
                            <span className="label-text">children</span>
                        </label>
                        <input type="text" name="children" placeholder="Street" required className="input input-bordered w-full" />
                    </div>
                    <div className="form-control md:w-1/3 ml-4">
                        <label className="label">
                            <span className="label-text">Postal Code</span>
                        </label>
                        <input type="text" name="postalCode" placeholder="Postal Code" required className="input input-bordered w-full" />
                    </div>
                    <div className="form-control md:w-1/3 ml-4">
                        <label className="label">
                            <span className="label-text">City</span>
                        </label>
                        <input type="text" name="city" placeholder="City"
                            required className="input input-bordered w-full" />
                    </div>

                </div>

                {/* form adults row */}
                <div className="md:flex mb-6">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">adults Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="adults" placeholder="adults" required className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                {/* form avatar row */}
                <div className="md:flex mb-6">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Avatar</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="checkOut" placeholder="Avatar" required className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <input type="submit" value="Add User" className="btn bg-cyan-500 hover:bg-cyan-700 btn-block text-white mb-2" />

            </form>
        </div>
    );
};

export default BookHotelForm;