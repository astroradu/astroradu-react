import React, {useEffect, useMemo, useState} from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { Engine } from "@tsparticles/engine";
import { loadFull } from "tsparticles";
import { ISourceOptions } from "tsparticles-engine"
import styles from "../../styles/Particles.module.css";

const ParticlesComponent: React.FC = () => {
    const [init, setInit] = useState<boolean>(false);

    useEffect(() => {
        if (!init) {
            initParticlesEngine(async (engine: Engine) => {
                await loadFull(engine);
            }).then(() => {
                setInit(true);
            });
        }
    }, [init]);

    const ParticlesOptions: ISourceOptions = useMemo(() => ({
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
        detectRetina: false
    }), []);

    return (
        <div className={styles.particles}>
            <Particles id="tsparticles" options={{ParticlesOptions}} />
        </div>
    );
};

export default ParticlesComponent;