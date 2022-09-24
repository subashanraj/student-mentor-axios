import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import axios from "axios";
const url = "https://62dcbf6f4438813a2618d496.mockapi.io/student";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
    },
    "&:last-child td, &:last-child th": {
        border: 0,
    },
}));

function StudentTable() {
    let [data, setData] = useState([]);
    useEffect(() => {
        getData();
    }, []);
    let getData = async () => {
        let teacher_data = await axios.get(url);
        setData(teacher_data.data);
        // console.log(teacher_data.data);
    };
    let handleDelete = async (i) => {
        try {
            await axios.delete(`${url}/${i}`);
        } catch (error) {
            console.log(error);
        }
        getData();
    };
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 600 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Student ID</StyledTableCell>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell>Email</StyledTableCell>
                            <StyledTableCell>Mobile</StyledTableCell>
                            <StyledTableCell>Teacher</StyledTableCell>
                            <StyledTableCell align="right">Action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((e) => (
                            <StyledTableRow key={e.name}>
                                <StyledTableCell>S-ID-{e.id}</StyledTableCell>
                                <StyledTableCell>{e.name}</StyledTableCell>
                                <StyledTableCell>{e.email}</StyledTableCell>
                                <StyledTableCell>{e.mobile}</StyledTableCell>
                                <StyledTableCell>{e.teacher}</StyledTableCell>
                                <StyledTableCell align="right">
                                    <ButtonGroup disableElevation variant="contained">
                                        <Button>Edit</Button>
                                        <Button
                                            variant="contained"
                                            color="error"
                                            onClick={() => handleDelete(e.id)}
                                        >
                                            Delete
                                        </Button>
                                    </ButtonGroup>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

export default StudentTable;