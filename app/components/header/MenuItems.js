'use client'
import React from 'react';
import {MenuItem} from "@mui/material";

function MenuItems({label,onClick}) {
    return (
        <MenuItem onClick={onClick}
            className={" font-semibold  text-sm text-black"}>{label}</MenuItem>

    );
}

export default MenuItems;