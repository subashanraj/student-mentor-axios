import React, { useState, useEffect } from "react";
import { Outlet, Link,} from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import axios from "axios";
const url = "https://62dcbf6f4438813a2618d496.mockapi.io/student";

function Create() {
    let [disable, setDisable] = useState();
   
    useEffect(() => {
        getData();
    }, []);
    let getData = async () => {
        let teacher_data = await axios.get(url);
        console.log(teacher_data);
        if (teacher_data.data.length != null) {
            setDisable(true);
            console.log("student is active " + disable);
        } else {
            setDisable(false);
            console.log("student is disable " + disable);
        }
   
    };
    const buttons = [
        <Button key="one">
            <Link to={"create-teacher"} style={{ textDecoration: "none" }}>
                Teacher
            </Link>
        </Button>,
        <Button key="two" >
            <Link
                style={{ pointerEvents: disable ? "" : "none", textDecoration: "none" }}
                to={"create-student"}
            >
                Student
            </Link>
        </Button>,
    ];

    return (
        <>
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
                    <ButtonGroup size="large" color="primary">
                        {buttons}
                    </ButtonGroup>
                </Box>
                <Outlet />
            </>
        </>
    );
}

export default Create;