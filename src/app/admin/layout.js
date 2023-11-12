"use client";

import { Button, Form, Input } from "antd";
import { useEffect, useState } from "react";

export default function AdminLayout({ children }) {
    const [u, sU] = useState();
    const [p, sP] = useState();
    const [a, sA] = useState(false);
    useEffect(() => {
        if (localStorage["auth"] == "True") sA(true);
    }, []);
    if (a) {
        return children;
    }

    return (
        <div className="w-full flex flex-col items-center pt-20">
            <h1 className="uppercase font-medium text-[#bd302d] text-3xl mb-8">
                Login
            </h1>
            <Form layout="vertical">
                <Form.Item
                    name="name"
                    label="Username"
                    className="mb-4"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input
                        aria-autocomplete="none"
                        value={u}
                        onChange={(e) => {
                            sU(e.target.value);
                        }}
                    />
                </Form.Item>
                <Form.Item
                    name="age"
                    label="Password"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input
                        type="password"
                        value={p}
                        onChange={(e) => {
                            sP(e.target.value);
                        }}
                    />
                </Form.Item>
                <div className="flex justify-center">
                    <Button
                        className="w-full"
                        onClick={() => {
                            if (u == "admin" && p == "admin") {
                                localStorage["auth"] = "True";
                                sA(true);
                            }
                        }}
                    >
                        Submit
                    </Button>
                </div>
            </Form>
        </div>
    );
}
