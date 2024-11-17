import React from "react";
import {Box, Typography} from "@mui/material";
import {PostSpecs} from "../../types/postSpecs.types";
import {exposureInfoToHoursAndMinutes, secondsToHoursAndMinutes} from "../../utils/Utils";
import {PostExposureInfo} from "../../types/postExposureInfo.types";

const SpecificationsBox: React.FC<{
    specs: PostSpecs | null,
}> = ({specs}) => {

    if (specs == null) {
        return <Box> <Typography variant="body2" color="text.secondary">No equipment data available</Typography></Box>
    }

    const TotalIntegrationRow: React.FC<{
        specs: PostSpecs,
        marginTop?: string,
        marginBottom?: string
    }> = ({specs, marginTop, marginBottom}) => {
        return (
            <Box
                sx={{
                    width: '100%',
                    height: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'start',
                    marginTop: marginTop ?? '0rem',
                    marginBottom: marginBottom ?? '0rem'
                }}
            >
                <img
                    alt="Placeholder"
                    style={{
                        width: 18,
                        height: 18,
                        marginRight: 5,
                        filter: 'invert(48%) sepia(84%) saturate(3150%) hue-rotate(340deg) brightness(100%) contrast(102%)',
                    }}
                    src={`${process.env.PUBLIC_URL}/icons/Time_Red.svg`}
                />

                <Typography
                    variant="body1"
                    color="#FF4A4A"
                    sx={{
                        marginLeft: '0.6rem',
                        marginTop: '2px',
                        width: '100%',
                        height: 'auto'
                    }}
                >
                    Total integration time:&nbsp;&nbsp;&nbsp;{secondsToHoursAndMinutes(specs.totalIntegration)}
                </Typography>

            </Box>
        );
    };

    function getIconType(exposureInfo: PostExposureInfo): string {
        switch (exposureInfo.type) {
            case 'R' :
                return `${process.env.PUBLIC_URL}/icons/Red.svg`;
            case 'G' :
                return `${process.env.PUBLIC_URL}/icons/Green.svg`;
            case 'B' :
                return `${process.env.PUBLIC_URL}/icons/Blue.svg`;
            case 'H' :
                return `${process.env.PUBLIC_URL}/icons/Hydrogen.svg`;
            case 'S' :
                return `${process.env.PUBLIC_URL}/icons/Sulphur.svg`;
            case 'O' :
                return `${process.env.PUBLIC_URL}/icons/Oxygen.svg`;
            case 'L' :
                return `${process.env.PUBLIC_URL}/icons/Luminance.svg`;
            default :
                return `${process.env.PUBLIC_URL}/icons/Luminance.svg`;
        }
    }

    const InfoRow: React.FC<{
        iconSrc: string,
        text: string,
        marginTop?: string,
        marginBottom?: string
    }> = ({iconSrc, text, marginTop, marginBottom}) => {
        return (
            <Box
                sx={{
                    width: '100%',
                    height: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'start',
                    marginTop: marginTop ?? '0rem',
                    marginBottom: marginBottom ?? '0rem'
                }}
            >
                <img
                    alt="Placeholder"
                    style={{
                        width: 18,
                        height: 18,
                        marginRight: 5
                    }}
                    src={iconSrc}
                />

                <Typography
                    variant="body1"
                    color="#C0B4A3"
                    sx={{
                        marginLeft: '0.6rem',
                        marginTop: '2px',
                        width: '100%',
                        height: 'auto',
                    }}
                >
                    {text}
                </Typography>

            </Box>
        );
    };

    return (
        <Box
            sx={{
                width: '100%',
                height: 'auto',
                backgroundColor: '#171717',
                borderRadius: '8px',
                border: '1px solid #222222',
                padding: '24px',
                marginBottom: '12px',
            }}
        >

            <Typography
                color="#FFA133"
                variant="body1"
                sx={{marginBottom: 2}}
            >
                Specifications
            </Typography>

            <TotalIntegrationRow
                specs={specs}
                marginBottom={'1rem'}
            />

            {(specs.exposures ?? []).map((item) => (
                <InfoRow
                    iconSrc={getIconType(item)}
                    text={exposureInfoToHoursAndMinutes(item)}
                    marginBottom={'0.4rem'}
                />
            ))}

            <InfoRow
                iconSrc={`${process.env.PUBLIC_URL}/icons/Calibrations.svg`}
                text= {`Calibrations:\xa0\xa0${specs.calibrations}`}
                marginTop={'1rem'}
                marginBottom={'1rem'}
            />

            <InfoRow
                iconSrc={`${process.env.PUBLIC_URL}/icons/Temp.svg`}
                text= {`Sensor temp:\xa0\xa0${specs.temp}°C`}
                marginBottom={'1rem'}
            />

            <InfoRow
                iconSrc={`${process.env.PUBLIC_URL}/icons/Bin.svg`}
                text= {`Binning:\xa0\xa0${specs.binning}\xa0x\xa0${specs.binning}`}
            />
        </Box>
    );
};

export default SpecificationsBox;



