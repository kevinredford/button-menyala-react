import { useState } from "react";
import { Container, Button } from "./button-style";

function ButtonLamp() {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <Container isOn={isOn}>
      <Button isOn={isOn} onClick={handleToggle}>
        {isOn ? "Hitamkan" : "Nyalakan"}
      </Button>
    </Container>
  );
}

export default ButtonLamp;
