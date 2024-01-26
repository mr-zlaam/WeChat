import { useEffect, useState } from "react";
import "./Checkbox.scss";

const Checkbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    // Simulate checkbox being checked automatically when component mounts
    setIsChecked(true);
  }, []);

  return (
    <div className="container">
      <input
        type="checkbox"
        id="cbx2"
        checked={isChecked}
        readOnly
        style={{ visibility: "hidden" }}
      />
      <label htmlFor="cbx2" className="check">
        <svg width="12px" height="12px" viewBox="0 0 18 18">
          <path d="M 1 9 L 1 9 c 0 -5 3 -8 8 -8 L 9 1 C 14 1 17 5 17 9 L 17 9 c 0 4 -4 8 -8 8 L 9 17 C 5 17 1 14 1 9 L 1 9 Z"></path>
          <polyline points="1 9 7 14 15 4"></polyline>
        </svg>
      </label>
    </div>
  );
};

export default Checkbox;
