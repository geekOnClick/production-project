import { render } from "react-dom";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import { Theme } from "./themes/ThemeContext";
import { ThemeProvider } from "./themes/ThemeProvider";

render(
    <Suspense fallback={<div>Loading...</div>}>
        <ThemeProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ThemeProvider>
    </Suspense>
    ,
    document.getElementById('root')
)