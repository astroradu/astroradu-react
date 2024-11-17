import React from "react";
import {Box, Typography} from "@mui/material";
import {Equipment} from "../../types/equipment.types";

const EquipmentBox: React.FC<{
    equipment: Array<Equipment> | null,
}> = ({equipment}) => {

    if (equipment == null) {
        return <Box> <Typography variant="body2" color="text.secondary">No equipment data available</Typography></Box>
    }

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
                Equipment
            </Typography>

            {(equipment ?? []).map((item, index) => (
                <Typography key={index}>
                    <Typography
                        variant="body1"
                        color="#E3D3BD"
                        sx={{
                            marginBottom: '0.4rem'
                        }}
                    >
                       {item.name}:
                    </Typography>

                    <Typography
                        variant="body1"
                        color="#C0B4A3"
                        sx={{
                            fontStyle: 'italic',
                            marginBottom: '1.4rem'
                        }}
                    >
                        {item.description}
                    </Typography>
                </Typography>
            ))}
        </Box>
    );
};

export default EquipmentBox;



