'use client'
import React from 'react';
import {MenuItem} from "@mui/material";

function MenuItems({label}) {
    return (
        <MenuItem
            className={" font-semibold  text-sm text-black"}>{label}</MenuItem>

    );
}

export default MenuItems;