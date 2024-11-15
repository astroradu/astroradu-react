import React from 'react';
import { Container, List, ListItem, ListItemText, Typography, Paper } from '@mui/material';

// Define a type for the options
interface Option {
    id: number;
    title: string;
    description: string;
}

// Define the options array with the correct type
const options: Option[] = [
    { id: 1, title: 'Dashboard', description: 'View your main dashboard' },
    { id: 2, title: 'Reports', description: 'Access your reports' },
    { id: 3, title: 'Settings', description: 'Change your preferences' },
    { id: 4, title: 'Help', description: 'Get support and help' },
];

// Define the component as a functional component with TypeScript
const Test: React.FC = () => {
    return (
        <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
            <Paper style={{ padding: '1rem' }}>
                <Typography variant="h4" gutterBottom>
                    Options
                </Typography>
                <List>
                    {options.map((option) => (
                        <ListItem key={option.id}>
                            <ListItemText
                                primary={option.title}
                                secondary={option.description}
                            />
                        </ListItem>
                    ))}
                </List>
            </Paper>
        </Container>
    );
};

export default Test;