import React from 'react'
import Pagination from "@material-ui/lab/Pagination";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
    },
  });

function CustomPagination({ setPage, numOfPages = 10 }) {

    const handlePageChange = (page) => {
        setPage(page);                      
        window.scroll(0, 0);                    //scrolling to the toop of new page
    }

    return (
        <div
        style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            margin: "2.4rem 0"
        }}
        >
            <ThemeProvider theme= {darkTheme}>
                <Pagination
                onChange={(e) => handlePageChange(e.target.textContent)}  //textContent from MaterialUI
                count={numOfPages}
                variant = 'outlined'
                shape = "rounded"
                hideNextButton
                hidePrevButton
                />
            </ThemeProvider>
        </div>
    )
}

export default CustomPagination
