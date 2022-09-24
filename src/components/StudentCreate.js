import React, { useState, useEffect } from "react";
import { Paper, TextField, Button, MenuItem } from "@mui/material";
import axios from "axios";
const Teacher_url = "https://62dcbf6f4438813a2618d496.mockapi.io/teacher";
const Student_url = "https://62dcbf6f4438813a2618d496.mockapi.io/student";

function StudentCreate() {
    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [mobile, setMobile] = useState("");
    let [teacher, setTeacher] = useState("");
    let [teacher_res, setTeacher_res] = useState([]);

    useEffect(() => {
        getData();
    }, []);
    let getData = async () => {
        let teacher_data = await axios.get(Teacher_url);
        setTeacher_res(teacher_data.data);
    };

    let handleSubmit = async () => {
        let id = teacher_res.filter(ele => ele.name === teacher)
        let idData = {
            students: [name]
        }
        console.log(idData);
        let data = {
            name,
            email,
            mobile,
            teacher
        };
        await axios.post(Student_url, data);
        await axios.put(`${Teacher_url}/${id[0].id}`, idData)
    };

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
                    <TextField
                        select
                        fullWidth
                        label="Teacher"
                        onChange={(e) => setTeacher(e.target.value)}
                        helperText="Please select a Teacher"
                        margin="dense"
                    >
                        {teacher_res.map((option) => (
                            <MenuItem key={option.name} value={option.name}>
                                {option.name}
                            </MenuItem>
                        ))}
                    </TextField>
                    <Button
                        variant="contained"
                        size="large"
                        sx={{ mt: 2 }}
                        onClick={() => handleSubmit()}
                    >
                        Submit
                    </Button>
                </form>
            </Paper>
        </>
    );
}

export default StudentCreate;