import React from "react";

function ControlBtn(props) {
  const { handelReset } = props.functions;
  return (
    <div>
      <button
        className="bg-blue-500 text-white py-3 px-5 rounded-md"
        onClick={handelReset}
      >
        Reset
      </button>
    </div>
  );
}

export default ControlBtn;
