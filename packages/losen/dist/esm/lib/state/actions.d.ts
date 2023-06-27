export declare const SET_DATA: "SET_DATA";
export declare const RESET_DATA: "RESET_DATA";
export declare const SHOW_RESET_MODAL: "SHOW_RESET_MODAL";
export declare function setData(key: string, value: any): {
    type: "SET_DATA";
    payload: {
        key: string;
        value: any;
    };
};
export declare function resetData(): {
    type: "RESET_DATA";
};
export declare function resetModal(show?: boolean): {
    type: "SHOW_RESET_MODAL";
    payload: {
        show: boolean;
    };
};
export declare function setLanguage(language: string): {
    type: "SET_DATA";
    payload: {
        key: string;
        value: any;
    };
};
export type Action = ReturnType<typeof setData> | ReturnType<typeof resetData> | ReturnType<typeof resetModal>;
