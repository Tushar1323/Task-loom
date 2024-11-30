import React, { useEffect } from 'react';
import '../CssComponents/DarkMode.css'; // Ensure the correct CSS file is imported

// Dark mode functionality
import useDark from '../../Context/ThemeContext/Mode';

function ToggleButton() {
    const { img, darkTheme, lightTheme } = useDark();

    const toggleTheme = (e) => {
        const darkModeStatus = e.currentTarget.checked;
        if (darkModeStatus) {
            lightTheme();
        } else {
            darkTheme();
        }
    };

    return (
        <div className="checkbox-wrapper-5">
            <div className="check">
                <input
                    id="check-5"
                    type="checkbox"
                    checked={img === "/src/Images/blue.jpg"} // condition
                    onChange={toggleTheme} // Call the passed `onClicked` prop here
                />
                <label htmlFor="check-5"></label>
            </div>
        </div>
    );
}

export default ToggleButton;


// import React, { useState, useEffect } from 'react';
// import '../CssComponents/DarkMode.css'; // Ensure the correct CSS file is imported

// function ToggleButton({ onClicked, img }) {
//     const [isChecked, setIsChecked] = useState(false); // Default to unchecked

//     // Synchronize the toggle state with `img` on component mount
//     useEffect(() => {
//         if (img === "/src/Images/blue.jpg") {
//             setIsChecked(true); // Ensure toggle is checked on page load
//         } else {
//             setIsChecked(false);
//         }
//     }, [img]); // Dependency ensures it updates if `img` changes

//     const handleChange = () => {
//         setIsChecked(!isChecked); // Toggle local state
//         onClicked(); // Trigger the theme change
//     };

//     return (
//         <div className="checkbox-wrapper-5">
//             <div className="check">
//                 <input
//                     id="check-5"
//                     type="checkbox"
//                     checked={isChecked} // Controlled by the `isChecked` state
//                     onChange={handleChange} // Update state and notify parent
//                 />
//                 <label htmlFor="check-5"></label>
//             </div>
//         </div>
//     );
// }

// export default ToggleButton;



