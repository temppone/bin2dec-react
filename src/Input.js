import React from "react";

const Input = () => {
  function useInput({ type }) {
    const [value, setValue] = React.useState("");
    const input = (
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type={type}
      />
    );
    return [value, input];
  }

  const testBinInput = () => {
    const regExpNotBin = /[^01]/g;
    return !regExpNotBin.test(binInputValue);
  };

  const binToDec = (value) => {
    const decInput = parseInt(value, 2);
    return decInput;
  };

  const [binInputValue, binInput] = useInput({ type: "text" });

  const decResult = isNaN(binToDec(binInputValue))
    ? "Digite um número"
    : binToDec(binInputValue);

  return (
    <div>
      <p>{binInput}</p>
      {testBinInput(binInputValue) ? (
        <div>{decResult}</div>
      ) : (
        <div>O número não é binário</div>
      )}
    </div>
  );
};

export default Input;
