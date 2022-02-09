import classes from "./ParentCon.module.css";
import Particles from "react-tsparticles";

const ParentCon = (props) => {
  return (
    <>
      <Particles
        id="tsparticles"
        options={{
          background: {
            image: `url(${props.backgroundURL})`,
            repeat: "no-repeat",
            position: "center",
            size: "cover",
          },

          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: false,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: false,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "top",
              enable: true,
              outMode: "out",
              random: false,
              speed: 2,
              straight: true,
            },
            number: {
              density: {
                enable: true,
                value_area: 1000,
              },
              value: 30,
            },
            opacity: {
              value: 0.7,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
        //backgroundImage: `url("${props.backgroundURL}")`
        style={{
          zIndex: -1,
        }}
      ></Particles>
      <div className={`${classes.main} scale-in-center ${props.className}`}>
        {props.children}
      </div>
    </>
  );
};

export default ParentCon;
