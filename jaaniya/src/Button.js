function Button(props) {
    return (
      <button onClick={props.onClick}>
        {props.text}
      </button>
    );
  }
  
  // Usage
  <Button text="Click me!" onClick={() => console.log("Button clicked")} />

  export default Button;