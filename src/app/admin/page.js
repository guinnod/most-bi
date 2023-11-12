"use client";
import React, { useEffect, useState } from "react";
import { Checkbox, Table } from "antd";
import axios from "axios";
import Link from "next/link";
const columns = [
    {
        title: "CEO",
        render: (data) => (
            <div>
                <div>Name: {data?.full_name?.value}</div>
                <div>Age: {data?.age?.value}</div>
                <div>Gender: {data?.gender?.value}</div>
                <div>Position: {data?.isCEO?.value ? "CEO" : "Worker"}</div>
            </div>
        ),
    },
    {
        title: "Startup",
        render: (data) => (
            <div>
                <div>Lifetime: {data?.lifetime?.value}</div>
                <div className="max-w-sm">
                    Main job: {data?.main_job?.value}
                </div>
                <div>
                    Pitchdeck:{" "}
                    <Link
                        className="text-indigo-600"
                        href={data?.pitchdeck?.value[0]?.url || ""}
                        target="_blank"
                    >
                        {data?.pitchdeck?.value[0]?.name}
                    </Link>
                </div>
            </div>
        ),
    },
    {
        title: "Tech",
        render: (data) => (
            <div>
                <div>{data?.tech?.value}</div>
            </div>
        ),
    },
    {
        title: "Stage",
        render: (data) => (
            <div>
                <div> {data?.stage?.value}</div>
            </div>
        ),
    },
    {
        title: "Investmented",
        render: (data) => (
            <div>
                <div>
                    <Checkbox
                        checked={data?.isInvestmented?.value == "Да"}
                    ></Checkbox>{" "}
                </div>
            </div>
        ),
    },
    {
        title: "isInProduction",
        render: (data) => (
            <div>
                <div>
                    <Checkbox
                        checked={data?.isInProduction?.value == "Да"}
                    ></Checkbox>{" "}
                </div>
            </div>
        ),
    },
    {
        title: "isInRound",
        render: (data) => (
            <div>
                <div>
                    <Checkbox
                        checked={data?.isInRound?.value == "Да"}
                    ></Checkbox>{" "}
                </div>
            </div>
        ),
    },
    {
        title: "Questions",
        render: (data) => (
            <div className="max-w-sm">
                <div> experience: {data?.experience?.value}</div>
                <div> concurents: {data?.concurents?.value}</div>
                <div> users_input: {data?.users_input?.value}</div>
            </div>
        ),
    },
];

const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
};

export default function Admin() {
    const [data, setData] = useState([]);
    const fetchData = async () => {
        try {
            const { data: axiosData } = await axios.get(
                "http://localhost:5000/get-all"
            );
            setData(axiosData.map((e, key) => ({ key, ...e })));
        } catch (error) {}
    };
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div>
            <Table
                columns={columns}
                rowKey={(e) => e.key}
                dataSource={data}
                onChange={onChange}
            />
        </div>
    );
}
