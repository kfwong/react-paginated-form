import React, {createContext, useContext, useState} from 'react';
import {Breadcrumb} from "./Breadcrumb";

interface PaginatedFormProps {
    titles: string[];
    // optional
    onChangePage?: (oldPage: number, newPage: number) => number; // return: page index to goto
}

type PaginatedFormControl = {
    nextPage: () => void
    previousPage: () => void
    gotoPage: (page: number) => void
}

const PaginatedFormControlContext = createContext({} as PaginatedFormControl);

export const usePaginatedFormControl = () => useContext(PaginatedFormControlContext);

export const PaginatedForm: React.FC<PaginatedFormProps> = (props) => {
    const [currentPage, setPage] = useState(0)
    const formCount = React.Children.count(props.children);

    const onNextHandler = () => {
        if (currentPage >= formCount - 1) return;
        const nextPage = currentPage + 1;
        const targetPage = props.onChangePage?.(currentPage, nextPage) || nextPage;
        setPage(targetPage);
    }

    const onPreviousHandler = () => {
        if (currentPage <= 0) return;
        const previousPage = currentPage - 1;
        const targetPage = props.onChangePage?.(currentPage, previousPage) || previousPage;
        setPage(targetPage);
    }

    const onGotoHandler = (page: number) => {
        if (page === undefined) return;
        if (page < 0 || page > formCount - 1) return;
        const targetPage = props.onChangePage?.(currentPage, page) || page;
        setPage(targetPage);
    }

    const paginatedFormControl = {
        nextPage: () => onNextHandler(),
        previousPage: () => onPreviousHandler(),
        gotoPage: (page: number) => onGotoHandler(page)
    }

    const onBreadcrumbClickHandler = (oldPage: number, newPage: number) => {
        onGotoHandler(newPage);
        return currentPage;
    }

    return <>
        <div style={{
            display: "flex",
            flexDirection: "row",
            gap: "20px"
        }}>
            <PaginatedFormControlContext.Provider value={paginatedFormControl}>
                <Breadcrumb
                  breadcrumbs={props.titles}
                  selectedIndex={currentPage}
                  onClick={onBreadcrumbClickHandler}
                />
                <div>
                    {  React.Children.map(props.children, (child, index) =>  {
                        // hide the form if it is not the current page
                        return <div hidden={index !== currentPage}>{child}</div>;
                    }) }
                </div>
            </PaginatedFormControlContext.Provider>
        </div>
    </>;
};
