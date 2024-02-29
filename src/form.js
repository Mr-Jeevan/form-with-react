


import { FormEvent } from "react";
import { useState } from "react";

function Loginform() {

    const [inputvalue, setinputValue] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
    });

    const [enterNameError, SetEnterNameError] = useState(false);
    const [enterMInNameError, setenterMInNameError] = useState(false);

    const [enteremailError, setenteremailError] = useState(false);
    const [entervalidemailError, setentervalidemailError] = useState(false);

    const [enterphoneError, setenterphoneError] = useState(false);
    const [entervalidphoneError, setentervalidphoneError] = useState(false);
    const [entervalidmaxphoneError, setentervalidmaxphoneError] = useState(false);

    const [enterpasswordError, setenterpasswordError] = useState(false);
    const [entervalidpasswordError, setentervalidpasswordError] = useState(false);

    const [enterc_passwordError, setenterc_passwordError] = useState(false);
    const [entercc_passwordError, setentercc_passwordError] = useState(false);


    const handleInput = (event) => {
        // console.log(event.target.value);
        // setinputValue(value);
        const { name, value } = event.target;
        setinputValue({ ...inputvalue, [name]: value });
        console.log(event.target.value);
    }




    const submitForm = () => {
        console.log("jdfi")
        let name_len = inputvalue.name.length;
        console.log(name_len);

        // name conditon
        if (inputvalue.name) {
            SetEnterNameError(false)
            if (name_len >= 3) {
                setenterMInNameError(false)
            } else {
                setenterMInNameError(true)
            }

        } else {
            SetEnterNameError(true)
        }


        // email condition
        let validEmail = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm;
        if (inputvalue.email) {
            setenteremailError(false)

            if (inputvalue.email.match(validEmail)) {
                setentervalidemailError(false)
            } else {
                setentervalidemailError(true)
            }
        } else {
            setenteremailError(true)

        }

        // phone no condition
        let phone_len = inputvalue.phone.length;
        console.log(phone_len)
        if (inputvalue.phone) {
            setenterphoneError(false)

            if (phone_len == 10) {
                setentervalidphoneError(false)

            } else {
                setentervalidphoneError(true)
            }
            // if (phone_len >= 11) {
            //     setentervalidmaxphoneError(false)
            // } else {
            //     setentervalidmaxphoneError(true)

            // }
        } else {
            setenterphoneError(true)

        }

        // password condition
        let validPassword = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/;
        if (inputvalue.password) {
            setenterpasswordError(false)

            if (inputvalue.password.match(validPassword)) {
                setentervalidpasswordError(false)
            } else {
                setentervalidpasswordError(true)
            }
        } else {
            setenterpasswordError(true)

        }

        // c_password condition
        if (inputvalue.c_password) {
            setenterc_passwordError(false)
            if (inputvalue.c_password == inputvalue.password) {
                setentercc_passwordError(false)

            } else {
                setentercc_passwordError(true)
            }
        } else {
            setenterc_passwordError(true)

        }
    }
    return (

        <>

            <form className="mt-5">
                <div className="container d-flex justify-content-center pt-5">
                    <div className="content bg-light card p-3 w-50 ">


                        {/* name */}
                        <div>
                            <input className=" w-100 my-3 border-primary " type="text" id="fname" placeholder="First Name*" name="name" value={inputvalue.name} onChange={handleInput} />
                            {enterNameError ? <label style={{ "color": "red" }} id="enterfnamewarning" htmlFor="text">Enter Your First Name</label> : ""}
                            {enterMInNameError ? <label style={{ "color": "red" }} id="minfnamewarning" htmlFor="text">Min 3 characters is
                                required</label> : ""}
                        </div>


                        {/* email */}
                        <div>
                            <input className="  w-100 my-3 border-primary " type="email" name="email" placeholder="Email*" value={inputvalue.email} onChange={handleInput} />
                            {enteremailError ? <label style={{ "color": "red" }} id="enterfnamewarning" htmlFor="text">Enter Your Email</label> : ""}
                            {entervalidemailError ? <label style={{ "color": "red" }} id="enterfnamewarning" htmlFor="text">Enter Valid Email</label> : ""}
                        </div>

                        {/* ph no */}
                        <div>
                            <input className="  w-100 my-3 border-primary " type="number" name="phone" placeholder="Phone Number*" value={inputvalue.phone} onChange={handleInput} />
                            {enterphoneError ? <label style={{ "color": "red" }} id="enterfnamewarning" htmlFor="text">Enter Your Mobile No.</label> : ""}
                            {entervalidphoneError ? <label style={{ "color": "red" }} id="enterfnamewarning" htmlFor="text">phone number should contain 10 characters</label> : ""}
                            {entervalidmaxphoneError ? <label style={{ "color": "red" }} id="enterfnamewarning" htmlFor="text">phone number should not exceed 10 characters</label> : ""}
                        </div>

                        {/* Password */}
                        <div>
                            <input className="  w-100 my-3 border-primary " type="password" name="password" placeholder="password*" value={inputvalue.password} onChange={handleInput} />
                            {enterpasswordError ? <label style={{ "color": "red" }} id="enterfnamewarning" htmlFor="text">Enter Your Password</label> : ""}
                            {entervalidpasswordError ? <label style={{ "color": "red" }} id="enterfnamewarning" htmlFor="text">"Password must contain 8 characters and at least one number, one uppercase letter and one unique character"</label> : ""}
                        </div>

                        {/* confirm Password */}
                        <div>
                            <input className="  w-100 my-3 border-primary " type="text" name="c_password" placeholder="confirm your password*" value={inputvalue.c_password} onChange={handleInput} />
                            {enterc_passwordError ? <label style={{ "color": "red" }} id="enterfnamewarning" htmlFor="text">Enter confirm Password</label> : ""}
                            {entercc_passwordError ? <label style={{ "color": "red" }} id="enterfnamewarning" htmlFor="text">Confirm Password doesn't match your previous Password</label> : ""}
                        </div>


                        <div className="mx-auto ">
                            <input className="btn btn-primary p-2 px-4 my-3" type="button" value="Log In" onClick={submitForm} />
                        </div>
                    </div>
                </div>
            </form >
        </>
    )
}

export default Loginform;