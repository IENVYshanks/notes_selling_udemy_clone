import React, { useState } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Button, Divider, TextField } from '@mui/material';
import Intended from './CourseSection.jsx/Intended';
import Curriculum from './CourseSection.jsx/Curriculum';
import Pricing from './CourseSection.jsx/Pricing';
import CourseMessage from './CourseSection.jsx/CourseMessage';
import SetUp from './CourseSection.jsx/SetUp';
import CourseStructure from './CourseSection.jsx/CourseStructure';

export const Upload = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (item) => {
        console.log(`Clicked on "${item}"`);
        setSelectedItem(item);
    };

    return (
        <Box sx={{ margin: '70px', display: 'flex', justifyContent: 'space-evenly' }}>
            <Box
                sx={{
                    width: '20%',
                    bgcolor: 'background.paper',
                }}
            >
                <List component="nav" aria-label="main mailbox folders">
                    <ListItemButton onClick={() => handleItemClick('Plan your course')}>
                        <ListItemText primaryTypographyProps={{ variant: 'h6', fontWeight: 'bold' }} primary="Plan your course" />
                    </ListItemButton>
                    <ListItemButton onClick={() => handleItemClick('Intended learners')}>
                        <ListItemText primary="Intended learners" />
                    </ListItemButton>
                    <ListItemButton onClick={() => handleItemClick('Course structure')}>
                        <ListItemText primary="Course structure" />
                    </ListItemButton>
                    <ListItemButton onClick={() => handleItemClick('Setup & test video')}>
                        <ListItemText primary="Setup & test video" />
                    </ListItemButton>
                </List>

                <List component="nav" aria-label="secondary mailbox folder">
                    <ListItemButton onClick={() => handleItemClick('Create your content')}>
                        <ListItemText primaryTypographyProps={{ variant: 'h6', fontWeight: 'bold' }} primary="Create your content" />
                    </ListItemButton>
                    <ListItemButton onClick={() => handleItemClick('Film & edit')}>
                        <ListItemText primary="Film & edit" />
                    </ListItemButton>

                    <ListItemButton onClick={() => handleItemClick('Curriculum')}>
                        <ListItemText primary="Curriculum" />
                    </ListItemButton>
                    <ListItemButton onClick={() => handleItemClick('Captions (optional)')}>
                        <ListItemText primary="Captions (optional)" />
                    </ListItemButton>
                    <ListItemButton onClick={() => handleItemClick('Accessibility (optional)')}>
                        <ListItemText primary="Accessibility (optional)" />
                    </ListItemButton>
                    <ListItemButton onClick={() => handleItemClick('Publish your course')}>
                        <ListItemText primaryTypographyProps={{ variant: 'h6', fontWeight: 'bold' }} primary="Publish your course" />
                    </ListItemButton>
                    <ListItemButton onClick={() => handleItemClick('Course landing page')}>
                        <ListItemText primary="Course landing page" />
                    </ListItemButton>
                    <ListItemButton onClick={() => handleItemClick('Pricing')}>
                        <ListItemText primary="Pricing" />
                    </ListItemButton>
                    <ListItemButton onClick={() => handleItemClick('Promotions')}>
                        <ListItemText primary="Promotions" />
                    </ListItemButton>
                    <ListItemButton onClick={() => handleItemClick('Course messages')}>
                        <ListItemText primary="Course messages" />
                    </ListItemButton>
                </List>
                <Button
                    variant="contained"
                    sx={{
                        bgcolor: 'rgb(164, 53, 240)',
                        borderRadius: '0px',
                        fontSize: '1.01rem',
                        marginLeft: '-80px',
                        '&:hover': {
                            bgcolor: 'rgb(124, 33, 200)',
                        },
                    }}
                >
                    Submit For Review
                </Button>
            </Box>

            <Box
                sx={{
                    bgcolor: 'background.paper',
                    padding: '450px',
                    paddingBottom: '500px',
                    border: '0.2px solid',
                    borderColor: 'white',
                    position: 'relative',
                    boxShadow: '0px 4px 8px rgba(128, 128, 128, 1)',
                }}
            >
                {selectedItem === 'Curriculum' ? (
                    <Curriculum />
                ) : selectedItem === 'Pricing' ? (
                    <Pricing />
                ) : selectedItem === 'Course messages' ? (
                    <CourseMessage />
                ) : selectedItem === 'Setup & test video' ? (
                    <SetUp />
                ) : selectedItem === 'Course structure' ? (
                    <CourseStructure />
                ) : (
                    // Render the default content
                    <>
                                                <h3
                            style={{
                                position: 'absolute',
                                top: '20px',
                                left: '20px',
                                padding: '10px',
                                fontSize: '25px',
                                fontFamily: 'times',
                                fontWeight: 'bold',
                            }}
                        >
                            Intended Content
                        </h3>
                        <Divider
                            sx={{
                                width: '80%',
                                margin: '20px auto',
                                color: 'black',
                            }}
                        />
                        <Box
                            sx={{
                                position: 'absolute',
                                top: '100px',
                                left: '20px',
                                display: 'flex',
                                flexDirection: 'column',
                                width: '800px',
                                textWrap: 'wrap',
                            }}
                        >
                            <Intended />
                        </Box>
                    </>
                )}
            </Box>
        </Box>
    );
};