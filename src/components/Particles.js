import Particles, {initParticlesEngine} from "@tsparticles/react";
import {useEffect, useMemo, useState} from "react";
import {loadFull} from "tsparticles";
import styles from "../styles/Header.module.css";

const ParticlesComponent = (props) => {

    const [init, setInit] = useState(false);
    useEffect(() => {
        if (!init) {
            initParticlesEngine(async (engine) => {
                await loadFull(engine);
            }).then(() => {
                setInit(true);
            });
        }
    }, [init]);

    const options = useMemo(
        () => (
            {
                fullScreen: {enable: true, zIndex: -1},
                particles: {
                    number: {value: 200, density: {enable: true, area: 800}},
                    color: {value: "#ffffff"},
                    shape: {type: "circle"},
                    opacity: {
                        value: {min: 0.3, max: 0.8},
                        animation: {enable: true, speed: 0.5, minimumValue: 0.3, sync: false}
                    },
                    size: {
                        value: {min: 0.5, max: 1.5},
                        animation: {enable: true, speed: 0.2, minimumValue: 1, sync: false}
                    },
                    move: {
                        enable: true,
                        speed: 0.1,
                        direction: "none",
                        outModes: "out"
                    },
                },
                interactivity: {
                    detectsOn: "window",
                    events: {
                        resize: true
                    }
                },
                fps_limit: 60,
                detectRetina: false,
            }
        ),
        [],
    );

    return <div className={styles.particles}>
        <Particles id={props.id} options={options}/>
    </div>;
};

export default ParticlesComponent;