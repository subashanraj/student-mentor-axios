import React, { useState } from "react";
import { Paper, TextField, Button } from "@mui/material";
import axios from "axios";
const Teacher_url = "https://62dcbf6f4438813a2618d496.mockapi.io/teacher";

function TeacherCreate() {
    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [mobile, setMobile] = useState("");

    let handleSubmit = async () => {
        let data = {
            name,
            email,
            mobile,
        }
        await axios.post(Teacher_url, data);
    }

    return (
        <>
            <Paper
                sx={{
                    p: 2,
                    margin: "auto",
                    maxWidth: 700,
                    flexGrow: 1,
                }}
                style={{ backgroundColor: "#FFD6B8" }}
                elevation={3}
            >
                <form>
                    <TextField
                        fullWidth
                        label="Name"
                        variant="outlined"
                        onChange={(e) => setName(e.target.value)}
                        margin="dense"
                    />
                    <TextField
                        fullWidth
                        label="Email"
                        variant="outlined"
                        onChange={(e) => setEmail(e.target.value)}
                        margin="dense"
                    />
                    <TextField
                        fullWidth
                        label="Mobile"
                        variant="outlined"
                        onChange={(e) => setMobile(e.target.value)}
                        margin="dense"
                    />
                    <Button variant="contained" size="large" sx={{ mt: 2 }} onClick={() => handleSubmit()}>
                        Submit
                    </Button>
                </form>
            </Paper>
        </>
    );
}

export default TeacherCreate;