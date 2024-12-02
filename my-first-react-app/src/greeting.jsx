// export function Button(props) {
//   const buttonStyle = {
//     color: props.color,
//     fontSize: props.fontSize + "px",
//   };

//   return <button style={buttonStyle}>{props.text}</button>;
// }

// export function Button({text, color, fontSize}) {
//   const buttonStyle = {
//     color: color,
//     fontSize: fontSize + "px",
//   };

//   return <button style={buttonStyle}>{text}</button>;
// }

export function Button({ text = "Click Me", color = "blue", fontSize = 12, handleClick }) {
  const buttonStyle = {
    color: color,
    fontSize: fontSize + "px",
  };

  return <button onClick={handleClick} style={buttonStyle}>{text}</button>;
}

export function Main() {
  const handleButtonClick = (url) => {
    window.location.href = url;
  };

  return (
    <div>
      <Button handleClick={() => handleButtonClick('https://www.theodinproject.com')}/>
      <Button text="Don't Click me" color="red" fontSize={12} />
      <Button fontSize={20}/>
    </div>
  );
}
