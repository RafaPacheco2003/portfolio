import Card from "./components/Card";

function Experience({ currentSection }) {
  const isVisible = currentSection === 1;

  return (
    <div className="w-full h-full grid grid-cols-2 grid-rows-2">

      <Card
        index={0}
        image="/accentureExp.png"
        title="Accenture"
        description="Enterprise systems, APIs and scalable backend architecture."
        isVisible={isVisible}
        dark={false}
      />

      {/* OSCURO */}
      <Card
        index={1}
        image={"/megasurExp.png"}
        title={null}
        description={null}
        isVisible={isVisible}
        dark={true}
      />

      <Card
        index={2}
        image="/rocketExp.png"
        title="The Rocket Code"
        description="Built modern web apps using React and Spring Boot."
        isVisible={isVisible}
        dark={true}
      />

      <Card
        index={3}
        image={null}
        title={null}
        description={null}
        isVisible={isVisible}
        dark={false}
      />

    </div>
  );
}

export default Experience;