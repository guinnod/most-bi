"use client";

import React from "react";
import { createCache, extractStyle, StyleProvider } from "@ant-design/cssinjs";
import { useServerInsertedHTML } from "next/navigation";
import { App, ConfigProvider } from "antd";

export const AntdProvider = ({ children }) => {
    const cache = React.useMemo(() => createCache(), []);
    const isServerInserted = React.useRef(false);
    useServerInsertedHTML(() => {
        if (isServerInserted.current) {
            return;
        }
        isServerInserted.current = true;
        return (
            <style
                id="antd"
                dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }}
            />
        );
    });
    return (
        <StyleProvider cache={cache}>
            <ConfigProvider>
                <App>{children}</App>
            </ConfigProvider>
        </StyleProvider>
    );
};
