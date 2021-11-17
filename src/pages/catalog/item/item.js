import React from "react";
import { useParams } from "react-router-dom";

export default function Item() {
    let params = useParams();
    let id = params.item.match(/(\d+)/)[0];
    return (
        <h2>{params.item} - id = {+id}</h2>
    );
}