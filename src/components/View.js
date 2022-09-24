import React from "react";
import { Outlet, Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";


function View() {

    const buttons = [
        <Button key="one" ><Link to={"teachertable"} style={{ textDecoration: "none" }}>Teacher</Link></Button>,
        <Button key="two"><Link to={"studenttable"} style={{ textDecoration: "none" }}>Student</Link></Button>,
    ];
    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    "& > *": {
                        m: 1,
                    },
                }}
            >
                <ButtonGroup size="large" color="secondary">
                    {buttons}
                </ButtonGroup>
            </Box>
            <Outlet />
        </>
    );
}

export default View;