import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { updateProfile } from "../services/operations/settingsAPI"
import IconBtn from "./IconBtn"


export default function Settings() {

    const { user } = useSelector((state) => state.profile)
    const { token } = useSelector((state) => state.auth)
    const navigate = useNavigate()
    const dispatch = useDispatch()


    const genders = ["Male", "Female"]

    const submitProfileForm = async (event) => {
        event.preventDefault(); 
        try {
            const formData = new FormData(event.target);
            const data = {};

            // Convert FormData to JSON
            formData.forEach((value, key) => {
                data[key] = value;
            });

            dispatch(updateProfile(token, data));
        } catch (error) {
            console.log("ERROR MESSAGE - ", error.message);
        }
    };
    return (
        <form onSubmit={submitProfileForm}>
            <div className="my-10 flex flex-col gap-y-6 rounded-md border-[1px] border-[#9a9999] bg-white p-8 px-12">
                <h2 className="text-lg font-semibold text-richblack-5">
                    Profile Information
                </h2>
                <div className="flex flex-col gap-5 lg:flex-row">
                    <div className="flex flex-col gap-2 lg:w-[48%]">
                        <label htmlFor="firstName" className="lable-style">
                            First Name
                        </label>
                        <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            placeholder="Enter first name"
                            className="form-style"
                            defaultValue={user?.firstName}
                        />
                    </div>
                    <div className="flex flex-col gap-2 lg:w-[48%]">
                        <label htmlFor="lastName" className="lable-style">
                            Last Name
                        </label>
                        <input
                            type="text"
                            name="lastName"
                            id="lastName"
                            placeholder="Enter first name"
                            className="form-style"
                            defaultValue={user?.lastName}
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-5 lg:flex-row">
                    <div className="flex flex-col gap-2 lg:w-[48%]">
                        <label htmlFor="dateOfBirth" className="lable-style">
                            Date of Birth
                        </label>
                        <input
                            type="date"
                            name="dateOfBirth"
                            id="dateOfBirth"
                            className="form-style"
                            defaultValue={user?.dateOfBirth}
                        />
                        
                    </div>
                    <div className="flex flex-col gap-2 lg:w-[48%]">
                        <label htmlFor="gender" className="lable-style">
                            Gender
                        </label>
                        <select
                            type="text"
                            name="gender"
                            id="gender"
                            className="form-style"
                            defaultValue={user?.additionalDetails?.gender}
                        >
                            {genders.map((ele, i) => {
                                return (
                                    <option key={i} value={ele}>
                                        {ele}
                                    </option>
                                )
                            })}
                        </select>
                        
                    </div>
                </div>

                <div className="flex flex-col gap-5 lg:flex-row">
                    <div className="flex flex-col gap-2 lg:w-[48%]">
                        <label htmlFor="contactNumber" className="lable-style">
                            Contact Number
                        </label>
                        <input
                            type="tel"
                            name="contactNumber"
                            id="contactNumber"
                            placeholder="Enter Contact Number"
                            className="form-style"
                            defaultValue={user?.contactNumber}
                        />
                    </div>
                    
                </div>
            </div>

            <div className="flex justify-end gap-2">
                <button
                    onClick={() => {
                        navigate("/dashboard/my-profile")
                    }}
                    className="cursor-pointer rounded-md bg-richblack-700 py-2 px-5 font-semibold text-richblack-50"
                >
                    Cancel
                </button>
                <IconBtn type="submit" text="Save" />
            </div>
        </form>
    )
}