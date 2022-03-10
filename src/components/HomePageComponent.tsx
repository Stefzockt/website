// @flow
import { Box, Button, Card, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, List, ListItem, Stack, Typography } from '@mui/material';
import * as React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import PropTypes from 'prop-types';
import 'swiper/css';
  import 'swiper/css/navigation';
import "../styles/HomePage.scss"

export const HomePageComponent = () => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (

        <>
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >   
            <DialogTitle>
            <Typography variant="h4">Upcoming server maintenance on 20.03.2022</Typography>
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    We will conduct a server maintenance on the 20.03.2022 from approximately 8pm GMT until 10pm GMT. 
                    Please understand that during this time users will not be able to make purchases through our platform.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Close
                </Button>
            </DialogActions>
        </Dialog>

        <div id="container">
                <div>
                    <Box id="banner">
                        <Typography id="headline" variant="h1">NFT TRADING</Typography>
                    </Box>
                </div>
                <div id="newsFeed">
                    <Typography id="newsHeadline" variant="h2">Latest News</Typography>
                    <Swiper navigation={true} modules={[Navigation]} className="swiper">
                        <SwiperSlide className="swiperSlide">
                            <img className="swiperImg" src="https://www.equipment-hq.co.uk/wp-content/uploads/2020/03/iStock-1131198189.jpg" />
                            <Typography className="swiperHeadline" variant="h3">Upcoming server maintenance on 20.03.2022</Typography>
                            <Button variant="contained" onClick={handleClickOpen}>Learn more</Button>
                        </SwiperSlide>
                        <SwiperSlide className="swiperSlide">Slide 2</SwiperSlide>
                        <SwiperSlide className="swiperSlide">Slide 3</SwiperSlide>
                    </Swiper>
                    <div id="featureContainer">
                        <p id="featuresHeader">What we offer:</p>
                        <Stack id="featureList" direction="row">
                            <Card className="cards">
                                <CardMedia
                                    className="imgContainer"
                                    component="img"
                                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSHv1TJK0v9obz-D0zh522GbHwxSTvunzUx2dCcRcMDiJPqczp1yopDijcTX9M4e737lo&usqp=CAU" />

                                <CardContent>
                                    <Typography gutterBottom variant="h3" component="div">
                                        Zero transaction fees
                                    </Typography>

                                    <Typography variant="body1" className="cardSubText">
                                        There are no transaction fees when making a purchase throuh our website.
                                    </Typography>
                                </CardContent>
                            </Card>

                            <Card className="cards">
                                <CardMedia
                                    className="imgContainer"
                                    component="img"
                                    image="https://th.bing.com/th/id/R.ffd123e7c06ec5de769143166c9e6c51?rik=GURPzOGst1adgg&pid=ImgRaw&r=0" />

                                <CardContent>
                                    <Typography gutterBottom variant="h3" component="div">
                                        Real-time feedback
                                    </Typography>

                                    <Typography variant="body1" className="cardSubText">
                                        We offer real-time tracking of market prices and development.
                                    </Typography>
                                </CardContent>
                            </Card>

                            <Card className="cards">
                                <CardMedia
                                    className="imgContainer"
                                    component="img"
                                    image="" //insert image
                                />

                                <CardContent>
                                    <Typography gutterBottom variant="h3" component="div">
                                        Exclusive deals and offers
                                    </Typography>

                                    <Typography variant="body1" className="cardSubText">
                                        We work with artists and creators to secure exclusive deals and offers for our users.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Stack>
                    </div>
                </div>
            </div></>
    );
};