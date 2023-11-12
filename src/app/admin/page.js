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
                <div>
                    <b>Name:</b> {data?.full_name?.value}
                </div>
                <div>
                    <b>Age:</b> {data?.age?.value}
                </div>
                <div>
                    <b>Gender:</b> {data?.gender?.value}
                </div>
                <div>
                    <b>Position:</b> {data?.isCEO?.value ? "CEO" : "CEO, CTO"}
                </div>
            </div>
        ),
    },
    {
        title: "Project",
        render: (data) => (
            <div>
                <div>
                    <b> Lifetime:</b> {data?.lifetime?.value}
                </div>
                <div className="max-w-sm">
                    <b>Description: </b>
                    {data?.main_job?.value}
                </div>
                <div>
                    <b>Pitchdeck:</b>{" "}
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
        filters: [
            {
                value: "EdTech",
                text: "EdTech",
            },
            {
                value: "FinTech",
                text: "FinTech",
            },
            {
                value: "MedTech",
                text: "MedTech",
            },
            {
                value: "E-Commerce",
                text: "E-Commerce",
            },
            {
                value: "AI & ML",
                text: "AI & ML",
            },
            {
                value: "Blockchain",
                text: "Blockchain",
            },
        ],
        onFilter: (value, record) => {
            return record.tech?.value == value;
        },
    },
    {
        title: "Stage",
        render: (data) => (
            <div>
                <div> {data?.stage?.value}</div>
            </div>
        ),
        filters: [
            {
                text: "MVP",
                value: "MVP",
            },
            {
                text: "Идея",
                value: "Идея",
            },
            {
                text: "Пилотное тестирование",
                value: "Пилотное тестирование",
            },
            {
                text: "PMF",
                value: "PMF",
            },
            {
                text: "Масштабирование",
                value: "Масштабирование",
            },
            {
                text: "Расширение",
                value: "Расширение",
            },
        ],
        onFilter: (value, record) => {
            return record.stage?.value == value;
        },
    },
    {
        title: "Invested",
        render: (data) => (
            <div>
                <div>
                    <Checkbox
                        checked={data?.isInvestmented?.value == "Да"}
                    ></Checkbox>{" "}
                </div>
            </div>
        ),
        filters: [
            {
                value: "Да",
                text: "True",
            },
            {
                value: "Нет",
                text: "False",
            },
        ],
        onFilter: (value, record) => {
            return record.isInvestmented?.value == value;
        },
    },
    {
        title: "Production",
        render: (data) => (
            <div>
                <div>
                    <Checkbox
                        checked={data?.isInProduction?.value == "Да"}
                    ></Checkbox>{" "}
                </div>
            </div>
        ),
        filters: [
            {
                value: "Да",
                text: "True",
            },
            {
                value: "Нет",
                text: "False",
            },
        ],
        onFilter: (value, record) => {
            return record.isInProduction?.value == value;
        },
    },
    {
        title: "Fundraising",
        render: (data) => (
            <div>
                <div>
                    <Checkbox
                        checked={data?.isInRound?.value == "Да"}
                    ></Checkbox>{" "}
                </div>
            </div>
        ),
        filters: [
            {
                value: "Да",
                text: "True",
            },
            {
                value: "Нет",
                text: "False",
            },
        ],
        onFilter: (value, record) => {
            return record.isInRound?.value == value;
        },
    },
    {
        title: "Users",
        render: (data) => (
            <div>
                <div>{data?.user_count?.value}</div>
            </div>
        ),
        sorter: (a, b) => {
            return Number(a.user_count.value) - Number(b.user_count.value);
        },
    },
    {
        title: "Questions",
        render: (data) => (
            <div className="max-w-sm">
                <div>
                    {" "}
                    <b>Почему вы выбрали эту идею?</b> {data?.experience?.value}
                </div>
                <br></br>
                <div>
                    {" "}
                    <b>Кто ваши конкуренты</b> {data?.concurents?.value}
                </div>
                <br></br>
                <div>
                    {" "}
                    <b>Как пользователи находят ваш продукт?</b>{" "}
                    {data?.users_input?.value}
                </div>
            </div>
        ),
    },
];

const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
};

export default function Admin() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const fetchData = async () => {
        try {
            setLoading(true);
            const { data: axiosData } = await axios.get(
                "https://most-back.vercel.app/get-all"
            );
            setData(axiosData.map((e, key) => ({ key, ...e })));
        } catch (error) {
        } finally {
            setLoading(false);
        }
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
                loading={loading}
            />
        </div>
    );
}
